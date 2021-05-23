import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../infrastructure/theme/colors";
import styled from "styled-components";

const DeleteIconContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.text.error};
  width: ${({ theme }) => theme.sizes[3]};
  justify-content: center;
  align-items: center;
`;

export const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <DeleteIconContainer>
        <FontAwesome name="trash" size={35} color={colors.ui.white} />
      </DeleteIconContainer>
    </TouchableWithoutFeedback>
  );
};
