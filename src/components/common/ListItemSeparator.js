import React from "react";
import styled from "styled-components/native";

const Separator = styled.View`
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  width: 100%;
  height: 20px;
`;

const WhiteSeparator = styled.View`
  background-color: ${({ theme }) => theme.colors.ui.white};
  width: 100%;
  height: 1px;
`;

export const ListItemSeparator = ({ isWhite }) => {
  return isWhite ? <WhiteSeparator /> : <Separator />;
};
