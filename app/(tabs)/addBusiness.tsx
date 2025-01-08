import CustomButton from '@/components/CustomButton'
import CustomHeader from '@/components/Header'
import InputField from '@/components/InputField'
import { FontAwesome } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'

const addBusiness = () => {
    return (
        <>
          <SafeAreaView>
            <CustomHeader title="Add Business" home={false} backArrow={true} onBack={() => router.back()}/>
            <ScrollView className=' bg-[#efefef] h-screen'>
              <View className='flex w-full pb-28'>
                <View className='flex px-5 pt-5 bg-white w-full'>
                    <InputField label="Business Name" placeholder='Title' labelStyle="text-sm" inputStyle="h-[35px] text-[14px] rounded-sm" containerStyle='border-[0.5px] border-gray-300'/>
                </View>
                <View className='flex px-5 pt-5 bg-white w-full'>
                    <InputField label="Business Type" placeholder='Category' labelStyle="text-sm"  inputStyle="h-[35px] text-[14px] rounded-sm" containerStyle='border-[0.5px] border-gray-300'/>
                </View>
                <View className='flex px-5 pt-5 bg-white w-full'>
                    <InputField label="city" placeholder='' labelStyle="text-sm" inputStyle=" h-[35px] text-[14px] rounded-sm" containerStyle='border-[0.5px] border-gray-300'/>
                </View>
                <View className='flex px-5 pt-5 bg-white w-full'>
                    <InputField label="State" placeholder='' labelStyle="text-sm" inputStyle=" h-[35px] text-[14px] rounded-sm" containerStyle='border-[0.5px] border-gray-300'/>
                </View>
                <View className='flex px-5 pt-5 bg-white w-full'>
                    <InputField label="Country" placeholder='' labelStyle="text-sm" inputStyle=" h-[35px] text-[14px] rounded-sm" containerStyle='border-[0.5px] border-gray-300'/>
                </View>
                <View className='flex px-5 pt-5 bg-white w-full border-b-[0.5px] border-gray-300'>
                    <InputField label="Business Name" placeholder='' labelStyle="text-sm" inputStyle=" h-[35px] text-[14px] rounded-sm" containerStyle='border-[0.5px] border-gray-300'/>
                </View>
                <View className='flex px-5 pt-5 bg-white w-full border-b-[0.5px] border-gray-300'>
                    <View className='flex rounded-lg ring-1 ring-gray-300 bg-sky-200 p-5 justify-center items-center mb-5'>
                        <FontAwesome name="image" size={34} color="#0ea5e9" />
                        <Text className='text-xl font-bold mt-3'>Upload Photos</Text>
                        <CustomButton title='Add Photos' bgVariant='secondary' textVariant='secondary' classname='my-5' onPress={() => router.push("/(auth)/register")} />
                    </View>
                </View>
                <View className='flex px-5 bg-white w-full mb-6'>
                    <CustomButton title='Submit'classname='my-5' onPress={() => router.push("/(auth)/register")} />
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </>
      )
    }

export default addBusiness