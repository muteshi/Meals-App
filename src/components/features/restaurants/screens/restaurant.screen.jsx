import React, { useContext, useState } from "react";

import { RestaurantCardComponent } from "../components/restaurant-card";
import { FlatList } from "react-native";
import { ListItemSeparator } from "../../../common/ListItemSeparator";
import { RestaurantContext } from "../../../../services/restaurants/RestaurantContext";
import { Screen } from "../../../../utils/Screen";
import { Loader } from "../../../common/Loader";
import { Search } from "../components/Search";

export const RestaurantScreen = (props) => {
  const { restaurants, loading, error } = useContext(RestaurantContext);

  return (
    <Screen>
      <Search />
      {!loading ? (
        <>
          <FlatList
            data={restaurants}
            ItemSeparatorComponent={ListItemSeparator}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
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
            )}
          />
        </>
      ) : (
        <Loader />
      )}
    </Screen>
  );
};
