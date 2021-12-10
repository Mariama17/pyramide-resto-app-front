import React from 'react';
import {TextInput, View, SafeAreaView, StyleSheet, Alert, Image, Button, onPressHandler } from 'react-native';
import rest from '../API/rest.js';

class CreateCompte extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    addUser = () => {
        rest.addUser({
            "lastName": this.state.nom,
            "firstName": this.state.prenom,
            "email": this.state.email,
            "password": this.state.password,
            
        })
        .then(response => {
            console.log('response : ', response);
            this.props.navigation.navigate('Drawer');
        })
        .catch((err) => {
            console.log('error : ', err);
            Alert.alert("err")
        })
    }
      
    render() {
        return (  
            <SafeAreaView style={styles.container}>
                <Image style={styles.image} 
                    source={require('../images/index.jpg')} 
                />
                <View style={{flex: 1}}>
                    <TextInput style={styles.Identifiant}
                        onChangeText={text => this.setState({nom: text})}
                        placeholder="Nom"
                        keyboardType="email-address"
                    />
                    <TextInput style={styles.Identifiant}
                        onChangeText={text => this.setState({prenom: text})}
                        placeholder="Prenom"
                        keyboardType="email-address"
                    />
                    <TextInput style={styles.Identifiant}
                        onChangeText={text => this.setState({email: text})}
                        placeholder="Adresse email"
                        keyboardType="email-address"
                    />
                    <TextInput style={styles.Identifiant}
                        onChangeText={text => this.setState({password: text})}
                        placeholder="Mot de passe"
                        keyboardType="default"
                    />
                    <TextInput style={styles.Identifiant}
                        onChangeText={text => this.setState({confirmPassword: text})}
                        placeholder="Confirmer le mot de passe"
                        keyboardType="default"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="S'inscrire"
                        // onPress={() => {this.props.navigation.navigate('Drawer')}}
                        onPress={this.addUser}
                        color= "#5f4a4a"
                    />                    
                </View>
            </SafeAreaView>
        )
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
        height: '100%',
        width: '100%',
    },
    Identifiant: {
        backgroundColor: 'white',
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        height: 40,
        width: 250,
        margin: 5,
        left: 45,
        borderWidth: 1,
        top: '5%',
        color: 'blue',
    },
    buttonContainer: {
        fontWeight: 'bold',
        height: 150,
        width: 200,
        left: 82,
        justifyContent: 'space-around',
        marginBottom: 15,
        top: 68,
    },    
})
    
export default CreateCompte;    