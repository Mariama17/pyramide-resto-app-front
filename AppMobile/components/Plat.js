import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

class Plat extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderItem({item}) {
    return (
      <View>
        <Image source={item.image} style={styles.plat} />
      </View>
    );
  }

  render() {
    const plat = this.props.plat;
    return (
      <View style={{flex: 1, borderWidth: 1, margin: 25,marginBottom: 10, width: 240, height: 220, left: 40}}>
        <View>
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            data={plat.images}
            sliderWidth={300}
            itemWidth={320}
            height={200}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
        </View>
        <View>
          <Text style={styles.descriptionPlat}>{plat.nom}</Text>
          <Text style={styles.detailPlat}>
            {plat.description}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    plat: {
        left: 10,
        width: 200,
        height: 120,
        top: 30, 
    },
    descriptionPlat: {
        color: '#f7e0d2', 
        fontWeight: 'bold',
        fontSize: 20,
        top: -40,
        left: 20,
    },
    detailPlat: {
        color: '#f7e0d2', 
        fontWeight: 'bold',
        fontSize: 12,
        left: 5,
        top: -40,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
      },
});

export default Plat;
