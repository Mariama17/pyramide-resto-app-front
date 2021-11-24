/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import Connect from './components/connectPage.js';
import Accueil from './components/accueil.js';
import About from './components/propos.js';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {/* <Connect/> */}
        {/* <Accueil/> */}
        <About/>
      </View>
    );
  };
}

export default App;