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
import Connect from './components/connectPage.js';
import Home from './components/home.js';
import About from './components/about.js';
import CreateCompte from './components/createCompte.js';
import Account from './components/account.js';
import Order from './components/order.js';
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
          {/* <Order/> */}
        </View>
      </NavigationContainer>
    );
  }
}

export default App;
