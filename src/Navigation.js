import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import CartScreen from "./screens/Cart";

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: "home",
  },
  Login: {
    lib: AntDesign,
    name: "login",
  },
  Cart: {
    lib: AntDesign,
    name: "shoppingcart",
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "Login",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Cart",
        }}
      />
    </Tab.Navigator>
  );
}
