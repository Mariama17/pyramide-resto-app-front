import React from 'react';
import {View, SafeAreaView, StyleSheet, Image, Text, Alert} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import PasswordStrengthMeterBar from 'react-native-password-strength-meter-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rest from '../API/rest.js';

class Connect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
    };
  }

  componentDidMount = async () => {
    try {
      this._unsubscribe = this.props.navigation.addListener(
        'focus',
        async () => {
          await AsyncStorage.removeItem('token');
        },
      );
    } catch (e) {}
  };

  componentWillUnmount() {
    this._unsubscribe();
  }

  login = () => {
    this.setState({loading: true}, () => {
      rest
        .login({
          email: this.state.email,
          password: this.state.password,
        })
        .then(response => {
          this.setState({loading: false}, async () => {
            try {
              await AsyncStorage.setItem('token', response.token);
              this.props.navigation.navigate('Menus du jour');
            } catch (error) {}
          });
        })
        .catch(err => {
          this.setState({loading: false}, () => {
            Alert.alert('identifiants incorrect');
          });
        });
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.image} source={require('../images/index.jpg')} />
        <View style={styles.input}>
          <TextInput
            style={{marginBottom: 20}}
            type="outlined"
            mode="outlined"
            selectionColor="#f7e0d2"
            underlineColor="#f7e0d2"
            activeUnderlineColor="#f7e0d2"
            activeOutlineColor="#f7e0d2"
            onChangeText={text => this.setState({email: text})}
            placeholder="Identifiant"
          />
          <TextInput
            type="outlined"
            mode="outlined"
            secureTextEntry={true}
            selectionColor="#f7e0d2"
            underlineColor="#f7e0d2"
            activeUnderlineColor="#f7e0d2"
            activeOutlineColor="#f7e0d2"
            onChangeText={text => this.setState({password: text})}
            placeholder="Mot de passe"
            keyboardType="default"
          />
          <PasswordStrengthMeterBar password={this.state.password} />
          <View style={styles.bottomScreen}>
            <Button
              style={styles.btn}
              mode="contained"
              onPress={this.login}
              loading={this.state.loading}
              color="#5f4a4a">
              Sign in
            </Button>
            <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
            <Button
              style={styles.btn}
              mode="contained"
              onPress={() => this.props.navigation.navigate('Inscription')}
              color="#5f4a4a">
              Sign up
            </Button>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 225,
    width: 220,
  },
  container: {
    flex: 1,
    backgroundColor: '#513a45',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginTop: 50,
    width: 250,
    // justifyContent: 'space-around',
  },
  forgotPassword: {
    color: '#f7e0d2',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
  btn: {
    height: 50,
    width: 180,
  },
  bottomScreen: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'space-around',
  },
});

export default Connect;
