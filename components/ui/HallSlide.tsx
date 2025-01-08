import React, { useRef, useState } from 'react'
import { Image, Text, View } from 'react-native'
import Swiper from "react-native-swiper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { HomeSwiperImages } from '@/constants';


const swiperDot = () => {
  return <View className="w-[10px] h-[10px] mx-1 bg-[#E2E8F0] rounded-full opacity-0" />;
};
const swiperActiveDot = () => {
  return <View className="w-[10px] h-[10px] mx-1 bg-[#32357a] rounded-full opacity-0" />;
};

const HallSlide = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
    <View className="rounded-md">
        {/* <View className='mb-3'><Text className='text-2xl font-bold'>Offers</Text></View> */}
              <Swiper
                ref={swiperRef}
                loop={true}
                autoplay={true}
                height={310}
                autoplayTimeout={5.0}
                dot={swiperDot()}
                activeDot={swiperActiveDot()}
                onIndexChanged={(index) => setActiveIndex(index)}
              >
                {HomeSwiperImages.map((item: any, index) => (
                  <View key={index} className="rounded-md justify-start items-start w-full border-[1px] border-gray-200" style={{height:310}}>
                    <View className='w-full h-[200px] justify-center items-center bg-slate-300'><Text className='text-xl text-white'>Image {index}</Text></View>
                    <View className='w-full p-5'>
                        <Text className='text-xl font-medium'>Milan {index}</Text>
                        <Text className='text-base'>Sitting capacity {(index + 1) * 100}</Text>
                        <Text className='text-base'>Floating capacity {(index + 1) * 150}</Text>
                    </View>
                    {/* <Image
                      className="w-full rounded-md object-fill"
                      source={item.url}
                      resizeMode="contain"
                      style={{height:200}}
                    /> */}
                  </View>
                ))}
              </Swiper>
            </View>
            </>
  )
}

export default HallSlide