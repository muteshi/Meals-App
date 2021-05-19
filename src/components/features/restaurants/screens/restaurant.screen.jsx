import React, { useContext, useState } from "react";

import { RestaurantCardComponent } from "../components/restaurant-card";
import { FlatList, Pressable } from "react-native";
import { ListItemSeparator } from "../../../common/ListItemSeparator";
import { RestaurantContext } from "../../../../services/restaurants/RestaurantContext";
import { Screen } from "../../../../utils/Screen";
import { Loader } from "../../../common/Loader";
import { SearchRestaurants } from "../components/SearchRestaurants";
import { useNavigation } from "@react-navigation/core";

export const RestaurantScreen = (props) => {
  const { restaurants, loading, error } = useContext(RestaurantContext);

  const navigation = useNavigation();

  return (
    <Screen>
      <SearchRestaurants />
      {!loading ? (
        <>
          <FlatList
            data={restaurants}
            ItemSeparatorComponent={ListItemSeparator}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <Pressable
                onPress={() =>
                  navigation.navigate("RestaurantDetails", { restaurant: item })
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
                />
              </Pressable>
            )}
          />
        </>
      ) : (
        <Loader />
      )}
    </Screen>
  );
};
