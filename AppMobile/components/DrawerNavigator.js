import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from '../components/TabNavigator.js';
import Account from './account.js';
import Principal from './principal';
import Home from './home.js';
import InfoCompte from './infoCompte.js'

class Drawer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          initialParams={{'token': this.props.route.params}}
          options={{headerShown: false}}
        />
        <Drawer.Screen name="My account" component={InfoCompte} />
        <Drawer.Screen name="Timetable" component={Principal} />
        <Drawer.Screen name="Disconnect" component={Home} />
      </Drawer.Navigator>
    );
  }
}

export default Drawer;
