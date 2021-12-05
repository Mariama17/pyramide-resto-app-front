/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Connect from './components/connectPage.js';
import Home from './components/home.js';
import About from './components/about.js';
import Principal from './components/principal.js';
import CreateCompte from './components/createCompte.js'; 
import Account from './components/account.js';
import Order from './components/order.js';
import Drawer from './components/drawer.js';
import MenuPlat from './components/menuPlats.js'


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function CompteStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Compte" component={CreateCompte} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <NavigationContainer independent={true}>
        <View style={{flex: 1}}>
          {/* <Home/> */}
          {/* <About/> */}
          {/* <Connect/>   */}
          {/* <Principal/> */}
          {/* <CreateCompte/> */}
          {/* <Account/> */}
          {/* <Order/> */}
          {/* <Drawer/> */}
          <MenuPlat />
          {/* <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Compte" component={CompteStackScreen} />
          </Tab.Navigator>   */}
        </View>
      </NavigationContainer> 
    );
  };
}

export default App;



// import * as React from 'react';
// import { Button, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import About from './components/about.js';
// import Home from './components/home.js';


// const HomeStack = createNativeStackNavigator();

// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={Home} />
//     </HomeStack.Navigator>
//   );
// }

// const SettingsStack = createNativeStackNavigator();

// function AboutStackScreen() {
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen name="About" component={About} />
//     </SettingsStack.Navigator>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="home" component={HomeStackScreen} />
//         <Tab.Screen name="about" component={AboutStackScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }