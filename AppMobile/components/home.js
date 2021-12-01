import * as React from 'react';
import {
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';
import Plat from './Plat.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    
  }

  _renderItem({item}) {
    return (
      <View>
        <Image source={item.image} />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#513a45'}}>
        <View>
              <Image style={styles.image} 
                source={require('../images/index.jpg')} 
              />
            </View>
        <FlatList
          data={plats}
          renderItem={({item}) => <Plat plat={item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const plats = [
  {
    id: 1,
    nom: 'Couscous marocain',
    description: "Collier d'agneau, semoule de blé dur, persil",
    images: [
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
    ],
  },
  {
    id: 2,
    nom: 'Ravioli',
    description: 'Farine, oeuf, sucre, levure, raviolis',
    images: [
      {
        image: require('../images/blanc/index.jpg'),
      },
      {
        image: require('../images/blanc/index2.jpg'),
      },
      {
        image: require('../images/blanc/index3.jpg'),
      },
    ],
  },
  {
    id: 3,
    nom: 'Soushi',
    description: 'Riz vinaigré, wasabi, natte de bambou',
    images: [
      {
        image: require('../images/asi/photo.jpg'),
      },
      {
        image: require('../images/asi/photo2.jpg'),
      },
      {
        image: require('../images/asi/photo3.jpg'),
      },
    ],
  },
];

const styles = StyleSheet.create({
  image: {
    top: 10,
    height: 225,
    width: 220,
    left: 70,
  }, 
})

export default Home;
