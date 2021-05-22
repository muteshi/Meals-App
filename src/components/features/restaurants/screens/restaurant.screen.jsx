import React, { useContext, useState } from "react";

import { RestaurantCardComponent } from "../components/restaurant-card";
import { FlatList, Pressable } from "react-native";
import { ListItemSeparator } from "../../../common/ListItemSeparator";
import { RestaurantContext } from "../../../../services/restaurants/RestaurantContext";
import { Screen } from "../../../../utils/Screen";
import { Loader } from "../../../common/Loader";
import { SearchRestaurants } from "../components/SearchRestaurants";
import { useNavigation } from "@react-navigation/core";
import { FavoritesContext } from "../../../../services/favorites/FavoritesContext";
import { FavoritesBar } from "../components/FavoritesBar";

export const RestaurantScreen = (props) => {
  const { favorites } = useContext(FavoritesContext);
  const { restaurants, loading, error } = useContext(RestaurantContext);
  const [isToggled, setIsToggled] = useState(false);

  const navigation = useNavigation();

  return (
    <Screen>
      <Loader isLoading={loading} />
      <SearchRestaurants
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && <FavoritesBar favorites={favorites} />}

      <FlatList
        data={restaurants}
        ItemSeparatorComponent={ListItemSeparator}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("RestaurantDetails", {
                restaurant: item,
              })
            }
          >
            <RestaurantCardComponent
              name={item.name}
              icon={item.icon}
              photos={item.photos[0]}
              isClosedTemporarily={item.isClosedTemporarily}
              address={item.vicinity}
              isOpenNow={item.isOpenNow}
              rating={item.rating}
              placeId={item.placeId}
              restaurant={item}
            />
          </Pressable>
        )}
      />
    </Screen>
  );
};
