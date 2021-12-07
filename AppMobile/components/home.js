import * as React from 'react';
import {
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Button,
} from 'react-native';
import Modal from 'react-native-modal';
import Plat from './Plat.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  _renderItem({item}) {
    return (
      <View>
        <Image source={item.image} />
      </View>
    );
  }

  showModal = () => {
    this.setState({showModal: true});
  };

  closeModal = () => {
    this.setState({showModal: false});
  }

  handleModal = () => {
    return (
      <Modal
        visible={this.state.showModal}
        useNativeDriver={true}
        useNativeDriverForBackdrop={true}
        swipeDirection={['up', 'down', 'left', 'right']}
        onBackdropPress={() => this.setState({showModal: false})}
        onRequestClose={() => {
          this.setState({showModal: false});
        }}>
        <View
          style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{backgroud: "#4c3737" ,width:140, right: 10, height:38,  top: 30, left: 35, flexDirection: 'row'}}>
              <Button title="Sur place"
                onPress={this.closeModal}
                color= "#4c3737"
              />
            </View>
            <View style={{backgroud: "#4c3737" ,width:140, left: 180, height:38,  top: -9, right: 20, flexDirection: 'row'}}>
              <Button
                title="emporter"
                onPress={this.closeModal}
                color= "#4c3737"
              />
            </View> 
          </View>

          {/* <View
            style={{
              backgroud: '#4c3737',
              width: 140,
              left: 180,
              height: 38,
              top: 116,
              right: 25,
              flexDirection: 'row',
            }}> */}
          </View>
      </Modal>
    );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#f7e0d2'}}>
        {/* <View>
          <Image style={styles.image} 
            source={require('../images/index.jpg')} 
          />
        </View> */}
        {this.handleModal()}
        <FlatList
          data={plats}
          renderItem={({item}) => (
            <Plat
              plat={item}
              showModal={this.showModal}
              navigation={this.props.navigation}
            />
          )}
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
  // image: {
  //   top: 10,
  //   height: 100,
  //   width: 100,
  //   left: 170,
  // },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: '15%',
    flexDirection: 'row'
  },
  modalView: {
    // margin: 20,
    borderBottomWidth: 2,
    height: '54%',
    width: '97%',
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
});

export default Home;
