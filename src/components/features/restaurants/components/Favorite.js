import { AntDesign } from "@expo/vector-icons";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { FavoritesContext } from "../../../../services/favorites/FavoritesContext";
import { restaurantsTransform } from "../../../../services/restaurants/RestaurantService";

const FavoriteBtn = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 9;
`;

export const Favorite = ({ restaurant }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(
    FavoritesContext
  );

  const isFavorite = favorites.find(
    (favoriteRestaurant) => favoriteRestaurant.placeId === restaurant.placeId
  );

  return (
    <FavoriteBtn
      onPress={() => {
        !isFavorite ? addFavorite(restaurant) : removeFavorite(restaurant);
      }}
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={28}
        color={isFavorite ? "red" : "white"}
      />
    </FavoriteBtn>
  );
};
