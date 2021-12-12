import React from 'react';
import { View, SafeAreaView, StyleSheet, Image, Text, Alert } from 'react-native';
import {Button, TextInput} from 'react-native-paper';
// import { TextInput } from 'react-native-paper';
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

    login = () => {
    this.setState({loading: true}, () => {
      rest
        .login({
          email: this.state.email,
          password: this.state.password,
        })
        .then(response => {
          this.setState({loading: false}, () => {
            this.props.navigation.navigate('Menu of the day', {
              token: response.token,
            });
          });
        })
          .catch((err) => {
            console.log(console.log('err : ', err));
          this.setState({loading: false}, () => {
            Alert.alert('identifiants incorrects ');
          });
        });
    });
  };

  render() {
    // const [text, setText] = React.useState('');
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.image} source={require('../images/index.jpg')} />
        <View>
          <TextInput
            style={styles.Identifiant}
            Type="outlined"
            onChangeText={text => this.setState({email: text})}
            placeholder="Identifiant"
          />
          <TextInput
            style={styles.Mdp}
            onChangeText={text => this.setState({password: text})}
            placeholder="Mot de passe"
            keyboardType="default"
          />
        </View>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
        <View style={styles.buttonContainer}>
          <Button
            mode="outlined"
            onPress={this.login}
            style={{color: '#5f4a4a'}}
            loading={this.state.loading}>
            Sign in
          </Button>
          {/* <Button
                title="Se connecter"
                // onPress={() => {this.props.navigation.navigate('Drawer')}}
                onPress={this.login}
                color="#5f4a4a"
              /> */}
        </View>
        <View style={styles.buttonContainer2}>
          <Button
            title="S'inscrire"
            // onPress={onPressHandler}
            onPress={() => this.props.navigation.navigate('Inscription')}
            color="#5f4a4a"
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    top: 10,
    height: 225,
    width: 220,
    left: 70,
  },
  container: {
    backgroundColor: '#513a45',
  },
  Identifiant: {
    height: 40,
    width: 250,
    // margin: 10,
    marginVertical: 50,
    left: 45,
    top: 10,
  },
  Mdp: {
    height: 40,
    width: 250,
    // margin: 10,
    marginBottom: 10,
    left: 45,
    top: 10,
  },
  forgotPassword: {
    color: '#f7e0d2',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 15,
    left: 110,
    top: 120,
  },
  buttonContainer: {
    fontWeight: 'bold',
    height: 200,
    width: 200,
    left: 82,
    top: 140,
  },
  buttonContainer2: {
    fontWeight: 'bold',
    height: 200,
    width: 200,
    left: 82,
    top: -10,
  },
});

export default Connect;