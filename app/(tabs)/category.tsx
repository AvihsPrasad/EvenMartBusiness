import CustomHeader from '@/components/Header'
import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { categoryList } from '@/constants/index'
// import Icon from '@/components/icon'
// import { getCategories, getDBVersion } from '../(api)/cat+api'
// import { fetchAPI } from '@/lib/fetch'
import CustomButton from '@/components/CustomButton'
import { Feather } from '@expo/vector-icons'

const requests =[
  {id:'1',title:'Hall',from:'Ganesh ks',createdOn:'17-Sep-2023',status:'pending',Brand:'Agustya Function hall',fromDate: '17-Sep-2023 08:00 AM',toDate:'17-Sep-2023 08:00 AM',},
  {id:'2',title:'Photographer',from:'Harshitha DS',createdOn:'17-Sep-2023',status:'rejected',Brand:'Machani clicks',fromDate: '17-Sep-2023 08:00 AM',toDate:'17-Sep-2023 08:00 AM',},
  {id:'3',title:'Catering',from:'Vaibhav DS',createdOn:'17-Sep-2023',status:'Accepted',Brand:'Anapoorna Catering',fromDate: '17-Sep-2023 08:00 AM',toDate:'17-Sep-2023 08:00 AM',},
  {id:'2',title:'Photographer',from:'Harshitha DS',createdOn:'17-Sep-2023',status:'rejected',Brand:'Machani clicks',fromDate: '17-Sep-2023 08:00 AM',toDate:'17-Sep-2023 08:00 AM',},
  {id:'3',title:'Catering',from:'Vaibhav DS',createdOn:'17-Sep-2023',status:'Accepted',Brand:'Anapoorna Catering',fromDate: '17-Sep-2023 08:00 AM',toDate:'17-Sep-2023 08:00 AM',},
  {id:'2',title:'Photographer',from:'Harshitha DS',createdOn:'17-Sep-2023',status:'rejected',Brand:'Machani clicks',fromDate: '17-Sep-2023 08:00 AM',toDate:'17-Sep-2023 08:00 AM',},
  {id:'3',title:'Catering',from:'Vaibhav DS',createdOn:'17-Sep-2023',status:'Accepted',Brand:'Anapoorna Catering',fromDate: '17-Sep-2023 08:00 AM',toDate:'17-Sep-2023 08:00 AM',},
  {id:'2',title:'Photographer',from:'Harshitha DS',createdOn:'17-Sep-2023',status:'rejected',Brand:'Machani clicks',fromDate: '17-Sep-2023 08:00 AM',toDate:'17-Sep-2023 08:00 AM',},
  {id:'3',title:'Catering',from:'Vaibhav DS',createdOn:'17-Sep-2023',status:'Accepted',Brand:'Anapoorna Catering',fromDate: '17-Sep-2023 08:00 AM',toDate:'17-Sep-2023 08:00 AM',},
  {id:'3',title:'Catering',from:'Vaibhav DS',createdOn:'17-Sep-2023',status:'Accepted',Brand:'Anapoorna Catering',fromDate: '17-Sep-2023 08:00 AM',toDate:'17-Sep-2023 08:00 AM',},
  {id:'3',title:'Catering',from:'Vaibhav DS',createdOn:'17-Sep-2023',status:'Accepted',Brand:'Anapoorna Catering',fromDate: '17-Sep-2023 08:00 AM',toDate:'17-Sep-2023 08:00 AM',},
  // {id:'1',title:'',from:'',createdOn:'',status:'',Brand:''},
  // {id:'1',title:'',from:'',createdOn:'',status:'',Brand:''},
  // {id:'1',title:'',from:'',createdOn:'',status:'',Brand:''},
  // {id:'1',title:'',from:'',createdOn:'',status:'',Brand:''},
]

function Category() {
  return (
    <>
      <SafeAreaView>
        <CustomHeader title="Requests" home={false} backArrow={true} onBack={() => router.back()}/>
        <ScrollView className='bg-[#efefef] h-screen'>
          <View className='flex mb-28 w-full'>
              <View className='px-5 py-3 flex flex-row overflow-x-scroll w-full'>
                <TouchableOpacity className='mr-2'>
                  <View className='px-4 py-1 rounded-full border-[0.5px] border-gray-400 bg-white'>
                    <Text className='text-base'>All (324)</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className='mr-2'>
                  <View className='px-4 py-1 rounded-full border-[0.5px] border-gray-400 bg-white'>
                    <Text className='text-base'>Pendings (324)</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className='mr-2'>
                  <View className='px-4 py-1 rounded-full border-[0.5px] border-gray-400 bg-white'>
                    <Text className='text-base'>Rejected (324)</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View className='px-4 py-1 rounded-full border-[0.5px] border-gray-400 bg-white'>
                    <Text className='text-base'>Accepted (324)</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {requests && requests.map((data,index)=>(<View className='flex' key={index}>
                <TouchableOpacity className="mb-0">
                  <View className="flex flex-row bg-white p-3 border-b-[0.5px] border-gray-300">
                      <View className={`w-[45px] h-[45px] justify-center items-center rounded-full ${data.status === 'pending'? 'bg-sky-300': data.status === 'Accepted'? 'bg-green-300':'bg-red-300'}`}>
                          <Feather name="package" size={20} color="black" />
                      </View>
                      <View className="pl-5 grow">
                        <View className='flex flex-row items-center'>
                          <View className='flex flex-row grow items-center'>
                            <Text className="font-semibold text-base">{data.title} - </Text>
                            <Text className="font-normal text-sm">{data.from}</Text>
                          </View>
                          <Text className={`font-normal text-xs text-gray-500`}>{data.createdOn}</Text>
                        </View>
                        <View className='flex flex-row items-center mb-0'>
                          <Text className="font-normal text-xs grow text-[#aaa9a9]">{data.Brand}</Text>
                          <View className='flex justify-center items-center'>
                            <Text className="font-semibold text-xs text-gray-400 w-full text-center">{data.status}</Text>
                          </View>
                        </View>
                      </View>
                  </View>
                </TouchableOpacity>
              </View>))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Category