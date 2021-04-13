import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.ui.white};
`;
const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${({ theme }) => theme.colors.ui.white};
  padding-top: ${({ theme }) => theme.sizes[0]};
  padding-left: ${({ theme }) => theme.sizes[0]};
  padding-right: ${({ theme }) => theme.sizes[0]};
`;
const Title = styled.Text`
  padding: ${({ theme }) => theme.sizes[0]};
`;

export const RestaurantCardComponent = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/05/15/14/55/cafe-768771_960_720.jpg",
    ],
    isClosedTemporarily,
    address = "Kitengela, Kajiado Kenya",
    isOpenNow = true,
    rating = 3,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
