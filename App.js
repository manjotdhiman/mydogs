/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React from 'react';
import MainStackNavigator from './src/navigation';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import { colors } from './src/Constants/theme';
import Toast, {DURATION} from 'react-native-easy-toast'


const App = () => {
  
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={colors.secondaryColor} />
      <MainStackNavigator />
      <Toast ref={(ref) => global['toast'] = ref}  defaultCloseDelay={2000}/></>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
