import React from 'react';
import {View, SafeAreaView, StyleSheet, Image, Button, onPressHandler } from 'react-native';
// import { TextInput } from 'react-native-paper';

class Account extends React.Component {
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
                        title="Mon compte"
                        onPress={onPressHandler}
                        color= "#5f4a4a"
                    />
                </View> 
                <View style={styles.buttonContainer2}>
                    <Button 
                        title="Se Deconnecter"
                        onPress={onPressHandler}
                        color= "#5f4a4a"
                    />
                </View>    
                <View style={styles.buttonContainer3}>    
                    <Button 
                        title="Donner mon avis"
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
    buttonContainer: {
        fontWeight: 'bold',
        height: 200,
        width: 200,
        left: 82,
        top: 50 
    },
    buttonContainer2: {
        fontWeight: 'bold',
        height: 200,
        width: 200,
        left: 82,  
        top: -70      
    },
    buttonContainer3: {
        fontWeight: 'bold',
        height: 200,
        width: 200,
        left: 82, 
        top: -190 
    }
})
    
export default Account;    