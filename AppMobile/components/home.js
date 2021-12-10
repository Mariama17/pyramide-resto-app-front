import * as React from 'react';
import {
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Button,
  RefreshControl,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';
import Plat from './Plat.js';
import rest from '../API/rest.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      foodsOfDay: null,
      token: null,
      refreshing: true,
      platCommand: undefined,
      user: null
    };
  }

  getFoodOfCurrentDay = () => {
    if (this.props.route.params != undefined)
      this.setState({token: this.props.route.params.token});
    rest
      .getFoodOfCurrentDay()
      .then(foodsOfDay => {
        foodsOfDay.forEach((food, index) => {
          rest.getImagesFood(food.id).then(images => {
            Object.assign(food, {images});
            foodsOfDay[index] = food;
          });
        });
        this.setState({foodsOfDay}, () => {
          this.setState({refreshing: false});
        });
      })
      .catch(() => {
        this.setState({refreshing: false});
      });
  };

  componentDidMount() {
    const params = this.props.route.params;
    params != undefined &&
    this.setState({token: this.props.route.params.token}, () => {
      rest.getUser(params.token).then(user => {this.setState({user})})
    })
    this.getFoodOfCurrentDay();
  }

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
                <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
                  Summary of your order
                </Text>
                <Text style={{margin: 10, color: 'black'}}>
                  <Text style={{fontWeight: 'bold'}}>Food : </Text>{platCommand.name}
                </Text>
                <Text style={{margin: 10, color: 'black'}}>
                <Text style={{fontWeight: 'bold'}}>Date : </Text>{platCommand.day} {platCommand.date}
                </Text>
                <Text style={{margin: 10, color: 'black'}}>
                <Text style={{fontWeight: 'bold'}}>Price : </Text> 50 €
                </Text>
                {this.state.user != null &&
                  <Text style={{margin: 10, color: 'black'}}>
                    <Text style={{fontWeight: 'bold'}}>Name : </Text> {this.state.user.firstName} {this.state.user.LastName}
                  </Text>
                }
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
                  title="Sur place"
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
                  title="emporter"
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
          renderItem={({item}) => (
            <Plat
              plat={item}
              showModal={this.showModal}
              navigation={this.props.navigation}
            />
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.getFoodOfCurrentDay}
            />
          }
          keyExtractor={item => item.id}
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
    justifyContent: 'space-around',
    top: 2
  },
});

export default Home;
