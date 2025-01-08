import CustomButton from '@/components/CustomButton';
import CustomHeader from '@/components/Header';
import InputField from '@/components/InputField';
import ListCard from '@/components/ListCard';
import { cameraList, decorationList, escortList, foodList, hallList, invitationList, jewelList, muaList, musicList, propsList } from '@/constants';
import { Entypo, Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const CategoryId = () => {
    const { categoryid } = useLocalSearchParams();
    const [form, setForm] = useState({searchtext: "",});
  return (
    <SafeAreaView className='mb-[160px]'>
        <CustomHeader title={"" + categoryid} home={false} backArrow={true} onBack={() => router.back()}/>
            {/* <Text>{JSON.stringify({listOfData}.listOfData)}</Text> */}
        <View className='p-4 h-full'>
            <ScrollView>
                <View className='flex bg-white p-4 mb-5 border-[1px] border-gray-300 rounded-lg'>
                    <View className='flex flex-row w-full gap-2'>
                        <View className='w-[48%]'>
                            <InputField 
                                placeholder='From'
                                value={form.searchtext} 
                                onChangeText={(value) => setForm({...form, searchtext: value})} 
                                icon={<Entypo name={'calendar'} 
                                color={'#979dac'} style={{fontSize:20,marginLeft: 15}}/>
                                } />
                        </View>
                        <View className='w-[48%]'>
                            <InputField 
                                placeholder='to'
                                value={form.searchtext} 
                                onChangeText={(value) => setForm({...form, searchtext: value})} 
                                icon={<Entypo name={'calendar'} 
                                color={'#979dac'} style={{fontSize:20,marginLeft: 15}}/>
                                } />
                        </View>
                    </View>
                    <View className='flex'>
                        <View className='w-full'>
                            <InputField 
                                placeholder='People capacity'
                                value={form.searchtext} 
                                onChangeText={(value) => setForm({...form, searchtext: value})} 
                                icon={<Feather name={'user'} 
                                color={'#979dac'} style={{fontSize:20,marginLeft: 15}}/>
                                } />
                        </View>
                    <CustomButton title={"Search"} classname="w-full"/>
                    </View>
                </View>
                {categoryid === 'Event Hall' && hallList.map((datas,index) =><TouchableOpacity key={index} className='mb-2' onPress={() => router.push({pathname:'/(public)/product/[productId]',params:{productId: datas.Id}})}><ListCard DataList={datas} /></TouchableOpacity>)}
                {categoryid === 'Props' && propsList.map((datas,index) =><TouchableOpacity key={index} className='mb-2' onPress={() => router.push({pathname:'/(public)/product/[productId]',params:{productId: datas.Id}})}><ListCard DataList={datas} /></TouchableOpacity>)}
                {categoryid === 'Photos & Videos' && cameraList.map((datas,index) =><TouchableOpacity key={index} className='mb-2' onPress={() => router.push({pathname:'/(public)/product/[productId]',params:{productId: datas.Id}})}><ListCard DataList={datas} /></TouchableOpacity>)}
                {categoryid === 'Decorations' && decorationList.map((datas,index) =><TouchableOpacity key={index} className='mb-2' onPress={() => router.push({pathname:'/(public)/product/[productId]',params:{productId: datas.Id}})}><ListCard DataList={datas} /></TouchableOpacity>)}
                {categoryid === 'Music & DJ' && musicList.map((datas,index) =><TouchableOpacity key={index} className='mb-2' onPress={() => router.push({pathname:'/(public)/product/[productId]',params:{productId: datas.Id}})}><ListCard DataList={datas} /></TouchableOpacity>)}
                {categoryid === 'MUA' && muaList.map((datas,index) =><TouchableOpacity key={index} className='mb-2' onPress={() => router.push({pathname:'/(public)/product/[productId]',params:{productId: datas.Id}})}><ListCard DataList={datas} /></TouchableOpacity>)}
                {categoryid === 'Food & Beverages' && foodList.map((datas,index) =><TouchableOpacity key={index} className='mb-2' onPress={() => router.push({pathname:'/(public)/product/[productId]',params:{productId: datas.Id}})}><ListCard DataList={datas} /></TouchableOpacity>)}
                {categoryid === 'Invitations' && invitationList.map((datas,index) =><TouchableOpacity key={index} className='mb-2' onPress={() => router.push({pathname:'/(public)/product/[productId]',params:{productId: datas.Id}})}><ListCard DataList={datas} /></TouchableOpacity>)}
                {categoryid === 'Arificial Jewels' && jewelList.map((datas,index) =><TouchableOpacity key={index} className='mb-2' onPress={() => router.push({pathname:'/(public)/product/[productId]',params:{productId: datas.Id}})}><ListCard DataList={datas} /></TouchableOpacity>)}
                {categoryid === 'Vehical Convoie' && escortList.map((datas,index) =><TouchableOpacity key={index} className='mb-2' onPress={() => router.push({pathname:'/(public)/product/[productId]',params:{productId: datas.Id}})}><ListCard DataList={datas} /></TouchableOpacity>)}
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default CategoryId