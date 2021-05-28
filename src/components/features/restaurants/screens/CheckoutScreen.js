import React, { useContext, useEffect, useState } from "react";
import { Avatar, List, Button } from "react-native-paper";
import { ScrollView, Text } from "react-native";
import styled from "styled-components";
import { Screen } from "../../../../utils/Screen";
import { CreditCardInput } from "../components/CreditCard";
import { RestaurantCardComponent } from "../components/restaurant-card";
import { AppText } from "../components/AppText";
import { CartContext } from "../../../../services/checkout/CardContext";
import { colors } from "../../../../infrastructure/theme/colors";
import { AppTextInput as Input } from "../../../common/AppTextInput";
import { ListItemSeparator } from "../../../common/ListItemSeparator";
import { payRequest } from "../../../../services/checkout/CheckoutService";

export const PayButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  width: 80%;
  align-self: center;
  padding: ${(props) => props.theme.space[2]};
`;
export const ClearButton = styled(Button).attrs({
  color: colors.ui.error,
})`
  width: 80%;
  align-self: center;
  padding: ${(props) => props.theme.space[2]};
`;

const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const CartTotalContainer = styled.View`
  margin-left: 10px;
  margin-top: 10px;
`;

const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${({ theme, bg }) => bg || theme.colors.brand.secondary};
`;

const InputContainer = styled.View`
  align-items: center;
`;

export const CheckoutScreen = () => {
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);

  const onPay = () => {
    if (!card || !card.id) {
      console.log("some error");
      return;
    }
    payRequest(card.id, sum, name);
  };

  if (!cart.length || !restaurant)
    return (
      <Screen>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </Screen>
    );
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
        <CartTotalContainer>
          <AppText variant="title">Your Order</AppText>
          <List.Section>
            {cart.map(({ item, price, index }) => {
              return (
                <List.Item
                  title={`${item} - ${price}`}
                  key={index}
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="star-four-points-outline"
                      color={colors.brand.secondary}
                    />
                  )}
                />
              );
            })}
          </List.Section>
          <AppText variant="label">Total KSH: {sum.toFixed(2)}</AppText>
          <ListItemSeparator />
          <InputContainer>
            <Input
              autoCapitalize="words"
              autoCorrect={false}
              value={name}
              placeholder="Full name"
              label="Full name"
              onChangeText={(text) => {
                setName(text);
              }}
            />
            <ListItemSeparator />
          </InputContainer>
          {name.length > 0 && (
            <CreditCardInput name={name} onSuccess={setCard} />
          )}
          <PayButton icon="cash-usd" mode="contained" onPress={onPay}>
            Pay
          </PayButton>
          <ListItemSeparator />
          <ClearButton icon="cart-off" mode="contained" onPress={clearCart}>
            Clear Cart
          </ClearButton>
        </CartTotalContainer>
      </ScrollView>
    </Screen>
  );
};
