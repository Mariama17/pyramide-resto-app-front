import React from 'react';
import {View, SafeAreaView, StyleSheet, Image, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rest from '../API/rest.js';

class Account extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            user: null,
        }
    }

    componentDidMount = async () => {
        const token = await AsyncStorage.getItem('token');
        rest.getUser(token).then(user => {
            console.log(user);
            this.setState({user});
          }).catch(err => {console.log(err)})
          
      };

    render() {
        return (  
            
            <SafeAreaView style={styles.container}>
                
                <View>
                    <Image style={styles.image} 
                        source={require('../images/index.jpg')} 
                    />
                </View>
                
                {this.state.user != null && 
                    <View elevation={10} style={styles.aboutUs}>
                        <Text style={{color: '#513a45', fontWeight: 'bold', fontSize:15, margin: 3}}>First Name: {this.state.user.firstName} </Text>
                    
                        <Text style={{color: '#513a45', fontWeight: 'bold', fontSize:15, margin: 3}}>Last Name: {this.state.user.lastName} </Text>
                    
                        <Text style={{color: '#513a45', fontWeight: 'bold', fontSize:15, margin: 3}}>Email: {this.state.user.email} </Text>
                    
                        <Text style={{color: '#513a45', fontWeight: 'bold', fontSize:15, margin: 3}}>Age: {this.state.user.age} </Text>
                    </View> 
                }
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
    aboutUs: { 
        backgroundColor: '#f7e0d2',
        margin: 38,
        width: 300, 
        top: 10,
        right: 10, 
        height: 140, 
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

export default Account; 