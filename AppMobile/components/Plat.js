import React from 'react';
import { Image, View, Text, StyleSheet, Button, onPressHandler, StatusBar} from 'react-native';
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
      <View style={{flex: 1, borderWidth: 1, borderColor:"#f7e0d2", margin: 30, marginBottom: 10, width: 240, height: 220, left: 30}}>
        <View elevation={3} style={styles.container}>
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
          <Text style={styles.descriptionPlat}>{plat.nom}</Text>
          <Text style={styles.detailPlat}>
            {plat.description}
          </Text>
        </View>
        <View>
          {/* <Text style={styles.descriptionPlat}>{plat.nom}</Text>
          <Text style={styles.detailPlat}>
            {plat.description}
          </Text> */}
        </View>
        <View style={{width:150, height: 150,bottom: 40, left: 40}}>
          <Button 
            title="Commander"
            onPress={() => {this.props.navigation.navigate('Connexion')}}
            // onPress={() => {this.props.navigation.toggleDrawer()}}
            color= '#513a45'
          />                    
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    plat: {
        left: 10.1,
        width: 220,
        height: 130,
        top: 10, 
    },
    container:{
      backgroundColor:'#f7e0d2',
      shadowColor: "gray",
      shadowOpacity: 0.8,
      shadowRadius: 1,
      shadowOffset: {
        height: 0.5,
        width: 0.1,
      }
     },
    descriptionPlat: {
        color: '#513a45', 
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        top: -60,
    },
    detailPlat: {
        color: '#513a45', 
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 12,
        top: -60,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default Plat;
