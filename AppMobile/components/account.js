import React from 'react';
import {View, SafeAreaView, StyleSheet, Image, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rest from '../API/rest.js';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount = async () => {
    const token = await AsyncStorage.getItem('token');
    rest
      .getUser(token)
      .then(user => {
        console.log(user);
        this.setState({user});
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image style={styles.image} source={require('../images/index.jpg')} />
        </View>

        {this.state.user != null && (
          <View elevation={10} style={styles.aboutUs}>
            <Text
              style={{
                color: '#513a45',
                fontWeight: 'bold',
                fontSize: 15,
                margin: 10,
              }}>
              First Name : {this.state.user.firstName}{' '}
            </Text>

            <Text
              style={{
                color: '#513a45',
                fontWeight: 'bold',
                fontSize: 15,
                margin: 10,
              }}>
              Last Name : {this.state.user.lastName}{' '}
            </Text>

            <Text
              style={{
                color: '#513a45',
                fontWeight: 'bold',
                fontSize: 15,
                margin: 10,
              }}>
              Email : {this.state.user.email}{' '}
            </Text>

            <Text
              style={{
                color: '#513a45',
                fontWeight: 'bold',
                fontSize: 15,
                margin: 10,
              }}>
              Age : {this.state.user.age}{' '}
            </Text>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
        alignItems: 'center',
    backgroundColor: '#513a45',
  },
  image: {
    height: 225,
      width: 220,
    marginBottom: 50
  },
  aboutUs: {
    backgroundColor: '#f7e0d2',
    margin: 38,
    width: "80%",
    height: "30%",
    borderWidth: 0.1,
      alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {
      height: 0.5,
      width: 0.1,
    },
  },
});

export default Account;
