import React from "react";
import { colors } from "../../../../infrastructure/theme/colors";
import { Screen } from "../../../../utils/Screen";
import { AppText } from "../components/AppText";
import { CartIconContainer, CartIcon } from "./CheckoutScreen";

export const CheckoutErrorScreen = ({ route }) => {
  const { error = "" } = route.params;

  return (
    <Screen>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <AppText variant="label">{error}</AppText>
      </CartIconContainer>
    </Screen>
  );
};
