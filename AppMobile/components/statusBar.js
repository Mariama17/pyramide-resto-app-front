import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './components/about.js';
import Home from './components/home.js';


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function AboutStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="About" component={About} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="home" component={HomeStackScreen} />
        <Tab.Screen name="about" component={AboutStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}