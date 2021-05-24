import React, { useState, useEffect, useRef, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import styled from "styled-components";
import { AppText } from "../components/AppText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../../services/auth/AuthContext";

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);

  const cameraRef = useRef();

  const CameraContainer = styled(Camera)`
    width: 100%;
    height: 100%;
  `;

  const { user } = useContext(AuthContext);

  const getCameraPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };

  useEffect(() => {
    getCameraPermission();
  }, []);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  if (hasPermission === false) {
    return <AppText variant="error">No access to camera</AppText>;
  }

  return (
    <TouchableOpacity onPress={snap}>
      <CameraContainer
        ref={(cam) => (cameraRef.current = cam)}
        type={Camera.Constants.Type.front}
      />
    </TouchableOpacity>
  );
};
