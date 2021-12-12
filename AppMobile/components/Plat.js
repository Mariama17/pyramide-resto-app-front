import React from 'react';
import {Image, View, Text, StyleSheet, Button} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SeeMore from 'react-native-see-more-inline';

class Plat extends React.Component {
  constructor(props) {
    super(props);
  }

  getFoodOfCurrentDay = () => {};

  _renderItem({item}) {
    return (
      <View>
        <Image source={{uri: item.imageUrl}} style={styles.plat} />
      </View>
    );
  }

  render() {
    const plat = this.props.plat;
    return (
      <View
        style={ {
          flex: 1,
          marginTop: 7,
          height: 'auto',
        } }>
        { plat.handleDay != undefined &&
          <View style={styles.dayView}>
            <Text style={{fontSize: 25, color:"#5f4a4a"}}>{ plat.day } </Text>
          </View>
        }
        <View elevation={3} style={styles.container}>
          {plat.images != null && (
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
          )}
          <Text style={styles.descriptionPlat}>{plat.name}</Text>
          <View style={styles.detailPlat}>
            {plat != null && (
              <SeeMore style={styles.detailPlat} numberOfLines={2}>
                {plat.ingredients}
              </SeeMore>
            )}
          </View>
        </View>
        <View style={{width: 150, bottom: 40, left: 40}}>
          <Button
            title="Commander"
            onPress={() => {
              this.props.token != null
                ? this.props.showModal(plat)
                : this.props.navigation.navigate('Connexion');
            }}
            color="#513a45"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dayView: {
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
  plat: {
    width: 240,
    height: 130,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    width: 240,
    opacity: 0.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 10,
    shadowRadius: 20,
    elevation: 6,
    borderRadius: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  descriptionPlat: {
    color: '#513a45',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 5,
    marginTop: 5,
    top: -60,
  },
  detailPlat: {
    color: '#513a45',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
    top: -60,
    marginLeft: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Plat;
