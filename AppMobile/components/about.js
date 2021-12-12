import * as React from 'react';
import { Image, View, StyleSheet, SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SeeMore from 'react-native-see-more-inline';

class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex:0,
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
          ]
        }        
    }
    
    _renderItem({item}){
        return (
          <View>
            <Image source={item.image} style={styles.photo} />
          </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={{backgroundColor:'#513a45'}}>
                <View>
                    <Image style={styles.image} 
                        source={require('../images/index.jpg')} 
                    />
                </View>
                <View style={styles.photo}>
                    {/* <Image style={styles.photo} 
                        source={require('../images/restaurant/photo.jpg')} 
                    /> */}
                  <Carousel
                    layout={"default"}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={300}
                    itemWidth={470}
                    height={300}
                    renderItem={this._renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) } />  
                </View> 
                <View style={styles.aboutUs}>
                    <SeeMore numberOfLines={7}> 
                        Le Royal vous fait vivre une ambiance chaleureuse et conviviale 
                        autour de ses tables prestigieuses ayant une vue panoramique sur Paris.
                        Avec un accueil chaleureux, le Royal vous donne l’occasion de vivre une expérience culinaire extraordinaire
                        Des pâtes aux desserts, tout est frais et fait maison. Découvrez la cuisine entre traditions du terroir et 
                        nouvelles idées avec nos plaisirs de la table. 
                        Une cuisine qui représente un savoureux mélange d’épices et de saveurs sucrées/salées et qui promet un 
                        voyage culinaire haut en couleur. Une cuisine raffinée et des recettes revisitées rigoureusement sélectionnées 
                        dans un cadre chic et chaleureux.
                        La grande salle du Royal, bordée d’un jardin de jasmins, confère à l’endroit une atmosphère particulière propre à 
                        la détente et à la découverte gastronomique. Tout est mis en œuvre, à la plus grande satisfaction des heureux convives, 
                        pour que ce moment de plaisir reste gravé dans les mémoires. Le maître de maison garde ses origines méditerranéennes bien 
                        ancrées en apportant un soin particulier à l’accueil de sa clientèle, qu’elle soit habituée, curieuse ou simplement de passage.
                    </SeeMore>
                </View>
                {/* <View style={styles.maps}>
                </View> */}
            </SafeAreaView>
        );
    };
}

const styles = StyleSheet.create({
    image: {
        top: 20,
        height: 130,
        width: 130,
        left: 110,
    },
    photo: {
        top: 20,
        height: 160,
        width: 280,
        left: 20,
    },
    aboutUs: { 
      backgroundColor: 'white',
      margin: 38,
      width:300, 
      right: 10, 
      height:150, 
      borderWidth: 1, 
      top: 15, 
      justifyContent: 'center',
  },
})

export default About;