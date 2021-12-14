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
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
              case 'Menus of the day':
                iconName = faHamburger;
                break;
              case 'Menus of the week':
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
        <Tab.Screen name="Menus of the day" component={Home} />
        <Tab.Screen name="Menus of the week" component={MenuWeek} />
      </Tab.Navigator>
    );
  }
}

export default TabNavigator;
