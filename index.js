/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry, SafeAreaView} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';

function Main() {
  return (
    <>
      <App />
    </>
  );
}
AppRegistry.registerComponent(appName, () => Main);
