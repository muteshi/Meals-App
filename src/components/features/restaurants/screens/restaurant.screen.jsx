import React, { useState } from "react";
import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";
import { RestaurantCardComponent } from "../components/restaurant-card";
import { FlatList } from "react-native";
import { ListItemSeparator } from "../../../common/ListItemSeparator";

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.sizes[0]};
  background-color: ${({ theme }) => theme.colors.ui.white};
  font-family: ${({ theme }) => theme.fonts.body};
`;
const RestaurantListContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.ui.white};
  flex: 1;
  padding: ${({ theme }) => theme.sizes[0]};
`;

const restaurants = [
  {
    name: "Kite Restaurant",
    icon:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://cdn.pixabay.com/photo/2015/05/15/14/55/cafe-768771_960_720.jpg",
    ],
    isClosedTemporarily: true,
    address: "Kitengela, Kajiado Kenya",
    isOpenNow: false,
    rating: 3,
  },
  {
    name: "Nairobi Restaurant",
    icon:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://cdn.pixabay.com/photo/2015/05/15/14/55/cafe-768771_960_720.jpg",
    ],
    isClosedTemporarily: false,
    address: "Kajiado Kenya",
    isOpenNow: true,
    rating: 2,
  },
  {
    name: "Mimi Restaurant",
    icon:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg",
    ],
    isClosedTemporarily: true,
    address: "Nairobi Kenya",
    isOpenNow: false,
    rating: 5,
  },
  {
    name: "Haha Restaurant",
    icon:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/05/15/14/55/cafe-768771_960_720.jpg",
    ],
    isClosedTemporarily: true,
    address: "Khayega, Kakamega Kenya",
    isOpenNow: false,
    rating: 1,
  },
];

export const RestaurantScreen = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <FlatList
        data={restaurants}
        ItemSeparatorComponent={ListItemSeparator}
        keyExtractor={(h) => h.name}
        renderItem={({ item }) => (
          <RestaurantCardComponent
            name={item.name}
            icon={item.icon}
            photos={item.photos[0]}
            isClosedTemporarily={item.isClosedTemporarily}
            address={item.address}
            isOpenNow={item.isOpenNow}
            rating={item.rating}
          />
        )}
      />
    </>
  );
};
