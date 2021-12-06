import * as React from 'react';
import { Image, View, StyleSheet, SafeAreaView, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex:0,
            carouselItems: [
            {
              image: require('../images/restaurant/photo.jpg'),
            },
            {
              image: require('../images/restaurant/index1.jpg'),
            },
            {
              image: require('../images/restaurant/index2.jpg'),
            },
            {
              image: require('../images/restaurant/index3.jpg'),
            },
          ]
        }        
    }
    
    _renderItem({item}){
        return (
          <View>
            <Image source={item.image} style={styles.photo} />
          </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={{backgroundColor:'#513a45'}}>
                <View>
                    <Image style={styles.image} 
                        source={require('../images/index.jpg')} 
                    />
                </View>
                <View style={styles.photo}>
                    {/* <Image style={styles.photo} 
                        source={require('../images/restaurant/photo.jpg')} 
                    /> */}
                  <Carousel
                    layout={"default"}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={300}
                    itemWidth={470}
                    height={300}
                    renderItem={this._renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) } />  
                </View>
                <View style={{ backgroundColor: 'white',Color:'black', margin: 38 ,width:300, right: 10, height:120, borderWidth: 1, top: 15, marginBottom: 300, justifyContent: 'center'}}>
                    <Text>Le royal crée en </Text>
                </View>
                {/* <View style={styles.maps}>
                </View> */}
            </SafeAreaView>
        );
    };
}

const styles = StyleSheet.create({
    image: {
        top: 20,
        height: 130,
        width: 130,
        left: 110,
    },
    photo: {
        top: 20,
        height: 160,
        width: 280,
        left: 20,
    },
})

export default About;