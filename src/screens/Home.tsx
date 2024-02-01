/* eslint-disable react-native/no-inline-styles */
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text} from 'react-native';
import React from 'react';
import CarousselComp from '../components/Caroussel';
import {SafeAreaView} from 'react-native';
import {Image} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {FlatList} from 'react-native';
import {dataCaroussel} from '../utils/datasCaroussel';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = () => {
  return (
    <SafeAreaView>
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
        <Text className="text-2xl capitalize font-bold">exercises</Text>

        <FlatList
          keyExtractor={item => item.name}
          contentContainerStyle={
            {
              // paddingBottom: 50,
              // paddingTop: 20,
            }
          }
          columnWrapperStyle={{justifyContent: 'space-between'}}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                width: widthPercentageToDP(44),
                height: heightPercentageToDP(32),
              }}
              className="p-4 flex justify-end mb-4 ">
              <Image
                source={item.image}
                style={{
                  width: widthPercentageToDP(44),
                  height: heightPercentageToDP(32),
                }}
                resizeMode="cover"
                className="  rounded-3xl absolute"
              />

              <LinearGradient
                style={{
                  width: widthPercentageToDP(44),
                  height: heightPercentageToDP(32),
                }}
                colors={['transparent', '#181d1b']}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
                className="absolute bottom-0"
              />
              <View className="text-xl absolute bottom-0 mb-4 text-center right-0 left-0">
                <Text className="text-white tracking-wider text-xl text-center">
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          numColumns={2}
          data={dataCaroussel}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
