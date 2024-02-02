/* eslint-disable react-native/no-inline-styles */
import {Image} from 'react-native';
import React from 'react';
import {ImageCaroussel, dataCaroussel} from '../utils/datasCaroussel';
import Caroussel from 'react-native-snap-carousel';
import res from '../utils/responsive';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {View} from 'react-native';
const CarousselComp = () => {
  return (
    <Caroussel
      data={dataCaroussel}
      loop={true}
      // hasParallaxImages={true}
      autoplay={true}
      firstItem={1}
      slideStyle={{display: 'flex', alignItems: 'center'}}
      renderItem={ItemCard}
      className="w-full  flex justify-center items-center"
      sliderWidth={widthPercentageToDP('100%')}
      itemWidth={res.wp('100%')}
      layout="default"
    />
  );
};

const ItemCard = ({item}: {item: ImageCaroussel}) => (
  <View
    className="flex items-center"
    style={{width: res.wp('100%') - 70, height: heightPercentageToDP('25%')}}>
    <Image
      source={item.image}
      className="rounded-xl m-auto w-full h-full"
      key={item.name}
      // containerStyle={{borderRadius: 30, flex: 1}}
    />
  </View>
);

export default CarousselComp;
