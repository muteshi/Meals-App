import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import star from "../../../../../assets/star";
import open from "../../../../../assets/open";

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
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

const ClosedStatus = styled.Text`
  padding-top: ${({ theme }) => theme.space[1]};
  padding-bottom: ${({ theme }) => theme.space[1]};
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text.error};
`;

const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${({ theme }) => theme.sizes[0]};
`;
const Rating = styled.View`
  flex-direction: row;
  padding-top: ${({ theme }) => theme.space[1]};
  padding-bottom: ${({ theme }) => theme.space[1]};
`;
const ImageIcon = styled.Image`
  flex-direction: row;
  height: ${({ theme }) => theme.sizes[1]};
  width: ${({ theme }) => theme.sizes[1]};
  margin-top: ${({ theme }) => theme.space[1]};
  margin-bottom: ${({ theme }) => theme.space[1]};
`;

const Icons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const RestaurantCardComponent = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/05/15/14/55/cafe-768771_960_720.jpg",
    ],
    isClosedTemporarily = true,
    address = "Kitengela, Kajiado Kenya",
    isOpenNow = false,
    rating = 3,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Icons>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          {isClosedTemporarily && (
            <ClosedStatus>Closed Temporarily</ClosedStatus>
          )}
          {isOpenNow && <SvgXml xml={open} width={30} height={30} />}
          <ImageIcon source={{ uri: icon }} />
        </Icons>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
