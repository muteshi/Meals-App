import React, { useContext } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import { CartContext } from "../../../../services/checkout/CardContext";
import { Screen } from "../../../../utils/Screen";
import { Accordion } from "../../../common/Accordion";
import { AppButton } from "../../../common/AppButton";
import { RestaurantCardComponent } from "../components/restaurant-card";

const OrderButtonContainer = styled.View`
  align-items: center;
`;

export const RestaurantDetailsScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;
  const { addToCart } = useContext(CartContext);
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
        restaurant={restaurant}
      />
      <ScrollView>
        <Accordion categories={categories} title="Menu Overview" />
      </ScrollView>
      <OrderButtonContainer>
        <AppButton
          title="TODAY'S SPECIAL FOR KSH 899"
          icon="cart"
          onPress={() => {
            addToCart({ item: "Todays' special", price: 899 }, restaurant);
            navigation.navigate("Checkout");
          }}
        />
      </OrderButtonContainer>
    </Screen>
  );
};
