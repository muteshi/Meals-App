import React from "react";
import Constants from "expo-constants";
import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Constants.statusBarHeight}px;
  margin-bottom: ${({ theme }) => theme.space[2]};
  margin-left: ${({ theme }) => theme.space[1]};
  margin-right: ${({ theme }) => theme.space[1]};
  background-color: ${({ theme }) => theme.colors.bg.secondary};
`;

export const Screen = ({ children }) => {
  return <SafeArea>{children}</SafeArea>;
};
