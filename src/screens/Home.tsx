/* eslint-disable react-native/no-inline-styles */
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text} from 'react-native';
import React from 'react';
import CarousselComp from '../components/Caroussel';
import {Image} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Exercices from '../components/Exercices';
import {ScrollView} from 'react-native-virtualized-view';
import {MainStackType} from '../../App';
import {ImageCaroussel} from '../utils/datasCaroussel';

const Home = ({navigation}: MainStackType) => {
  const naviagtionHnadler = (conf: ImageCaroussel) => {
    navigation.navigate('Exercise', conf);
  };
  return (
    <ScrollView>
      <View className="flex flex-row p-4 items-center justify-between">
        <View>
          <Text
            style={{
              fontSize: widthPercentageToDP('10%'),
              fontFamily: 'Lexend-Regular',
            }}
            className=" font-extrabold  font-lexend uppercase">
            Ready to
          </Text>
          <Text
            style={{
              fontSize: widthPercentageToDP('10%'),
              fontFamily: 'Lexend-Regular',
            }}
            className="text-rose-600 font-extrabold  font-lexend uppercase">
            Workout
          </Text>
        </View>

        <View className=" flex items-center gap-4">
          <Image
            className="w-[40px] h-[40px] rounded-full"
            source={require('../../assets/images/avatar.png')}
          />
          <View className="bg-[#c4c2c2] w-[40px] h-[40px] p-1 flex justify-center items-center rounded-full">
            <Icon
              color={'#e2e2e2'}
              size={25}
              name="bell-o"
              className=" rounded-full"
            />
          </View>
        </View>
      </View>

      <CarousselComp />

      {/* exercises */}
      <View className="p-4">
        <Text className="text-2xl capitalize font-bold mb-3">exercises</Text>
        <Exercices naviagtionHnadler={naviagtionHnadler} />
      </View>
    </ScrollView>
  );
};

export default Home;
