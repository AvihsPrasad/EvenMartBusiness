import CustomHeader from '@/components/Header'
import ListCard from '@/components/ListCard'
import { router } from 'expo-router'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

function List() {
  return (
    <View className='mb-[160px]'>
        <CustomHeader title="Hall" home={false} backArrow={true} onBack={() => router.back()}/>
        <View className='p-4 h-full'>
            <ScrollView>
                <TouchableOpacity className='mb-2'>
                    <ListCard />
                </TouchableOpacity>
                <TouchableOpacity className='mb-2'>
                    <ListCard />
                </TouchableOpacity>
                <TouchableOpacity className='mb-2'>
                    <ListCard />
                </TouchableOpacity>
                <TouchableOpacity className='mb-2'>
                    <ListCard />
                </TouchableOpacity>
            </ScrollView>
        </View>
    </View>
  )
}

export default List