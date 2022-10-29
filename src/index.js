/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerTabs} from '@navigation';
import 'react-native-gesture-handler';

const App = () => {
  {
    /*use this  LogBox for remove Gesture handler version warning*/
  }
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
    <NavigationContainer>
      <DrawerTabs />
    </NavigationContainer>
  );
};

export default App;
