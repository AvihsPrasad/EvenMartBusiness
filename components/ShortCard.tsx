import React from 'react'
import { Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

export const ShortCard = (Data: any) => {
  return (
    <View className='flex bg-white justify-center items-center min-h-[80px] rounded-xl py-2'>
        <View className='mb-2'>{Data.icon}</View>
        <Text className='font-RobotoMedium text-sm text-[#5E3023]'>{Data?.Data?.text}</Text>
    </View>
  )
}
