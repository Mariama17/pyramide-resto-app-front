import * as React from 'react';
import {
  Image,
  View,
  StyleSheet,
  FlatList,
  Button,
  RefreshControl
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Modal from 'react-native-modal';
import Plat from './Plat.js';
import rest from '../API/rest.js';

class MenuWeek extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      foodsOfDay: null,
      token: null,
      user: null,
      refreshing: false,
    };
  }

  componentDidMount = async () => {
    this.getFoodOfCurrentWeek();
    this.setTokenAndUser();
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.setTokenAndUser();
    });
  };

  componentWillUnmount() {
    this._unsubscribe();
  }

  setTokenAndUser = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      this.setState({token});
      rest.getUser(token).then(user => {
        this.setState({user});
      });
    } catch (err) {}
  };

  getFoodOfCurrentWeek = () => {
    try {
      this.setState({foodsOfDay: null, refreshing: true}, async () => {
        foodsOfDay = await rest.getFoodOfCurrentWeek();
        foodsOfDay.forEach(async (food, index) => {
          if (
            index === 0 ||
            foodsOfDay[index].day !== foodsOfDay[index - 1].day
          )
            // Affichage jour pour les menu de la semaine
            Object.assign(food, {handleDay: true});
          images = await rest.getImagesFood(food.id);
          Object.assign(food, {images});
          foodsOfDay[index] = food;
        });
        this.setState({foodsOfDay}, () => {
          this.setState({refreshing: false});
        });
      });
    } catch (error) {
      this.setState({refreshing: false});
    }
  };

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
  };

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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                background: '#4c3737',
                width: 140,
                right: 10,
                height: 38,
                top: 30,
                left: 35,
                flexDirection: 'row',
              }}>
              <Button
                title="On site"
                onPress={this.closeModal}
                color="#4c3737"
              />
            </View>
            <View
              style={{
                background: '#4c3737',
                width: 140,
                left: 180,
                height: 38,
                top: -9,
                right: 20,
                flexDirection: 'row',
              }}>
              <Button
                title="Take away"
                onPress={this.closeModal}
                color="#4c3737"
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f7e0d2',
        } }>
        { this.state.refreshing &&
          <ActivityIndicator
            size="large"
            animating={this.state.refreshing}
            color="#5f4a4a"
            style={{marginTop: 30}}
          />
        }
        {this.handleModal()}
        <FlatList
          data={this.state.foodsOfDay}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Plat
              plat={item}
              showModal={this.showModal}
              navigation={this.props.navigation}
            />
          )}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={this.getFoodOfCurrentWeek}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: '15%',
    flexDirection: 'row',
  },
  modalView: {
    borderBottomWidth: 2,
    height: '54%',
    width: '97%',
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
});

export default MenuWeek;
