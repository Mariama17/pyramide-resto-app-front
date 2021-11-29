import * as React from 'react';
import { Image, View, Text, SafeAreaView, ImageBackground, Button, onPressHandler } from 'react-native';
import Carousel from 'react-native-snap-carousel';

class Accueil extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
            image: require('../images/couscous/cous-removebg-preview.png'),
          },
          {
            image: require('../images/couscous/couscous-marocain-removebg-preview.png'),
          },
          {
            image: require('../images/couscous/couscous-removebg-preview.png'),
          },
          {
            image: require('../images/couscous/unnamed-removebg-preview.png'),
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View>
            <Image source={item.image} style={style.plat} />
          </View>
        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'#513a45'}}>
            <View style={{ flex: 1, margin: 60 , borderWidth: 2, marginBottom: 300 }}>
                <View>
                  <Carousel
                    layout={"default"}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={300}
                    itemWidth={320}
                    height={200}
                    renderItem={this._renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) } />  
                </View>
                  <View>
                    <Text style={style.descriptionPlat}>Couscous marocain</Text>
                    <Text style={style.detailPlat}>collier d'agneau, semoule de blé dur, persil </Text>  
                  </View> 
            </View>
          </SafeAreaView>
        );
    }
}

const style={
    plat: {
        left: 10,
        width: 200,
        height: 120,
        top: 30, 
    },
    plat2: {
        width: 300,
        height: 280,
        top: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
    },  
    descriptionPlat: {
        fontWeight: 'bold',
        fontSize: 20,
        top: -40,
        left: 20,
    },
    detailPlat: {
        fontWeight: 'bold',
        fontSize: 12,
        left: 5,
        top: -40,
    },
  }    

export default Accueil;