import React from 'react';
import {TextInput, View, SafeAreaView, StyleSheet, onChangeNumber, number, Image, Text, Button, onPressHandler } from 'react-native';
// import { TextInput } from 'react-native-paper';

class Connect extends React.Component {
    constructor(props){
        super(props);
    }
      
    render() {
        return (  
            <SafeAreaView style={styles.container}>
                <Image style={styles.image} 
                    source={require('../images/food.jpg')} 
                />
                <View style={{flex: 1}}>
                    <TextInput style={styles.Identifiant}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Identifiant"
                        keyboardType="email-address"
                    />
                    <TextInput style={styles.Mdp}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Mot de passe"
                        keyboardType="default"
                    />
                </View>
                <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Se connecter"
                        onPress={onPressHandler}
                    />
                    <Button 
                        title="S'inscrire"
                        onPress={onPressHandler}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        top: 30,
        height: 200,
        width: 220,
        left: 70,
    },
    container: {
        backgroundColor: 'orange', 
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
        margin: 10,
        left: 45,
        borderWidth: 1,
        top: '25%',
        color: 'blue',
    },
    Mdp:{
        backgroundColor: 'white',
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        height: 40,
        width: 250,
        margin: 10,
        left: 45,
        borderWidth: 1,
        top: '25%',
        color: 'blue',        
    },
    forgotPassword: {
        color : 'black',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 15,
        left: 110,
        top: -20,
    },
    buttonContainer: {
        marginBottom: 10,
        fontWeight: 'bold',
        height: 150,
        width: 200,
        left: 82,
        justifyContent: 'space-around',
        marginBottom: 15
    },
})
    
export default Connect;    