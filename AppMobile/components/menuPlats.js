import * as React from 'react';
import { View } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View />
);

const SecondRoute = () => (
  <View />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function MenuPlat() {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Menu du jour' },
    { key: 'second', title: 'Menu de la semaine' },
  ]);

  return (
    <TabView 
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
    />
  );
}
