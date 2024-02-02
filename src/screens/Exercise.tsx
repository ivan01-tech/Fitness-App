/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ExerciseProps} from '../../App';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text} from 'react-native';
import {getExercises} from '../utils/exerciceservices';
import {ScrollView} from 'react-native-virtualized-view';
import CustomModal from '../components/CustomModal';
const Exercise = ({route, navigation}: ExerciseProps) => {
  const {image, name} = route.params;
  const [bodyPart, setBodyPart] = useState<BodyPartRes[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getExercises(name)
      .then(res => {
        if (res) {
          setBodyPart(res);
        } else {
          console.log('error : ', res);
          ToastAndroid.show('successfully fetched data', ToastAndroid.LONG);
        }
      })
      .catch(err => {
        console.log('error : ', err);
        ToastAndroid.show(
          'something went wrong while fetching',
          ToastAndroid.SHORT,
        );
      });
  }, [name]);

  const ToogleModalState = function () {
    setModalVisible(prev => !prev);
  };

  return (
    <ScrollView>
      <View
        style={{
          height: heightPercentageToDP('40%'),
          width: widthPercentageToDP('100%'),
        }}
        className="relative">
        <Image
          className="absolute rounded-b-[50px] inset-0 object-contain w-full h-full"
          source={image}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="w-[50px] mt-6 ml-6 h-[50px] bg-rose-600 flex justify-center items-center rounded-full">
          <AntDesign size={20} color={'white'} name="caretleft" />
        </TouchableOpacity>
      </View>

      {/* exercises */}
      <View className="p-4 w-full">
        <Text className="text-2xl  font-bold mb-3 capitalize">
          <Text>{name}</Text> exercises
        </Text>

        <FlatList
          keyExtractor={item => item.name}
          contentContainerStyle={{
            paddingBottom: 50,
            paddingTop: 20,
          }}
          numColumns={2}
          data={bodyPart}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          renderItem={({item}) => (
            <>
              <TouchableOpacity
                style={{
                  width: widthPercentageToDP(44),
                  height: heightPercentageToDP(32),
                }}
                onPress={ToogleModalState}
                className="flex m-2 justify-center items-center  !rounded-[50px]">
                <Image
                  source={{uri: item.gifUrl}}
                  style={{
                    width: widthPercentageToDP(44),
                    height: heightPercentageToDP(32),
                  }}
                  resizeMode="cover"
                  className="w-full h-full  rounded-[50px]"
                />
              </TouchableOpacity>

              <CustomModal
                ToogleModalState={ToogleModalState}
                modalVisible={modalVisible}
                item={item}
              />
            </>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Exercise;
