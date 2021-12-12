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
import Navigator from './navigation/navigation.js';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './components/splashScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <View style={{flex: 1}}>
          {/* <SplashScreen/> */}
          <Navigator />
        </View>
      </NavigationContainer>
    );
  }
}

export default App;
