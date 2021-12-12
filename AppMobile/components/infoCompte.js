import React from 'react';
import {View, SafeAreaView, StyleSheet, Image, onChangeNumber, TextInput } from 'react-native';

class InfoCompte extends React.Component {
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
                    <TextInput style={styles.prenom}
                        onChangeText={onChangeNumber}
                        placeholder="First Name"
                    
                    />
                    <TextInput style={styles.nom}
                        onChangeText={onChangeNumber}
                        placeholder="Name"
                    
                    />
                    <TextInput style={styles.age}
                        onChangeText={onChangeNumber}
                        placeholder="Age"
                        
                    />
                </View> 
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        backgroundColor: "#513a45",
    },
    image: {
        top: 10,
        height: 225,
        width: 220,
        left: 70,
    },
    prenom: {
        backgroundColor: 'white',
        textAlign: 'center',
        height: 40,
        width: 250,
        top: 50, 
        left: 50,
    },
    nom: {
        backgroundColor: 'white',
        textAlign: 'center',
        height: 40,
        width: 250,
        top: 60,
        left: 50,
    },
    age: {
        backgroundColor: 'white',
        textAlign: 'center',
        height: 40,
        width: 250,
        top: 70,
        left: 50,
    }
    
})
    
export default InfoCompte;    