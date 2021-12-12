import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../components/home.js';
import Connect from '../components/connectPage.js';
import CreateCompte from '../components/createCompte.js';
import Plat from '../components/Plat.js';
import Account from '../components/account.js';
import About from '../components/about.js';
import TabNavigator from '../components/TabNavigator.js';
import { FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {Button, View} from 'react-native';
import Drawer from '../components/DrawerNavigator.js';
import Principal from '../components/principal.js';

class Navigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          component={Drawer}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Connexion" component={Connect} />
        <Stack.Screen name="Inscription" component={CreateCompte} />
      </Stack.Navigator>
    );
    //    this.TabNavigator();
  }
}

export default Navigator;