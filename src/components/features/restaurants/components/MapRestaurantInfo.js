import React from "react";
import styled from "styled-components";
import WebView from "react-native-webview";
import { AppText } from "./AppText";
import { Platform } from "react-native";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const isAndroid = Platform.OS === "android";

const Image = isAndroid ? CompactWebview : CompactImage;

export const MapRestaurantInfo = ({ restaurant }) => {
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />

      <AppText center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </AppText>
    </Item>
  );
};
