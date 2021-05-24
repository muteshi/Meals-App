import React, { useCallback, useContext, useState } from "react";
import styled from "styled-components";
import { Avatar, List } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";

import { AuthContext } from "../../../../services/auth/AuthContext";
import { Screen } from "../../../../utils/Screen";
import { AppText as Text } from "../components/AppText";
import { ListItemSeparator } from "../../../common/ListItemSeparator";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsItem = styled(List.Item)`
  padding: ${({ theme }) => theme.space[3]};
`;

const AvatarBox = styled.View`
  align-items: center;
`;

export const SettingScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );

  return (
    <Screen>
      <AvatarBox>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && (
            <Avatar.Image
              size={120}
              source={require("../../../../../assets/user.png")}
            />
          )}
          {photo && (
            <Avatar.Image
              size={120}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
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
