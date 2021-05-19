import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../../services/location/LocationContext";

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.sizes[0]};
  background-color: ${({ theme }) => theme.colors.ui.white};
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const SearchRestaurants = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Enter location to search..."
        onChangeText={onChangeSearch}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
        value={searchQuery}
      />
    </SearchContainer>
  );
};
