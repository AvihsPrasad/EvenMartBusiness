import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import CustomButton from './CustomButton'
import { router } from 'expo-router'
// import { categoryList } from '@/constants'
import { useFetch } from '@/lib/fetch'

const ListCard = (DataList: any) => {
    const [catType,setCatType] = useState('');
    const { data: categoriesDb, loading, error } = useFetch<any[]>("/(api)/getcat");
    // console.log(categoriesDb)
    let changeDropData = categoriesDb?.map((item?) => {
        if (DataList?.DataList?.cat_id == item?.id) {
            return item?.title;
        }
      })
    useEffect(()=>{
        // categoryList.map((data) => {
        //     if(DataList?.DataList?.type == data?.value){
        //         setCatType(data?.CategoryName || '')
        //     }
        // })
    },[])
  return (
    <View className='bg-white rounded-lg'>
        <View className='flex absolute top-3 right-3 z-10'>
            <View className="w-[35px] h-[35px] justify-center items-center rounded-full bg-gray-100">
                <TouchableOpacity  onPress={() => router.back()} className="justify-center items-center"><MaterialIcons name="delete" size={20} color="black" /></TouchableOpacity>
            </View>
        </View>
        {/* <View className='w-full h-[180px] bg-slate-500 justify-center items-center rounded-t-lg rounded-tr-lg'>
            <Text className='text-gray-300'>{changeDropData}</Text>
        </View> */}
        <View className='p-4'>
            <View className='flex flex-row border-0 border-white'>
                <Text className='grow font-bold text-lg text-ellipsis overflow-hidden w-10/12'>{DataList?.DataList?.brandname}</Text>
                {/* <View className='bg-green-600 px-3 py-1 rounded-[4px] flex flex-row items-center h-8 mr-4'>
                    <Text className='text-white font-RobotoMedium text-sm mr-2'>{DataList?.DataList?.Rating}</Text>
                    <AntDesign name="star" size={18} color="#fff" />
                </View> */}
            </View>
            <View>
                <Text className='text-sm text-gray-500'>{DataList?.DataList?.description || 'NA'}</Text>
            </View>
        </View>
    </View>
  )
}

export default ListCard