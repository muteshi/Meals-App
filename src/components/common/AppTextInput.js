import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { TextInput } from "react-native-paper";
import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";

const TextContainer = styled.View`
  margin-vertical: ${({ theme }) => theme.sizes[0]};
  align-items: center;
  flex-direction: row;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
`;
const InputBox = styled(TextInput).attrs({})`
  width: 100%;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const IconBox = styled(FontAwesome)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${({ theme }) => theme.colors.brand.primary};
`;

export const AppTextInput = ({
  showPassword,
  onPress,
  isPassword,
  ...otherProps
}) => {
  return (
    <TextContainer>
      <InputBox
        {...otherProps}
        underlineColor={colors.brand.secondary}
        placeholderTextColor={colors.brand.secondary}
      />
      {isPassword && (
        <IconBox
          onPress={onPress}
          name={showPassword ? "eye" : "eye-slash"}
          size={20}
          color={colors.ui.primary}
        />
      )}
    </TextContainer>
  );
};
