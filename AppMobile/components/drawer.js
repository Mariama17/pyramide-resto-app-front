import React, { useRef, useState } from "react";
import { DrawerLayoutAndroid, StyleSheet, View } from "react-native";
import { FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faCircle} from '@fortawesome/free-solid-svg-icons'

const Drawer = () => {
  const drawer = useRef(null);
  const [drawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    drawerPosition === "left"
  };

  const navigationView = () => (
    <View style={{backgroundColor: '#5f4a4a', height: '100%'}}>
        <FontAwesomeIcon 
            icon={faCircle} 
            size={30} 
            color={'#f7e0d2'} 
            onPress={() => drawer.current.closeDrawer()}
        />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <FontAwesomeIcon 
            icon={faBars} 
            size={30} 
            color={'#f7e0d2'} 
            onPress={() => drawer.current.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    backgroundColor: '#5f4a4a',
    flex: 1,
    padding: 16
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  }
});

export default Drawer;