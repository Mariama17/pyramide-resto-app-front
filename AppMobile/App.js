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
import Home from './components/home.js';
import About from './components/about.js';
import Principal from './components/principal.js';
import CreateCompte from './components/createCompte.js'; 
import Account from './components/account.js';
import Order from './components/order.js';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Home/>
        {/* <Connect/> */}
        {/* <About/> */}
        {/* <Principal/> a supprimer*/}
        {/* <CreateCompte/> */}
        {/* <Account/> a supp*/}
        {/* <Order/> */}
      </View>
    );
  };
}

export default App;