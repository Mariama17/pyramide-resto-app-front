import * as React from 'react';
import { Image, View, StyleSheet, SafeAreaView } from 'react-native';

class About extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor:'orange'}}>
                <View>
                    <Image style={styles.image} 
                        source={require('../images/food.jpg')} 
                    />
                </View>
            </SafeAreaView>
        );
    };
}

const styles = StyleSheet.create({
    image: {
        top: 30,
        height: 200,
        width: 220,
        left: 70,
    },
})

export default About;