import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";

export const BackgroundImage = styled.ImageBackground.attrs({
  source: require("../../../assets/bg.jpg"),
  blurRadius: 1,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.8);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const Logo = styled.View`
  align-items: center;
  position: absolute;
  top: 120px;
`;

export const LogoContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const GoBackIcon = styled(Ionicons).attrs({
  size: 35,
  name: "arrow-back",
})`
  color: ${(props) => props.theme.colors.ui.black};
  margin-right: 20px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
