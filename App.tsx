/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Home from './src/screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import Splash from './src/screens/Splash';
import Exercise from './src/screens/Exercise';
import {ImageCaroussel} from './src/utils/datasCaroussel';
type RootTypeParamsList = {
  Home: undefined;
  Splash: undefined;
  Exercise: ImageCaroussel;
};
const Stack = createStackNavigator<RootTypeParamsList>();
export type MainStackType = NativeStackScreenProps<RootTypeParamsList>;
export type ExerciseProps = NativeStackScreenProps<
  RootTypeParamsList,
  'Exercise'
>;
function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Exercise" component={Exercise} />
    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default App;
