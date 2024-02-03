/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image} from 'react-native';
import {ImageCaroussel, dataCaroussel} from '../utils/datasCaroussel';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {REACT_APP_RAPID_API_EXERCISES_URI} from '@env';
import Animated, {FadeInDown} from 'react-native-reanimated';

type ExerciceProps = {
  naviagtionHnadler: (conf: ImageCaroussel) => void;
};

const Exercices = ({naviagtionHnadler}: ExerciceProps) => {
  console.log(
    'REACT_APP_RAPID_API_EXERCISES_URI : ' + REACT_APP_RAPID_API_EXERCISES_URI,
  );
  return (
    <FlatList
      keyExtractor={item => item.name}
      contentContainerStyle={{
        paddingBottom: 50,
        paddingTop: 20,
      }}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      renderItem={({item, index}) => (
        <Animated.View entering={FadeInDown.duration(200).delay(index * 100)}>
          <TouchableOpacity
            style={{
              width: widthPercentageToDP(44),
              height: heightPercentageToDP(32),
            }}
            onPress={() => naviagtionHnadler(item)}
            className=" flex justify-end mb-4 relative">
            <Image
              source={item.image}
              style={{
                width: widthPercentageToDP(44),
                height: heightPercentageToDP(32),
              }}
              resizeMode="cover"
              className="mb-4  rounded-[50px] absolute"
            />

            <LinearGradient
              style={{
                width: widthPercentageToDP(44),
                height: heightPercentageToDP(32),
              }}
              colors={['transparent', '#181d1b']}
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}
              className="absolute bottom-0   rounded-[50px]"
            />
            <View className="text-xl absolute bottom-0 mb-4 text-center right-0 left-0 ">
              <Text className="capitalize text-white tracking-wider text-xl text-center">
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      )}
      numColumns={2}
      data={dataCaroussel}
    />
  );
};

export default Exercices;
