import * as React from 'react';
import {Image, View, StyleSheet, ScrollView, Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SeeMore from 'react-native-see-more-inline';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
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
      ],
    };
  }

  _renderItem({item}) {
    return <Image source={item.image} style={styles.photo} />;
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: '#513a45',
        }}>
        <Image style={styles.image} source={require('../images/index.jpg')} />
        <Carousel
          layout={'tinder'}
          autoplay={true}
          autoplayInterval={2000}
          ref={ref => (this.carousel = ref)}
          data={this.state.carouselItems}
          sliderWidth={400}
          sliderHeight={400}
          itemWidth={470}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({activeIndex: index})}
        />
        <View style={{top: "-3%", margin: 15}}>
          <SeeMore numberOfLines={15} >
            The Royal offers a warm and friendly atmosphere around its
            prestigious tables with a panoramic view of Paris. With a warm
            welcome, Le Royal gives you the opportunity to live an extraordinary
            culinary experience From pasta to desserts, everything is fresh and
            home-made. Discover the cuisine between local traditions and and new
            ideas with our pleasures of the table. A cuisine that represents a
            tasty mix of spices and sweet/salty flavors and promises a colorful
            culinary a colorful culinary journey. A refined cuisine and
            revisited recipes rigorously selected in a chic and warm setting.
            The large room of the Royal, bordered by a garden of jasmines, gives
            the place a special atmosphere suitable for to relaxation and
            gastronomic discovery. Everything is done to the greatest
            satisfaction of the happy guests, so that this moment of pleasure
            remains engraved in the memories. The master of the house keeps his
            Mediterranean origins well The master of the house keeps his
            Mediterranean origins well anchored by bringing a particular care to
            the reception of his clientele, that it is regular, curious or
            simply of passage.
          </SeeMore>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  photo: {
    marginBottom: 20,
    height: 250,
    width: 400,
    // width: '90%',
  },
  text: {
    margin: 15,
    color: 'white',
  },
});

export default About;
