import React from "react";
import Constants from "expo-constants";
import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Constants.statusBarHeight}px;
  background-color: ${(props) => props.theme.colors.ui.secondary};
`;

export const Screen = ({ children }) => {
  return <SafeArea>{children}</SafeArea>;
};
