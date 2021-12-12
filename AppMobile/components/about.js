import * as React from 'react';
import { Image, View, StyleSheet, SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SeeMore from 'react-native-see-more-inline';

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
                <View style={styles.aboutUs}>
                    <SeeMore numberOfLines={7} style={{color: 'black'}}> 
                        The Royal offers a warm and friendly atmosphere 
                        around its prestigious tables with a panoramic view of Paris.
                        With a warm welcome, Le Royal gives you the opportunity to live an extraordinary culinary experience
                        From pasta to desserts, everything is fresh and home-made. Discover the cuisine between local traditions and 
                        and new ideas with our pleasures of the table. 
                        A cuisine that represents a tasty mix of spices and sweet/salty flavors and promises a colorful culinary 
                        a colorful culinary journey. A refined cuisine and revisited recipes rigorously selected 
                        in a chic and warm setting.
                        The large room of the Royal, bordered by a garden of jasmines, gives the place a special atmosphere suitable for 
                        to relaxation and gastronomic discovery. Everything is done to the greatest satisfaction of the happy guests, 
                        so that this moment of pleasure remains engraved in the memories. The master of the house keeps his Mediterranean origins well 
                        The master of the house keeps his Mediterranean origins well anchored by bringing a particular care to the reception of his clientele, that it is regular, curious or simply of passage.
                    </SeeMore>
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
    aboutUs: { 
      backgroundColor: 'white',
      margin: 38,
      width:300, 
      right: 10, 
      height:150, 
      borderWidth: 1, 
      top: 15, 
      justifyContent: 'center',
  },
})

export default About;