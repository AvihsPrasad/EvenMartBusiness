import React, { useRef, useState } from 'react'
import { Image, Text, View } from 'react-native'
import Swiper from "react-native-swiper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { HomeSwiperImages } from '@/constants';


const swiperDot = () => {
  return <View className="w-[10px] h-[10px] mx-1 bg-[#E2E8F0] rounded-full" />;
};
const swiperActiveDot = () => {
  return <View className="w-[10px] h-[10px] mx-1 bg-[#32357a] rounded-full" />;
};

const OfferSlide = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
    <View className="mb-4 rounded-md p-5">
        <View className='mb-3'><Text className='text-2xl font-bold'>Offers</Text></View>
              <Swiper
                ref={swiperRef}
                loop={true}
                autoplay={true}
                height={hp(25)}
                dot={swiperDot()}
                activeDot={swiperActiveDot()}
                onIndexChanged={(index) => setActiveIndex(index)}
              >
                {HomeSwiperImages.map((item: any, index) => (
                  <View key={index} className="rounded-md justify-start items-start bg-slate-400 w-full" style={{height:hp(25)}}>
                    {/* <View className='w-full h-[100px]'></View> */}
                    <Image
                      className="w-full rounded-md object-contain"
                      source={item.url}
                      resizeMode="contain"
                      style={{height:hp(20)}}
                    />
                  </View>
                ))}
              </Swiper>
            </View>
            </>
  )
}

export default OfferSlide