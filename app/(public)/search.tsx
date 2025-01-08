import CustomHeader from '@/components/Header'
import InputField from '@/components/InputField'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function Search() {
    const [form, setForm] = useState({searchtext: "",});
    const [backArrowEnable, setBackArrowEnable] = useState(false);
  return (
    <>
        <SafeAreaView>
            {/* <CustomHeader
            title="Search"
            // backArrow={true}
            onBack={() => router.back()}
            /> */}
            <ScrollView className="flex bg-[#5E3023] px-3 pt-4">
            {/* <View className=""> */}
                <View className="flex flex-row justify-center px-4">
                    <View className="flex pl-2 items-center rounded-full bg-[#5E3023] mt-1">
                        <TouchableOpacity  onPress={() => router.back()} className="w-[45px] h-[45px] mr-2 p-3 bg-[#FFE8D6] rounded-lg"><AntDesign name="arrowleft" size={20} color="#fff" /></TouchableOpacity>
                    </View>
                    <View className='w-11/12'>
                        <InputField 
                            placeholder='Search'
                            value={form.searchtext} 
                            onChangeText={(value) => setForm({...form, searchtext: value})} 
                            onFocus={() => setBackArrowEnable(!backArrowEnable)} 
                            icon={<Ionicons name={'search' } 
                            color={'#979dac'} style={{fontSize:20,marginLeft: 15}}/>
                            } />
                    </View>
                </View>
            {/* </View> */}
            </ScrollView>
        </SafeAreaView>
    </>
  )
}

export default Search