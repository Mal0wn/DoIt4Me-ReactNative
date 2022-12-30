/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { MissionComp } from './src/components/organismes/Missions/Mission';

import {HomeScreen} from './src/scenes/Home/HomeScreen';

const App = () => {

  return (
    <SafeAreaView>
      <Text style={styles.highlight}> APP  </Text>
      <HomeScreen></HomeScreen>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
    color : 'red'
  },
});

export default App;
