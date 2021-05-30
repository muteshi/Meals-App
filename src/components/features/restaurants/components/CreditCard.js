import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { Screen } from "../../../../utils/Screen";
import { cardTokenRequest } from "../../../../services/checkout/CheckoutService";

export const CreditCardInput = ({ name, onSuccess, onError }) => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    const expiryDate = values.expiry.split("/");
    const cardInfo = {
      number: values.number,
      exp_month: expiryDate[0],
      exp_year: expiryDate[1],
      cvc: values.cvc,
      name,
    };

    if (!isIncomplete) {
      try {
        const info = await cardTokenRequest(cardInfo);
        onSuccess(info);
      } catch (error) {
        onError();
      }
    }
  };

  return (
    <Screen>
      <LiteCreditCardInput onChange={onChange} />
    </Screen>
  );
};
