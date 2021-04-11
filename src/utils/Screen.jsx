import React from "react";
import Constants from "expo-constants";
import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
  background-color: grey;
`;

export const Screen = ({ children }) => {
  return <SafeArea>{children}</SafeArea>;
};
