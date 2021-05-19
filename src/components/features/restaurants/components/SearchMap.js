import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../../services/location/LocationContext";

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.sizes[0]};

  font-family: ${({ theme }) => theme.fonts.body};
  position: absolute;
  z-index: 999;
  top: 30px;
  width: 100%;
`;

export const SearchMap = () => {
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
        icon="map"
        onChangeText={onChangeSearch}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
        value={searchQuery}
      />
    </SearchContainer>
  );
};
