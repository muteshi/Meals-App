import React, { useContext, useState } from "react";
import {
  AccountContainer,
  BackgroundImage,
  ErrorContainer,
  GoBackIcon,
  LogoContainer,
} from "../../../../infrastructure/theme/bg";
import { AuthContext } from "../../../../services/auth/AuthContext";
import { AppButton as Button } from "../../../common/AppButton";
import { AppTextInput as TextInput } from "../../../common/AppTextInput";
import { Loader } from "../../../common/Loader";
import { AppText as Text } from "../components/AppText";

export const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, error, loading } = useContext(AuthContext);

  return (
    <BackgroundImage>
      {!loading ? (
        <>
          <LogoContainer>
            <GoBackIcon
              name="arrow-back"
              onPress={() => navigation.navigate("Getting started")}
            />
            <Text variant="title">Meals To Go</Text>
          </LogoContainer>
          <AccountContainer>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              value={username}
              keyboardType="email-address"
              placeholder="Email address"
              label="Email address"
              textContentType="emailAddress"
              onChangeText={(text) => setUsername(text)}
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              placeholder="Password"
              label="Password"
              isPassword
              secureTextEntry={!showPassword}
              showPassword={showPassword}
              textContentType="password"
              onPress={() => setShowPassword(!showPassword)}
              onChangeText={(text) => setPassword(text)}
            />
            <ErrorContainer>
              {error && <Text variant="error">{error}</Text>}
            </ErrorContainer>
            <Button
              icon="lock"
              iconSize={24}
              iconColor="white"
              title="Submit"
              onPress={() => onLogin(username, password)}
            />
          </AccountContainer>
        </>
      ) : (
        <Loader isLoading={loading} />
      )}
    </BackgroundImage>
  );
};
