import { FontAwesome5 } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'

const Amenities = () => {
  return (
    <View className='flex flex-row gap-2 flex-wrap'>
        <View className=' bg-white p-4 rounded-md justify-center items-center'>
            <FontAwesome5 name="wifi" size={24} color="#5E3023" />
            <Text className='mt-2 font-medium text-base text-[#5E3023]'>Wifi</Text>
        </View>
        <View className=' bg-white p-4 rounded-md justify-center items-center'>
            <FontAwesome5 name="snowflake" size={24} color="#5E3023" />
            <Text className='mt-2 font-medium text-base text-[#5E3023]'>A/C</Text>
        </View>
        <View className=' bg-white p-4 rounded-md justify-center items-center'>
            <FontAwesome5 name="car" size={24} color="#5E3023" />
            <Text className='mt-2 font-medium text-base text-[#5E3023]'>Parking</Text>
        </View>
        <View className=' bg-white p-4 rounded-md justify-center items-center'>
            <FontAwesome5 name="hamburger" size={24} color="#5E3023" />
            <Text className='mt-2 font-medium text-base text-[#5E3023]'>Food</Text>
        </View>
        {/* <View className=' bg-white p-4 rounded-md justify-center items-center'>
            <FontAwesome5 name="snowflake" size={24} color="#5E3023" />
            <Text className='mt-2 font-medium text-base text-[#5E3023]'>A/C Rooms</Text>
        </View> */}
    </View>
  )
}

export default Amenities