import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const LoadingIcon = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const Loader = ({ isLoading }) => {
  return (
    <LoadingContainer isLoading>
      <LoadingIcon animating={true} color={Colors.red800} size={50} />
    </LoadingContainer>
  );
};
