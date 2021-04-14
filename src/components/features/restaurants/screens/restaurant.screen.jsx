import React, { useState } from "react";
import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";
import { RestaurantCardComponent } from "../components/restaurant-card";

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
