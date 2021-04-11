import React, { useState } from "react";
import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";
import { RestaurantCardComponent } from "../components/restaurant-card";

const SearchContainer = styled.View`
  padding: 16px;
  background-color: white;
`;
const RestaurantListContainer = styled.View`
  background-color: orange;
  flex: 1;
  padding: 10px;
`;

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
      <RestaurantListContainer>
        <RestaurantCardComponent />
      </RestaurantListContainer>
    </>
  );
};
