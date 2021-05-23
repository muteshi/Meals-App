import React, { useContext } from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import { FavoritesContext } from "../../../../services/favorites/FavoritesContext";
import { Screen } from "../../../../utils/Screen";
import { ListItem } from "../../../common/ListItem";
import { ListItemDeleteAction } from "../../../common/ListItemDeleteAction";
import { ListItemSeparator } from "../../../common/ListItemSeparator";
import { AppText } from "../components/AppText";

export const FavoritesScreen = ({ navigation }) => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  const NoFavoriteText = styled(AppText)`
    text-align: center;
    justify-content: center;
  `;

  return (
    <Screen>
      {favorites.length ? (
        <FlatList
          data={favorites}
          keyExtractor={(restaurant) => restaurant.placeId}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.name}
              onPress={() =>
                navigation.navigate("RestaurantDetails", {
                  restaurant: item,
                })
              }
              image={item.photos[0]}
              subTitle={item.vicinity}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => removeFavorite(item)} />
              )}
            />
          )}
        />
      ) : (
        <NoFavoriteText variant="label">No Favorites added </NoFavoriteText>
      )}
    </Screen>
  );
};
