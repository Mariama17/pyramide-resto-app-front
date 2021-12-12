import * as React from 'react';
import {
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Button,
  RefreshControl,
  Text
} from 'react-native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Plat from './Plat.js';
import rest from '../API/rest.js';
import { FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      foodsOfDay: null,
      token: null,
      refreshing: true,
      platCommand: undefined,
      user: null,
    };
  }

  componentDidMount = async () => {
    this.getFoodOfCurrentDay();
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

  getFoodOfCurrentDay = () => {
    try {
      this.setState({foodsOfDay: null}, async () => {
        foodsOfDay = await rest.getFoodOfCurrentDay();
        foodsOfDay.forEach(async (food, index) => {
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

  showModal = platCommand => {
    this.setState({showModal: true});
    if (platCommand != undefined) this.setState({platCommand});
  };

  closeModal = () => {
    this.setState({showModal: false});
  };

  handleModal = () => {
    const platCommand = this.state.platCommand;
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
            {platCommand != undefined && (
              <View style={styles.Recap}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                  }}>
                  Summary of your order
                </Text>
                <View style={{marginLeft: 40, marginVertical: 15}}>
                  <Text style={{margin: 10, color: 'black'}}>
                    <Text style={{fontWeight: 'bold'}}>Food : </Text>
                    {platCommand.name}
                  </Text>
                  <Text style={{margin: 10, color: 'black'}}>
                    <Text style={{fontWeight: 'bold'}}>Date : </Text>
                    {platCommand.day} {platCommand.date}
                  </Text>
                  <Text style={{margin: 10, color: 'black'}}>
                    <Text style={{fontWeight: 'bold'}}>Price : </Text> 50 €
                  </Text>
                  {this.state.user != null && (
                    <Text style={{margin: 10, color: 'black'}}>
                      <Text style={{fontWeight: 'bold'}}>Name : </Text>{' '}
                      {this.state.user.firstName} {this.state.user.lastName}
                    </Text>
                  )}
                </View>
              </View>
            )}
            <View style={{justifyContent: 'flex-end'}}>
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
                  backgroud: '#4c3737',
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
        </View>
      </Modal>
    );
  };

  render() {
    return (
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', backgroundColor: '#f7e0d2'}}>
        {this.handleModal()}
        <FlatList
          data={this.state.foodsOfDay}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Plat
              plat={item}
              showModal={this.showModal}
              token={this.state.token}
              navigation={this.props.navigation}
            />
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.getFoodOfCurrentDay}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: '15%',
    flexDirection: 'row',
  },
  modalView: {
    // margin: 20,
    borderBottomWidth: 2,
    height: '54%',
    width: '97%',
    backgroundColor: 'white',
    // justifyContent: 'flex-end',
  },
  Recap: {
    flex: 1,
    justifyContent: 'space-around',
    top: 10
  },
});

export default Home;
