import React from "react";
import styled from "styled-components/native";

const Separator = styled.View`
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  width: 100%;
  height: 20px;
`;

export const ListItemSeparator = () => {
  return <Separator />;
};
