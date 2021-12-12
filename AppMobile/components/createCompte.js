import React from 'react';
import {View, SafeAreaView, StyleSheet, Alert, Image} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import rest from '../API/rest.js';

class CreateCompte extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      prenom: '',
      age: 0,
      email: '',
      password: '',
      confirmPassword: '',
      loading: false,
    };
  }

  addUser = () => {
    this.setState({loading: true}, async () => {
      try {
        response = await rest.addUser({
          lastName: this.state.nom,
          firstName: this.state.prenom,
          age: this.state.age,
          email: this.state.email,
          password: this.state.password,
        });
        if (response.status == 200) {
          this.setState({loading: false});
          this.props.navigation.navigate('Drawer');
        } else {
          this.setState({loading: false});
          Alert.alert("Erreur lors de l'inscription. Veuillez réessayer");
        }
      } catch (error) {
        this.setState({loading: false});
        Alert.alert("Erreur lors de l'inscription. Veuillez réessayer");
      }
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.main_container}>
        <Image style={styles.image} source={require('../images/index.jpg')} />
        <View style={styles.body_container}>
          <TextInput
            onChangeText={text => this.setState({nom: text})}
            placeholder="Nom"
          />
          <TextInput
            onChangeText={text => this.setState({prenom: text})}
            placeholder="Prenom"
          />
          <TextInput
            onChangeText={text => this.setState({age: text})}
            placeholder="age"
          />
          <TextInput
            onChangeText={text => this.setState({email: text})}
            placeholder="Adresse email"
            keyboardType="email-address"
          />
          <TextInput
            onChangeText={text => this.setState({password: text})}
            secureTextEntry={true}
            placeholder="Mot de passe"
          />
          <Button
            style={styles.btn}
            onPress={this.addUser}
            mode="contained"
            loading={this.state.loading}
            color="#5f4a4a">
            Sign up
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
  main_container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#513a45',
  },
  body_container: {
    flex: 1,
    justifyContent: 'space-around',
    width: 250,
    margin: 5,
  },
  btn: {
    height: 50,
    width: 250,
  },
});

export default CreateCompte;
