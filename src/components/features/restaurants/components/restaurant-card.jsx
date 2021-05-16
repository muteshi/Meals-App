import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import star from "../../../../../assets/star";
import open from "../../../../../assets/open";
import { AppText as Text } from "./AppText";

const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.ui.white};
`;
const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${({ theme }) => theme.colors.ui.white};
  padding-top: ${({ theme }) => theme.sizes[0]};
  padding-left: ${({ theme }) => theme.sizes[0]};
  padding-right: ${({ theme }) => theme.sizes[0]};
`;

const Info = styled.View`
  padding: ${({ theme }) => theme.sizes[0]};
`;
const Rating = styled.View`
  flex-direction: row;
`;
const ImageIcon = styled.Image`
  flex-direction: row;
  height: ${({ theme }) => theme.sizes[1]};
  width: ${({ theme }) => theme.sizes[1]};
`;

const Icons = styled.View`
  margin-top: ${({ theme }) => theme.space[1]};
  margin-bottom: ${({ theme }) => theme.space[1]};
  flex-direction: row;
  justify-content: space-between;
`;

export const RestaurantCardComponent = ({
  name,
  icon,
  photos,
  isClosedTemporarily,
  address,
  isOpenNow,
  rating,
}) => {
  console.log("card===>", name);
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Icons>
          <Rating>
            {ratingArray.map((rate, index) => (
              <SvgXml xml={star} width={20} height={20} key={index} />
            ))}
          </Rating>
          {isClosedTemporarily && (
            <Text variant="error">Closed Temporarily</Text>
          )}
          {isOpenNow && <SvgXml xml={open} width={30} height={30} />}
          <ImageIcon source={{ uri: icon }} />
        </Icons>
        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
