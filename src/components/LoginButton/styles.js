import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Button = styled(LinearGradient)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 12px;
  color: ${({ focused }) => (focused ? "#000" : "#fff")};
`;
