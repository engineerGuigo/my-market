import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";

import { Button, Label } from "./styles";

export default function LoginButton({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={focused ? ["#fff", "#ccc"] : ["#90EE90", "#32CD32"]}
        start={[1, 0.4]}
      >
        <AntDesign name="login" size={30} color={focused ? "#000" : "#fff"} />
        <Label focused={focused}>Login</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}
