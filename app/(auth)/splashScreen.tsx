import { Redirect, router } from 'expo-router'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

const SplashScreen = () => {
    useEffect(() => {
        setTimeout(()=>{
            router.replace('/(auth)/login')
        },5000)
    })
  return (
    <View className='flex w-full h-full bg-[#5E3023] justify-center items-center'>
        <Text className='text-center font-medium text-4xl text-[#FFE8D6]'>Event Mart Business</Text>
        <View className='absolute bottom-10'>
            <Text className='text-center text-[#FFE8D6]'>Powered By</Text>
            <Text  className='text-center text-[#FFE8D6]'>Shivaprasad KS</Text>
        </View>
    </View>
  )
}

export default SplashScreen