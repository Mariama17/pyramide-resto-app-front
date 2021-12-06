import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './home.js';
import CreateCompte from './createCompte.js'; 

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Compte" component={CreateCompte} />
    </Stack.Navigator>
  );
}