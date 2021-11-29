import React from 'react';
import {View, SafeAreaView, StyleSheet, Image, Button, onPressHandler } from 'react-native';
// import { TextInput } from 'react-native-paper';

class Principal extends React.Component {
    constructor(props){
        super(props);
    }
      
    render() {
        return (  
            <SafeAreaView style={styles.container}>
                <View>
                    <Image style={styles.image} 
                        source={require('../images/index.jpg')} 
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="Se connecter"
                        onPress={onPressHandler}
                        color= "#5f4a4a"
                    />
                    <Button 
                        title="S'inscrire"
                        onPress={onPressHandler}
                        color= "#5f4a4a"
                    />
                    <Button 
                        title="Nous contacter"
                        onPress={onPressHandler}
                        color= "#5f4a4a"
                    />                    
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        top: 30,
        height: 225,
        width: 220,
        left: 70,
    },
    container: {
        backgroundColor: '#513a45', 
        height: '100%',
        width: '100%',
    },    
    buttonContainer: {
        marginBottom: 10,
        fontWeight: 'bold',
        height: 150,
        width: 200,
        left: 82,
        justifyContent: 'space-around',
        marginBottom: 15,
        top: 60
    },
})
    
export default Principal;    