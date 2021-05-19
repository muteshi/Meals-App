import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { AppText } from "./AppText";
import { MapRestaurantInfo } from "./MapRestaurantInfo";

const FavoritesContainer = styled.View`
  padding: 10px;
`;

const FavoritesView = styled.View`
  margin-right: 10px;
`;

export const FavoritesBar = ({ favorites }) => {
  const navigation = useNavigation();

  return (
    <FavoritesContainer>
      <AppText>
        {favorites.length
          ? "Your favorite restaurants"
          : "You have not added any favorite restaurants yet"}
      </AppText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((favoriteRestaurant) => {
          const key = favoriteRestaurant.name;
          return (
            <FavoritesView key={key}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetails", {
                    restaurant: favoriteRestaurant,
                  })
                }
              >
                <MapRestaurantInfo restaurant={favoriteRestaurant} key={key} />
              </TouchableOpacity>
            </FavoritesView>
          );
        })}
      </ScrollView>
    </FavoritesContainer>
  );
};
