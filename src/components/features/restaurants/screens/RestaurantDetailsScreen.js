import React from "react";
import { ScrollView } from "react-native";
import { Screen } from "../../../../utils/Screen";
import { Accordion } from "../../../common/Accordion";
import { RestaurantCardComponent } from "../components/restaurant-card";

export const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;
  const categories = [
    {
      title: "Lunch",
      items: ["Chapati", "Nyama Choma", "Kienyeji Chicken", "Tilapia", "Pilau"],
      icon: "cup",
    },
    {
      title: "Drinks",
      items: ["Chai/Tea", "Wine", "Tea Masala", "Lemon tea/Dawa", "Uji"],
      icon: "hamburger",
    },
    {
      title: "Dinner",
      items: [
        "Githeri",
        "Rice with beef",
        "Kienyeji Chicken",
        "Ndizi with Chiecken",
        "Pilau",
      ],
      icon: "food-variant",
    },

    {
      title: "English breakfast",
      items: [
        "Tea toasted bread",
        "Milk with groundnuts",
        "Coffee with mandazi",
        "Tea with yams (nduma)",
        "Tea with cassava or with boiled maize",
      ],
      icon: "bread-slice",
    },
  ];
  return (
    <Screen>
      <RestaurantCardComponent
        name={restaurant.name}
        icon={restaurant.icon}
        photos={restaurant.photos[0]}
        isClosedTemporarily={restaurant.isClosedTemporarily}
        address={restaurant.vicinity}
        isOpenNow={restaurant.isOpenNow}
        rating={restaurant.rating}
        placeId={restaurant.placeId}
      />
      <ScrollView>
        <Accordion categories={categories} title="Menu Overview" />
      </ScrollView>
    </Screen>
  );
};
