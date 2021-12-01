import React from 'react';
import {View, SafeAreaView, StyleSheet, Image, Button, onPressHandler } from 'react-native';


class Order extends React.Component {
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
                <View style={{backgroundColor: 'white', Color:'black', margin: 38 ,width:300, right: 10, height:220, borderWidth: 1, top: 15}}>

                   <View style={{backgroud: "#4c3737" ,width:140, right: 10, height:38,  top: 155, left: 25, flexDirection: 'row'}}>
                        <Button
                            title="Sur place"
                            onPress={onPressHandler}
                            color= "#4c3737"
                        />
                   </View>

                   <View style={{backgroud: "#4c3737" ,width:140, left: 180, height:38,  top: 116, right: 25, flexDirection: 'row'}}>
                        <Button
                            title="emporter"
                            onPress={onPressHandler}
                            color= "#4c3737"
                        />
                   </View>                   
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

})
    
export default Order;    