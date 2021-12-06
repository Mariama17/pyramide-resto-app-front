import React from 'react';
import {TextInput, View, SafeAreaView, StyleSheet, onChangeNumber, number, Image, Text, Button, onPressHandler } from 'react-native';
// import { TextInput } from 'react-native-paper';

class Connect extends React.Component {
    constructor(props){
        super(props);
    }
      
    render() {
        // const [text, setText] = React.useState('');
        return (  
            <SafeAreaView style={styles.container}>
                <Image style={styles.image} 
                    source={require('../images/index.jpg')} 
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
                        onPress={() => {this.props.navigation.navigate('Drawer')}}
                        color= "#5f4a4a"
                    />
                </View>    
                <View style={styles.buttonContainer2}>
                    <Button 
                        title="S'inscrire"
                        // onPress={onPressHandler}
                        onPress={() => this.props.navigation.navigate('Inscription')}
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
        margin: 10,
        left: 45,
        borderWidth: 1,
        top: 10,
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
        top: '10%',
        color: 'blue',        
    },
    forgotPassword: {
        color : '#f7e0d2',
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
        top: 140
    },
    buttonContainer2: {
        fontWeight: 'bold',
        height: 200,
        width: 200,
        left: 82,  
        top: -10      
    },
})
    
export default Connect;    