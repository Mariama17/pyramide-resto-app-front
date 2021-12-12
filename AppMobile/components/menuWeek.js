import * as React from 'react';
import {
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Button,
  RefreshControl
} from 'react-native';
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
      refreshing: true,
    };
  }

  componentDidMount() {
    this.getFoodOfCurrentWeek();
  }

  getFoodOfCurrentWeek = () => {
    if (this.props.route.params != undefined)
      this.setState({token: this.props.route.params.token});
    try {
      this.setState({foodsOfDay: null}, async () => {
        foodsOfDay = await rest.getFoodOfCurrentWeek();
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
                backgroud: '#4c3737',
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
              navigation={this.props.navigation}
            />
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.getFoodOfCurrentWeek}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

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
    flexDirection: 'row',
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

export default MenuWeek;
