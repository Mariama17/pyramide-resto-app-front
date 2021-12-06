import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../components/home.js';
import Connect from '../components/connectPage';
import CreateCompte from '../components/createCompte.js';
import Plat from '../components/Plat.js';
import Account from '../components/account.js';
import About from '../components/about.js';
import Principal from '../components/principal.js';
import TabNavigator from '../components/TabNavigator.js';
import { FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {View} from 'react-native';

function   OpenDrawerBtn({props}) {
    return (
        <View style={{flexDirection: 'row'}}>
            <FontAwesomeIcon
              icon={faBars}
              size={30}
              color={'#f7e0d2'}
              onPress={() => props.navigation.toggleDrawer()}
            />
        </View>
    );
  }

class Navigator extends React.Component {
  constructor(props) {
    super(props);
  }

  DrawerNavigator() {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Drawer.Screen name="Account" component={Account} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Principal" component={Principal} />
      </Drawer.Navigator>
    );
  }

  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          component={this.DrawerNavigator}
        //   options={{ headerTitle: (props) => <OpenDrawerBtn {...props} /> }}
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
