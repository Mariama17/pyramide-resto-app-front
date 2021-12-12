import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from '../components/TabNavigator.js';
import Account from './account.js';
import About from './about.js';
import Connect from './connectPage.js';
import Principal from './principal.js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import rest from '../API/rest.js';

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      user: null,
    };
  }

  componentDidUpdate = async (prevProps, prevState)=> {
    try {
      const token = await AsyncStorage.getItem('token');
      if (prevState.token !== token) {
        const user = await rest.getUser(token);
        this.setState({user, token});
      }
    } catch (error) {}
  }

  render () {
    const Drawer = createDrawerNavigator();

    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        {this.state.token != null && (
          <Drawer.Screen name="My account" component={Account} />
        )}
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Schedule" component={Principal} />
        {this.state.token != null && this.state.user != null ? (
          <Drawer.Screen
            name={this.state.user.firstName + ' - Déconnexion'}
            component={Connect}
            options={{headerShown: false}}
          />
        ) : (
          <Drawer.Screen
            name="Connect"
            component={Connect}
            options={{headerShown: false}}
          />
        )}
      </Drawer.Navigator>
    );
  }
}

export default Drawer;
