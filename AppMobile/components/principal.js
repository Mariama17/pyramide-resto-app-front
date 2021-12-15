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
                    <Text style={{justifyContent: 'flex-start', textAlign: 'center', color: '#513a45', fontWeight: 'bold', fontSize: 20}}> Opening hours:</Text>
                    <Text style={{color: '#513a45', fontWeight: 'bold'}}>
                    Monday:
                    12:00 - 14:30 /
                    19:00 - 22:30
                    </Text>
                    <Text style={{color: '#513a45', fontWeight: 'bold'}}>
                    Tuesday:
                    12:00 - 14:30 /
                    19:00 - 22:30
                    </Text>
                    <Text style={{color: '#513a45', fontWeight: 'bold'}}>
                    Wednesday:
                    12:00 - 14:30 /
                    19:00 - 22:30
                    </Text>
                    <Text style={{color: '#513a45', fontWeight: 'bold'}}>
                    Thursday:
                    12 :00 - 14:30 /
                    19:00 - 22:30
                    </Text>
                    <Text style={{color: '#513a45', fontWeight: 'bold'}}>
                    Friday:
                    12:00 - 14:30 /
                    19:00 - 22:30
                    </Text>
                    <Text style={{color: '#513a45', fontWeight: 'bold'}}>
                    Saturday:
                    12 :00 - 14:30 /
                    19 :00 - 22:30
                    </Text>
                </View>
                <View>
                    <Text style={{color: '#f7e0d2', fontWeight: 'bold', textAlign: 'center'}}>
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
        height: 225,
        width: 220,
    },
    container: {
        flex: 1,
        backgroundColor: '#513a45',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    aboutUs: {
        flex: 1,
        backgroundColor: '#f7e0d2',
        margin: 38,
        width:'80%',
        height: '40%',
        borderWidth: 0.1,
        justifyContent: 'space-between',
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