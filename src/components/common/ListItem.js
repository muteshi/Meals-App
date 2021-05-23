import React from "react";
import { TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { FontAwesome } from "@expo/vector-icons";

import { AppText } from "../features/restaurants/components/AppText";
import { colors } from "../../infrastructure/theme/colors";
import styled from "styled-components";

const ListContainer = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.ui.white};
`;

const DetailsContainer = styled.View`
  flex: 1;
  margin-left: 10px;
  justify-content: center;
`;

const TitleText = styled(AppText)`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

const ImageContainer = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

export const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor={colors.brand.primary}
      >
        <ListContainer>
          {IconComponent}
          {image && <ImageContainer source={{ uri: image }} />}
          <DetailsContainer>
            <TitleText numberOfLines={1}>{title}</TitleText>
            {subTitle && (
              <AppText variant="caption" numberOfLines={3}>
                {subTitle}
              </AppText>
            )}
          </DetailsContainer>
          <FontAwesome
            name="chevron-circle-right"
            size={25}
            color={colors.ui.primary}
          />
        </ListContainer>
      </TouchableHighlight>
    </Swipeable>
  );
};
