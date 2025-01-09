import CustomButton from '@/components/CustomButton';
import CustomHeader from '@/components/Header';
import { HomeCat } from '@/components/ui/HomeCat';
import OfferSlide from '@/components/ui/offerSlide';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Platform, View, Text, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (<>
    {/* <StatusBar barStyle="light-content" backgroundColor={'#5E3023'}/> */}
    {/* <SafeAreaView> */}
      <CustomHeader title="Home" notification={true} onNotification={() => router.push("/(public)/profile/notification")} />
      <ScrollView className='bg-white h-screen'>
        <View className='p-5 w-full flex'>
          <View className='flex w-full mb-5'>
            <Text className='text-2xl font-bold mb-3'>Complete your profile</Text>
            <Text className='text-[18px] font-normal'>A complete profile makes you seem more reliable and helps generate business.</Text>
          </View>
          <View className='flex w-full bg-gray-300 rounded-lg ring-1 ring-gray-300 mb-2'>
            <View className='flex w-[82%] h-[20px] bg-red-400 rounded-lg'></View>
          </View>
          <View className='flex flex-row w-full mb-5'>
            <View className='grow'><Text className='text-base text-gray-500'>PROFILE COMPLETEION</Text></View>
            <View><Text className='text-base text-gray-500 '>86%</Text></View>
          </View>
          <View className='flex'>
            <Text className='text-xl font-semibold mb-2'>Business 1</Text>
            <View className='flex flex-row rounded-lg ring-1 ring-gray-300 bg-pink-200 p-5 mb-5'>
              <View className='grow flex flex-row items-center'>
                <Ionicons name="sparkles" size={24} color="#f9a8d4" />
                <Text className='ml-6 text-base'>You have 7 new leads</Text>
              </View>
              <View><Text className='text-base underline'>View</Text></View>
            </View>
          </View>
          <View className='flex'>
            <Text className='text-xl font-semibold mb-2'>Business 2</Text>
            <View className='flex flex-row rounded-lg ring-1 ring-gray-300 bg-lime-200 p-5 mb-5'>
              <View className='grow flex flex-row items-center'>
                <Ionicons name="sparkles" size={24} color="#a3e635" />
                <Text className='ml-6 text-base'>You have 7 new leads</Text>
              </View>
              <View><Text className='text-base underline'>View</Text></View>
            </View>
          </View>
          <View className='flex rounded-lg border-4 border-gray-300 bg-white p-5 mb-20'>
            <Text className='text-2xl font-semibold mb-5'>Have any queries? Speak to our team</Text>
            <CustomButton title='Request Call Back' IconLeft={() => (<View className='mr-5'><Feather name="phone-call" size={24} color="white" /></View>)} bgVariant='info' classname='' onPress={() => router.push("/(auth)/register")} />
          </View>
        </View>
      </ScrollView>
    {/* </SafeAreaView> */}
    </>);
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
