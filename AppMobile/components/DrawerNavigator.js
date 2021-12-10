import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from '../components/TabNavigator.js';
import Account from './account.js';
import About from './about.js';
import Home from './home.js';


class Drawer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Accueil"
          component={TabNavigator}
          initialParams={{'token': this.props.route.params}}
          options={{headerShown: false}}
        />
        <Drawer.Screen name="Mon Compte" component={Account} />
        <Drawer.Screen name="A propos" component={About} />
        <Drawer.Screen name="Se déconnecter" component={Home} />
      </Drawer.Navigator>
    );
  }
}

export default Drawer;
