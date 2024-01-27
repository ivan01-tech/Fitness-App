/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [ImageSource, setImageSource] = useState('');
  const [showCamera, setShowCamera] = useState(true);

  return (
    <SafeAreaView>
      <View className="flex justify-center items-center ">
        <Text className="font-bold text-2xl text-slate-700 m-4">
          Bonjour et je teste native wind
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
