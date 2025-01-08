import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { ShortCard } from '../ShortCard';
import { Feather, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export const HomeCat = () => {
  return (
    <>
        <View className='flex flex-row gap-2 px-4 py-3'>
            <TouchableOpacity className='flex-1' onPress={() => router.push({pathname:'/(public)/category/[categoryid]',params:{categoryid: 'Event Hall'}})}>
                <ShortCard Data={{text: 'Hall'}} icon={<FontAwesome name="bank" size={24} color="#5E3023" />}/>
            </TouchableOpacity>
            <TouchableOpacity className='flex-1' onPress={() => router.push({pathname:'/(public)/category/[categoryid]',params:{categoryid: 'Props'}})}>
                <ShortCard Data={{text: 'Props'}} icon={<MaterialCommunityIcons name="sunglasses" size={24} color="#5E3023" />}/>
            </TouchableOpacity>
            <TouchableOpacity className='flex-1' onPress={() => router.push({pathname:'/(public)/category/[categoryid]',params:{categoryid: 'Photos & Videos'}})}>
                <ShortCard Data={{text: 'Photo'}} icon={<FontAwesome name="camera-retro" size={24} color="#5E3023" />}/>
            </TouchableOpacity>
            <TouchableOpacity className='flex-1' onPress={() => router.push({pathname:'/(public)/category/[categoryid]',params:{categoryid: 'Decorations'}})}>
                <ShortCard Data={{text: 'Decoration'}} icon={<FontAwesome5 name="award" size={24} color="#5E3023" />}/>
            </TouchableOpacity>
        </View>
        <View className='flex flex-row gap-2 px-4'>
            <TouchableOpacity className='flex-1' onPress={() => router.push({pathname:'/(public)/category/[categoryid]',params:{categoryid: 'Music & DJ'}})}>
                <ShortCard Data={{text: 'Music'}} icon={<FontAwesome name="music" size={24} color="#5E3023" />}/>
            </TouchableOpacity>
            <TouchableOpacity className='flex-1' onPress={() => router.push({pathname:'/(public)/category/[categoryid]',params:{categoryid: 'MUA'}})}>
                <ShortCard Data={{text: 'Beauty'}} icon={<FontAwesome name="magic" size={24} color="#5E3023" />}/>
            </TouchableOpacity>
            <TouchableOpacity className='flex-1' onPress={() => router.push({pathname:'/(public)/category/[categoryid]',params:{categoryid: 'Food & Beverages'}})}>
                <ShortCard Data={{text: 'Catering'}} icon={<FontAwesome5 name="hamburger" size={24} color="#5E3023" />}/>
            </TouchableOpacity>
            <TouchableOpacity className='flex-1' onPress={() => router.push('/(tabs)/category')}>
                <ShortCard Data={{text: 'More'}} icon={<FontAwesome5 name="ellipsis-v" size={24} color="#5E3023" />}/>
            </TouchableOpacity>
        </View>
      </>
  )
}
