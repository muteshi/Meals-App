import React, { useContext } from "react";
import styled from "styled-components";
import { Avatar, Divider, List } from "react-native-paper";

import { AuthContext } from "../../../../services/auth/AuthContext";
import { Screen } from "../../../../utils/Screen";
import { AppText as Text } from "../components/AppText";
import { ListItemSeparator } from "../../../common/ListItemSeparator";

const SettingsItem = styled(List.Item)`
  padding: ${({ theme }) => theme.space[3]};
`;

const AvatarBox = styled.View`
  align-items: center;
`;

export const SettingScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthContext);

  return (
    <Screen>
      <AvatarBox>
        <Avatar.Image
          size={120}
          source={require("../../../../../assets/user.png")}
        />
        <ListItemSeparator />
        <Text variant="label">{user.email}</Text>
        <ListItemSeparator />
      </AvatarBox>

      <List.Section>
        <ListItemSeparator isWhite />
        <SettingsItem
          title="Favorites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="tomato" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <ListItemSeparator isWhite />
        <SettingsItem
          title="Logout"
          left={(props) => (
            <List.Icon {...props} color="#ffcc00" icon="logout" />
          )}
          onPress={onLogout}
        />
        <ListItemSeparator isWhite />
      </List.Section>
    </Screen>
  );
};
