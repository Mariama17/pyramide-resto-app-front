import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/home.js';
import MenuWeek from '../components/menuWeek';

class TabNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Tab = createBottomTabNavigator();
    // console.log('token tab nav : ', this.props.route.params);
    return (
      <Tab.Navigator>
        <Tab.Screen name="Menu of the day" component={Home}/>
        <Tab.Screen
          name="Menu of the week"
          component={MenuWeek}
          // options={{headerShown: false}} // éviter la duplication
        />
      </Tab.Navigator>
    );
  }
}

export default TabNavigator;
