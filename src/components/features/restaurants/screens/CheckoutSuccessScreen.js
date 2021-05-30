import React from "react";
import { Screen } from "../../../../utils/Screen";
import { AppText } from "../components/AppText";
import { CartIconContainer, CartIcon } from "./CheckoutScreen";

export const CheckoutSuccessScreen = () => {
  return (
    <Screen>
      <CartIconContainer>
        <CartIcon icon="check-bold" />
        <AppText variant="label">Success!</AppText>
      </CartIconContainer>
    </Screen>
  );
};
