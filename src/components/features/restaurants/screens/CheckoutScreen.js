import React, { useCallback, useContext, useState } from "react";
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
import { Loader } from "../../../common/Loader";

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

export const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const CartTotalContainer = styled.View`
  margin-left: 10px;
  margin-top: 10px;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${({ theme, bg }) => bg || theme.colors.brand.secondary};
`;

const InputContainer = styled.View`
  align-items: center;
`;

export const CheckoutScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(false);
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);

  const onPay = useCallback(() => {
    if (!card || !card.id) {
      setLoading(false);
      navigation.navigate("CheckoutError", {
        error: "Please fill in valid credit card details",
      });
      return;
    }
    payRequest(card.id, sum, name)
      .then((result) => {
        setLoading(false);
        navigation.navigate("CheckoutSuccess");
        clearCart();
      })
      .catch((err) => {
        setLoading(false);
        navigation.navigate("CheckoutError", {
          error: err,
        });
        clearCart();
      });
  }, [card]);

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
      {loading && <Loader />}
      <ScrollView>
        <CartTotalContainer>
          <AppText variant="title">Your Order</AppText>
          <List.Section>
            {cart.map(({ item, price }, index) => {
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
            <CreditCardInput
              name={name}
              onSuccess={setCard}
              onError={() => {
                navigation.navigate("CheckoutError", {
                  error: "Something went wrong processing your credit card",
                });
                clearCart();
              }}
            />
          )}
          <PayButton
            icon="cash-usd"
            mode="contained"
            onPress={onPay}
            disabled={loading}
          >
            Pay
          </PayButton>
          <ListItemSeparator />
          <ClearButton
            icon="cart-off"
            mode="contained"
            onPress={clearCart}
            disabled={loading}
          >
            Clear Cart
          </ClearButton>
        </CartTotalContainer>
      </ScrollView>
    </Screen>
  );
};
