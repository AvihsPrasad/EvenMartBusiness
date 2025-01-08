import CustomButton from '@/components/CustomButton'
import CustomHeader from '@/components/Header'
import InputField from '@/components/InputField'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import ReactNativeModal from 'react-native-modal'

const addBusiness = () => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    return (
        <>
          <SafeAreaView>
            <CustomHeader title="Add Business" home={false} backArrow={true} onBack={() => router.back()}/>
            <ScrollView className=' bg-[#efefef] h-screen'>
              <View className='flex w-full pb-28'>
                <View className='flex px-5 pt-5 bg-white w-full'>
                    <InputField label="Business Name" placeholder='Title' labelStyle="text-sm" inputStyle="h-[35px] text-[14px] rounded-sm" containerStyle='border-[0.5px] border-gray-300'/>
                </View>
                <View className='flex px-5 bg-white w-full'>
                    <InputField label="Business Type" placeholder='Category' labelStyle="text-sm"  inputStyle="h-[35px] text-[14px] rounded-sm" containerStyle='border-[0.5px] border-gray-300'/>
                </View>
                <View className='flex px-5 bg-white w-full'>
                    <InputField label="city" placeholder='' labelStyle="text-sm" inputStyle=" h-[35px] text-[14px] rounded-sm" containerStyle='border-[0.5px] border-gray-300'/>
                </View>
                <View className='flex px-5 bg-white w-full'>
                    <InputField label="State" placeholder='' labelStyle="text-sm" inputStyle=" h-[35px] text-[14px] rounded-sm" containerStyle='border-[0.5px] border-gray-300'/>
                </View>
                <View className='flex px-5 bg-white w-full'>
                    <InputField label="Country" placeholder='' labelStyle="text-sm" inputStyle=" h-[35px] text-[14px] rounded-sm" containerStyle='border-[0.5px] border-gray-300'/>
                </View>
                <View className='flex px-5 bg-white w-full'>
                    <InputField label="Address" placeholder='' labelStyle="text-sm" inputStyle=" h-[35px] text-[14px] rounded-sm" containerStyle='border-[0.5px] border-gray-300'/>
                </View>
                <View className='flex px-5 bg-white w-full'>
                    <Text className='mb-5 text-sm'>Location</Text>
                    <CustomButton title='Add Location'classname='mb-5' IconLeft={() => (<View className='mr-5'><Entypo name="location-pin" size={24} color="white" /></View>)} bgVariant='info' onPress={() => router.push("/(auth)/register")} />
                    {/* <InputField label="Location" placeholder='' labelStyle="text-sm" inputStyle=" h-[35px] text-[14px] rounded-sm" containerStyle='border-[0.5px] border-gray-300'/> */}
                </View>
                <View className='flex px-5 bg-white w-full border-b-[0.5px] border-gray-300'>
                    <InputField label="Description" placeholder='' labelStyle="text-sm" inputStyle=" h-[35px] text-[14px] rounded-sm" containerStyle='border-[0.5px] border-gray-300'/>
                </View>
                <View className='flex px-5 pt-5 bg-white w-full border-b-[0.5px] border-gray-300'>
                    <View className='flex rounded-lg ring-1 ring-gray-300 bg-sky-200 p-5 justify-center items-center mb-5'>
                        <FontAwesome name="image" size={34} color="#0ea5e9" />
                        <Text className='text-xl font-bold mt-3'>Upload Photos</Text>
                        <CustomButton title='Add Photos' bgVariant='secondary' textVariant='secondary' classname='my-5' onPress={() => router.push("/(auth)/register")} />
                    </View>
                </View>
                <View className='flex px-5 bg-white w-full mb-6'>
                    <CustomButton title='Submit'classname='my-5' onPress={() => setShowSuccessModal(true)}/>
                </View>
              </View>
              <View>
                <ReactNativeModal isVisible={showSuccessModal}>
                    <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
                        <Image
                        // source={images.check}
                        className="w-[110px] h-[110px] mx-auto my-5"
                        />
                        <Text className="text-3xl font-JakartaBold text-center">
                        Profile Updated
                        </Text>
                        <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
                        Details of your account has been updated Successfully.
                        </Text>
                        <CustomButton
                        title="OK"
                        onPress={() => setShowSuccessModal(false)}
                        className="mt-5"
                        />
                    </View>
                </ReactNativeModal>
              </View>
            </ScrollView>
          </SafeAreaView>
        </>
      )
    }

export default addBusiness