/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Connect from './components/connectPage.js';
import Home from './components/home.js';
import About from './components/about.js';
import Principal from './components/principal.js';
import CreateCompte from './components/createCompte.js';
import Account from './components/account.js';
import Order from './components/order.js';
import Drawer from './components/drawer.js';
import MenuPlat from './components/menuPlats.js';
import Navigator from './navigation/navigation.js';
import {createStackNavigator} from '@react-navigation/stack';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <View style={{flex: 1}}>
          <Navigator />
          {/* <About/> */}
          {/* <Connect/>   */}
          {/* <Principal/> */}
          {/* <Account/> */}
          {/* <Order/> */}
          {/* <Drawer/> */}
          {/* <MenuPlat /> */}
        </View>
      </NavigationContainer>
    );
  }
}

export default App;
