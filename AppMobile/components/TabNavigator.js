import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendarDay, faHamburger} from '@fortawesome/free-solid-svg-icons';
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
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
              case 'Menus du jour':
                iconName = faHamburger;
                break;
              case 'Menus de la semaine':
                iconName = faCalendarDay;
                break;
              default:
                break;
            }
            return (
              <View style={{alignItems: 'center'}}>
                <FontAwesomeIcon icon={iconName} size={size} color={color} />
                <Text numberOfLines={1} style={{color, width: size / 2 + '%'}}>
                  {route.name}
                </Text>
              </View>
            );
          },
        })}
        tabBarOptions={{
          showLabel: false,
          showIcon: true,
          // activeBackgroundColor: '#f7e0d2',
        }}>
        <Tab.Screen name="Menus du jour" component={Home} />
        <Tab.Screen name="Menus de la semaine" component={MenuWeek} />
      </Tab.Navigator>
    );
  }
}

export default TabNavigator;
