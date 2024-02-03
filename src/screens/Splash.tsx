/* eslint-disable react-native/no-inline-styles */
import {FadeInDown} from 'react-native-reanimated';
import {View, Image, Text} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {MainStackType} from '../../App';
import Animated from 'react-native-reanimated';

const Splash = ({navigation}: MainStackType) => {
  return (
    <View
      className="relative flex justify-end font-lexend"
      style={{width: wp('100%'), height: hp('100%')}}>
      <Image
        className="w-full h-full absolute inset-0"
        source={require('../../assets/images/welcome.png')}
      />
      <LinearGradient
        colors={['transparent', '#181d1b']}
        style={{height: hp('30%')}}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 0.8}}
        className="flex justify-center items-center gap-3">
        <Animated.View
          entering={FadeInDown}
          className="flex justify-center items-center gap-1">
          <Text
            style={{fontSize: wp('10%'), fontFamily: 'Lexend-Regular'}}
            className="text-white font-extrabold capitalize">
            Best <Text className="text-rose-600">workout</Text>
          </Text>

          <Text
            style={{fontSize: wp('10%'), fontFamily: 'Lexend-Regular'}}
            className="text-white font-extrabold capitalize font-lexend">
            For you
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(500)}>
          <TouchableOpacity
            style={{width: wp('80%')}}
            onPress={() => {
              navigation.navigate('Home');
            }}
            className="border-white border  rounded-full bg-rose-600 p-4 ">
            <Text
              style={{fontSize: wp('5%')}}
              className="font-bold text-white text-center">
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

export default Splash;
