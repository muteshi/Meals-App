import React, { useContext, useState } from "react";

import { RestaurantCardComponent } from "../components/restaurant-card";
import { FlatList, Pressable } from "react-native";
import { ListItemSeparator } from "../../../common/ListItemSeparator";
import { RestaurantContext } from "../../../../services/restaurants/RestaurantContext";
import { Screen } from "../../../../utils/Screen";
import { Loader } from "../../../common/Loader";
import { SearchRestaurants } from "../components/SearchRestaurants";
import { FavoritesContext } from "../../../../services/favorites/FavoritesContext";
import { FavoritesBar } from "../components/FavoritesBar";
import { LocationContext } from "../../../../services/location/LocationContext";
import { FadeInView } from "../components/Animations/FadeAnimation";
import { AppText } from "../components/AppText";
import styled from "styled-components";

export const RestaurantScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  const { search, keyword, error: locationError } = useContext(LocationContext);
  const { restaurants, loading, error: restaurantEror } = useContext(
    RestaurantContext
  );
  const [isToggled, setIsToggled] = useState(false);

  const hasError = !!locationError || !!restaurantEror;

  const ErrorBox = styled(AppText)`
    align-items: center;
    margin-left: 10px;
    margin-top: 10px;
  `;

  return (
    <Screen>
      <SearchRestaurants
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && <FavoritesBar favorites={favorites} />}
      {!loading ? (
        <>
          {hasError && (
            <ErrorBox variant="error">
              Something went wrong. Could not retrieve restaurant data
            </ErrorBox>
          )}
          {!hasError && (
            <FlatList
              data={restaurants}
              ItemSeparatorComponent={ListItemSeparator}
              keyExtractor={(item) => item.name + item.placeId}
              refreshing={loading}
              onRefresh={() => search(keyword)}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() =>
                    navigation.navigate("RestaurantDetails", {
                      restaurant: item,
                    })
                  }
                >
                  <FadeInView>
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
                  </FadeInView>
                </Pressable>
              )}
            />
          )}
        </>
      ) : (
        <Loader />
      )}
    </Screen>
  );
};
