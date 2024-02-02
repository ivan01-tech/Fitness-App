import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import {Image} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';

type ModalProps = {
  ToogleModalState: () => void;
  modalVisible: boolean;
  item: BodyPartRes;
};

const CustomModal = ({ToogleModalState, modalVisible, item}: ModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        ToogleModalState();
      }}>
      <View className="h-full w-full bg-black/10 flex justify-end ">
        <View
          style={{
            width: widthPercentageToDP(100),
            height: heightPercentageToDP(85),
          }}
          className="bg-[#eee]  rounded-3xl">
          <View className="w-full h-[310px] items-center overflow-hidden relative rounded-[30px]">
            <View className="z-[100]  p-3 absolute right-0 top-0">
              <TouchableOpacity
                onPress={ToogleModalState}
                className="w-[40px] h-[40px] flex justify-center items-center  rounded-full bg-rose-600 mt-1">
                <Icon
                  name="close"
                  size={20}
                  color={'white'}
                  className="font-bold "
                />
              </TouchableOpacity>
            </View>
            <Image
              className="w-full h-full object-contain "
              source={{uri: item.gifUrl}}
            />
          </View>
          <ScrollView>
            <View className="p-3 flex flex-col gap-3">
              {/* exercises */}
              <Text className="">
                Body part :{' '}
                <Text className="font-bold capitalize">{item.bodyPart}</Text>
              </Text>

              <Text className="capitalize">
                Equipement :{' '}
                <Text className="font-bold capitalize">{item.equipment}</Text>
              </Text>

              <Text className="capitalize">
                Target :{' '}
                <Text className="font-bold capitalize">{item.target}</Text>
              </Text>
              <View className="flex flex-row">
                <Text>Secondary Muscles : </Text>
                {item.secondaryMuscles.map((prev, ind) => (
                  <Text key={prev} className="font-bold capitalize pl-3">
                    {prev}
                  </Text>
                ))}
              </View>
            </View>
            <View className="p-4 w-full">
              <Text className="text-2xl  font-bold mb-3 capitalize">
                Intructions
              </Text>

              <View className="flex gap-3">
                {item.instructions.map((prev, ind) => (
                  <Text key={prev} className="">
                    <Text className="font-bold pr-3 pl-4">{ind + 1} - </Text>

                    {prev}
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
