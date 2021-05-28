import React from "react";
import styled from "styled-components";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.brand.secondary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: ${({ theme }) => theme.sizes[1]};
  width: 300px;
  margin-vertical: ${({ theme }) => theme.sizes[0]};
  border-radius: 5px;
`;

const TextContainer = styled.Text`
  color: ${({ theme }) => theme.colors.ui.white};
  font-size: ${({ theme }) => theme.fontSizes.body};
  margin-left: ${({ theme }) => theme.space[2]};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const AppButton = ({
  onPress,
  title,
  icon,
  iconColor = "white",
  iconSize = 24,
}) => {
  return (
    <ButtonContainer onPress={onPress}>
      {icon && (
        <MaterialCommunityIcons name={icon} color={iconColor} size={iconSize} />
      )}
      <TextContainer>{title}</TextContainer>
    </ButtonContainer>
  );
};
