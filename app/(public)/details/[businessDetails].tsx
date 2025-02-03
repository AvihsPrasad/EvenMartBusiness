import { Collapsible } from '@/components/Collapsible';
import CustomButton from '@/components/CustomButton';
import CustomHeader from '@/components/Header';
import Amenities from '@/components/ui/Amenities';
import HallSlide from '@/components/ui/HallSlide';
import Rating from '@/components/ui/rating';
import Decor from '@/components/views/Decor';
import GalleryView from '@/components/views/Gallery';
import Hall from '@/components/views/Hall';
import Mua from '@/components/views/mua';
import PhotoView from '@/components/views/Photo';
import Props from '@/components/views/props';
import { Business, images, PhotoPakages, southPlate } from '@/constants';
import { AntDesign, Entypo, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Image, LogBox, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const data = [
  { label: 'Venues', value: '1' },
  { label: 'Props', value: '2' },
  { label: 'Photos & Videos', value: '3' },
  { label: 'Decorations', value: '4' },
  { label: 'Music & DJ', value: '5' },
  { label: 'MUA', value: '6' },
  { label: 'Food & Beverages', value: '7' },
  { label: 'Invitations', value: '8' },
  { label: 'Arificial Jewels', value: '9' },
  { label: 'Vehical Convoie', value: '10' },
];
type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View className='flex'>
    <Text className='text-lg text-black'>{title}</Text>
  </View>
);


const BusinessDetails = () => {
    const { businessDetails } = useLocalSearchParams();
    const [tab,setTab] = useState(true)
    const [businessType, setBusinessType] = useState({Id: '',title: "",type:'',city:'',state: '',country: '',Address:'',Rating: '',location: '',Descp: ''},)
    useEffect(() => {
      // LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
      let type = Business.filter((item) =>  item.Id == businessDetails);
      // console.log(type)
      setBusinessType(type[0])
      // Alert.alert(JSON.stringify(businessDetails));
      // Alert.alert(JSON.stringify(type));
  }, [])
  return (
    <>
    <CustomHeader title={businessType.title} home={false} backArrow={true} onBack={() => router.back()}/>
      <ScrollView className='bg-white h-full'>
      {<View>
          <View className='mb-5 flex flex-row bg-[#efefef]'>
                <TouchableOpacity onPress={() => setTab(true)} className={`w-1/2 justify-center items-center py-3 cursor-pointer ${tab ? ' border-b-4 border-blue-400 bg-white':'border-0'}`}>
                  <View><Text className='text-base'>Info</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTab(false)} className={`w-1/2 justify-center items-center py-3 cursor-pointer ${!tab ? ' border-b-4 border-blue-400 bg-white':'border-0'}`}>
                  <View><Text>Gallery</Text></View>
                </TouchableOpacity>
              </View>
        </View>}
        {tab&&<View>{businessType.type === '1' && <Hall businessType={businessType}/>}</View>}
        {tab&&<View>{businessType.type === '2' && <Props businessType={businessType}/>}</View>}
        {tab&&<View>{businessType.type === '3' && <PhotoView businessType={businessType}/>}</View>}
        {tab&&<View>{businessType.type === '4' && <Decor businessType={businessType}/>}</View>}
        {tab&&<View>{businessType.type === '6' && <Mua businessType={businessType}/>}</View>}
        {!tab&&<View>{<GalleryView />}</View>}
        <Text>{JSON.stringify(businessType)}</Text>
      </ScrollView>
    </>
  )
}

export default BusinessDetails