import { Collapsible } from '@/components/Collapsible';
import CustomButton from '@/components/CustomButton';
import CustomHeader from '@/components/Header';
import Amenities from '@/components/ui/Amenities';
import HallSlide from '@/components/ui/HallSlide';
import Rating from '@/components/ui/rating';
import { images, southPlate } from '@/constants';
import { AntDesign, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react'
import { FlatList, Image, LogBox, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View className='flex'>
    <Text className='text-lg text-black'>{title}</Text>
  </View>
);


const productId = () => {
    const { productId } = useLocalSearchParams();
    useEffect(() => {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])
  return (
    <SafeAreaView>
      <ScrollView className='mb-[75px] bg-white'>
        <View className='flex flex-row absolute z-10 mt-2 py-2 px-5'>
          <View className='grow'>
            <View className="pl-2 w-[45px] h-[45px] justify-center items-center rounded-full bg-gray-100">
              <TouchableOpacity  onPress={() => router.back()} className="mr-2"><AntDesign name="arrowleft" size={20} color="#000" /></TouchableOpacity>
            </View>
          </View>
          <View className='flex-row gap-2'>
            <View className="pl-2 w-[45px] h-[45px] justify-center items-center rounded-full bg-gray-100">
              <TouchableOpacity  onPress={() => router.back()} className="mr-2"><Ionicons name="share-social-sharp" size={24} color="black" /></TouchableOpacity>
            </View>
            <View className="pl-2 w-[45px] h-[45px] justify-center items-center rounded-full bg-gray-100">
              <TouchableOpacity  onPress={() => router.back()} className="mr-2"><FontAwesome name="photo" size={22} color="black" /></TouchableOpacity>
            </View>
          </View>
        </View>
        <View className='flex w-full h-[350px] bg-gray-300 items-center justify-center'>
          <Text className='text-center'>Image</Text>
        </View>
        <View className='flex p-5'>
          <View className='flex flex-row border-0 border-white'>
                  <Text className='grow font-medium text-2xl text-ellipsis overflow-hidden w-10/12'>Data Name</Text>
                  <View className='bg-green-600 px-3 py-1 rounded-[4px] flex flex-row items-center h-8 mr-4'>
                      <Text className='text-white font-RobotoMedium text-sm mr-2'>2.5</Text>
                      <AntDesign name="star" size={18} color="#fff" />
                  </View>
              </View>
            <Text className='text-base font-normal'>Data DescriptionData DescriptionData DescriptionData DescriptionData DescriptionData DescriptionData DescriptionData Description</Text>
          </View>
        <View className='px-5 flex flex-row mb-4'>
          <View className='p-4 w-full flex flex-row border-[1px] border-gray-300 rounded-lg items-center'>
            <Image source={images.map} className='w-20 h-20 object-contain' />
            <Text className='px-5 font-medium text-lg'>Location</Text>
          </View>
        </View>
        {/* <Text className='px-5 text-lg font-medium mb-2'>Date & Time</Text>
        <View className='px-5 flex flex-row'>
          <View className='p-4 flex w-full border-[1px] border-gray-300 rounded-lg'></View>
        </View> */}
        <Text className='px-5 text-xl font-bold mb-2'>Amenities</Text>
        <View className='px-5 flex flex-row'>
          <View className='p-4 flex w-full border-[1px] border-gray-300 rounded-lg'>
            <Amenities />
          </View>
        </View>
        <View className='px-5 flex flex-row my-2 mt-4 items-center'>
          <Text className='grow text-xl font-bold '>Reviews & Ratings</Text>
          <Text className='text-sm font-medium text-blue-600 mr-2'>View all</Text>
        </View>
        <View className='px-5 flex flex-row'>
          <View className="p-5 w-full border-[1px] border-gray-300 rounded-lg">
            <Rating />
          </View>
        </View>
        {/* <Text className='px-5 text-lg font-medium my-2'>Guest Photos & videos</Text> */}
        {/* <View className='px-5 flex flex-row '> */}
          {/* <View className='p-5 w-full border-[1px] border-gray-300 rounded-lg'></View> */}
          {/* <Text>Guest Photos & videos</Text> */}
          {/* <FlatList horizontal={true} data={section} renderItem={({ item }) => <Text>{JSON.stringify(item)}</Text>} showsHorizontalScrollIndicator={false}/> */}
          {/* <FlatList data={DATA} renderItem={({item}) => <Item title={item.title} />} keyExtractor={item => item.id}/> */}
        {/* </View> */}
        <Text className='px-5 text-xl font-bold my-2 mt-4'>Hall</Text>
        <View className='px-5 flex flex-row mb-5'>
          <View className='p-4 w-full border-[1px] border-gray-300 rounded-lg'>
            <HallSlide />
          </View>
        </View>
        <Text className='px-5 text-xl font-bold my-2 mt-4'>Food</Text>
        <View className='px-5 flex flex-row mb-1'>
          <View className='p-4 w-full border-[1px] border-gray-300 rounded-lg'>
            <Collapsible title="South Indian plate (390/plate)">
              {southPlate.map((item : any,index) => <View key={index}>
                  <Text className='text-base font-semibold'>{item.Type} (any 1)</Text>
                  {item.List.map((d: any, i: any) => <View key={i} className='flex flex-row items-center'><Entypo name="dot-single" size={24} color="black" /><Text>{d}</Text></View>)}
                </View>
              )}
              {/* <View className='flex flex-row items-center'><Entypo name="dot-single" size={24} color="black" /><Text>No outside catering</Text></View> */}
            </Collapsible>
          </View>
        </View>
        <View className='px-5 flex flex-row mb-5'>
          <View className='p-4 w-full border-[1px] border-gray-300 rounded-lg'>
            <Collapsible title="North Indian plate (490/plate)">
              {southPlate.map((item : any,index) => <View key={index}>
                    <Text className='text-base font-semibold'>{item.Type} (any 1)</Text>
                    {item.List.map((d: any, i: any) => <View key={i} className='flex flex-row items-center'><Entypo name="dot-single" size={24} color="black" /><Text>{d}</Text></View>)}
                  </View>
                )}
            </Collapsible>
          </View>
        </View>
        <Text className='px-5 text-xl font-bold my-2'>Decorations</Text>
        <View className='px-5 flex flex-row mb-5'>
          <View className='p-4 w-full border-[1px] border-gray-300 rounded-lg'>
            <View className='flex flex-row items-center'><Entypo name="dot-single" size={24} color="black" /><Text>Stage setup decorations are all done by our team.</Text></View>
          </View>
        </View>
        <Text className='px-5 text-xl font-bold my-2'>Property Rules and information</Text>
        <View className='px-5 flex flex-row mb-5'>
          <View className='p-4 w-full border-[1px] border-gray-300 rounded-lg'>
            <View className='flex flex-row items-center'><Entypo name="dot-single" size={24} color="black" /><Text>No outside catering</Text></View>
            <View className='flex flex-row items-center'><Entypo name="dot-single" size={24} color="black" /><Text>Extra rooms available</Text></View>
            <View className='flex flex-row items-center'><Entypo name="dot-single" size={24} color="black" /><Text>Parking space provided upto 100 cars and 80 Bikes.</Text></View>
            <View className='flex flex-row items-center'><Entypo name="dot-single" size={24} color="black" /><Text>Decorations can be taken from our team or self</Text></View>
          </View>
        </View>
      </ScrollView>
      <View className='flex flex-row absolute z-auto mt-2 py-3 bottom-0 left-0 w-full bg-[#FFE8D6]'>
          {/* <View className='grow px-5'>
            <Text className='text-xl font-medium'>8,000</Text>
          </View> */}
          <View className='flex-row gap-2 px-5 w-full'>
            <CustomButton title={"Check for availability"} onPress={() => router.push({pathname:'/(public)/details/[productDetails]',params:{productDetails: ''+productId}})} classname="w-full"/>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default productId