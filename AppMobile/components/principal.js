import React from 'react';
import {View, SafeAreaView, StyleSheet, Image, Text } from 'react-native';
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
                <View elevation={5} style={styles.aboutUs}>
                    <Text style={{textAlign: 'center', color: '#513a45', fontWeight: 'bold', fontSize: 20, top: -8}}> Opening hours:</Text>
                    <Text style={{color: '#513a45', fontWeight: 'bold',  margin: 5}}>
                    Monday: 
                    12:00 - 14:30 /
                    19:00 - 22:30
                    </Text>
                    <Text style={{color: '#513a45', fontWeight: 'bold', margin: 3}}>
                    Tuesday:
                    12:00 - 14:30 /
                    19:00 - 22:30
                    </Text>
                    <Text style={{color: '#513a45', fontWeight: 'bold',  margin: 3}}>
                    Wednesday:
                    12:00 - 14:30 /
                    19:00 - 22:30
                    </Text>
                    <Text style={{color: '#513a45', fontWeight: 'bold',  margin: 3}}>
                    Thursday:
                    12 :00 - 14:30 /
                    19:00 - 22:30
                    </Text>
                    <Text style={{color: '#513a45', fontWeight: 'bold',  margin: 3}}>
                    Friday:
                    12:00 - 14:30 /
                    19:00 - 22:30
                    </Text>
                    <Text style={{color: '#513a45', fontWeight: 'bold',  margin: 3}}>
                    Saturday:
                    12 :00 - 14:30 /
                    19 :00 - 22:30
                    </Text>
                </View>  
                <View>  
                    <Text style={{color: '#f7e0d2', fontWeight: 'bold', top:-40, textAlign: 'center'}}>
                        Payments by Credit Card, Mastercard, {'\n'} Visa card, 
                        and Checks accepted.
                    </Text>
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
    aboutUs: { 
        backgroundColor: '#f7e0d2',
        margin: 38,
        width:300, 
        top: -15,
        right: 10, 
        height:220, 
        borderWidth: 0.1, 
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
            height: 0.5,
            width: 0.1,
        },
    },
   
})
    
export default Principal;    