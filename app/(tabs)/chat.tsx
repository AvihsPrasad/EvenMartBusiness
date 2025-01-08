import CustomHeader from '@/components/Header'
import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { categoryList } from '@/constants/index'
// import Icon from '@/components/icon'
// import { getCategories, getDBVersion } from '../(api)/cat+api'
import { fetchAPI } from '@/lib/fetch'
import CustomButton from '@/components/CustomButton'
import { Feather, FontAwesome } from '@expo/vector-icons'
import InputField from '@/components/InputField'

const chatUsers = [
    {id:'CHAT0001',userName: 'Shivaprasad KS', updatedOn: '17-Sep-2023 08:00 AM', seen: 'yes'},
    {id:'CHAT0002',userName: 'Jashvika KS', updatedOn: '03-Dec-2025 10:00 AM', seen: 'no'},
    {id:'CHAT0003',userName: 'Harshitha DS', updatedOn: '17-Oct-2024 02:00 PM', seen: 'no'},
    {id:'CHAT0004',userName: 'Srinivasulu K', updatedOn: '13-Mar-2024 12:00 PM', seen: 'yes'},
    {id:'CHAT0004',userName: 'Srinivasulu K', updatedOn: '13-Mar-2024 12:00 PM', seen: 'yes'},
    {id:'CHAT0004',userName: 'Srinivasulu K', updatedOn: '13-Mar-2024 12:00 PM', seen: 'no'},
    {id:'CHAT0004',userName: 'Srinivasulu K', updatedOn: '13-Mar-2024 12:00 PM', seen: 'yes'},
    {id:'CHAT0004',userName: 'Srinivasulu K', updatedOn: '13-Mar-2024 12:00 PM', seen: 'yes'},
    {id:'CHAT0004',userName: 'Srinivasulu K', updatedOn: '13-Mar-2024 12:00 PM', seen: 'yes'},
    {id:'CHAT0004',userName: 'Srinivasulu K', updatedOn: '13-Mar-2024 12:00 PM', seen: 'yes'},
    {id:'CHAT0004',userName: 'Srinivasulu K', updatedOn: '13-Mar-2024 12:00 PM', seen: 'yes'},
    {id:'CHAT0004',userName: 'Srinivasulu K', updatedOn: '13-Mar-2024 12:00 PM', seen: 'yes'},
]

function Chat() {
  return (
    <>
      <SafeAreaView>
        <CustomHeader title="Chat" home={false} backArrow={true} onBack={() => router.back()}/>
        <ScrollView className=' bg-[#efefef] h-screen'>
          <View className='flex w-full pb-28'>
            <View className='flex px-5 pt-5 bg-white w-full border-b-[0.5px] border-gray-300'>
                <InputField placeholder='Search user' inputStyle=" h-[35px] text-[14px] rounded-sm" containerStyle='border-[0.5px] border-gray-300'/>
            </View>
              {/* <View className='flex flex-row overflow-x-auto w-full'> */}
                {chatUsers && chatUsers.map((data,index) =>
                    (<TouchableOpacity key={index} className="w-full" onPress={() => router.push({pathname:'/(public)/chat/[chatId]',params:{chatId: '' + data.userName}})}>
                        <View className="flex flex-row bg-white p-3">
                            <View className="w-[45px] h-[45px] justify-center items-center rounded-full bg-[#ededed]">
                                <FontAwesome name="user" size={24} color="black" />
                            </View>
                            <View className="pl-5 grow">
                                <View className='flex flex-row items-center mb-1'>
                                    <Text className="font-semibold text-lg grow">{data.userName}</Text>
                                    <Text className={`font-normal text-xs ${data.seen == 'no'? 'text-green-500': 'text-gray-500'}`}>{data.updatedOn}</Text>
                                </View>
                                <View className='flex flex-row items-center mb-1'>
                                    <Text className="font-normal text-xs grow text-[#aaa9a9]">Package updated with ur Items as requested</Text>
                                    {data.seen =='no' && <View className='flex bg-green-500 rounded-full w-[20px] h-[20px] justify-center items-center'>
                                        <Text className="font-semibold text-xs text-white w-full text-center">1</Text>
                                    </View>}
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>)
                )}
              {/* </View> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Chat