import React from "react";
import { Image } from "react-native";
import {
  AccountContainer,
  BackgroundImage,
  Logo,
} from "../../../../infrastructure/theme/bg";
import { AppButton } from "../../../common/AppButton";
import { AppText } from "../components/AppText";

export const AccountScreen = ({ navigation }) => {
  const goToLoginScreen = () => {
    navigation.navigate("Login");
  };
  const goToRegisterScreen = () => {
    navigation.navigate("Register");
  };
  return (
    <BackgroundImage>
      <Logo>
        <Image source={require("../../../../../assets/logo.png")} />
      </Logo>
      <AppText variant="title">Meals To Go</AppText>
      <AccountContainer>
        <AppButton
          title="Login"
          icon="login"
          iconColor="white"
          iconSize={24}
          onPress={goToLoginScreen}
        />
        <AppButton
          title="Register"
          icon="account"
          iconColor="white"
          iconSize={24}
          onPress={goToRegisterScreen}
        />
      </AccountContainer>
    </BackgroundImage>
  );
};
