import CustomButton from '@/components/CustomButton'
import InputField from '@/components/InputField'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function Otp() {
  const [form, setForm] = useState(['2','2','3','5'])
  const[countDown, setCountDown] = useState(30);
  useEffect(() => {
    setTimeout(()=>
      {
        if (countDown == 0){
          setCountDown(30)
        } else {
          setCountDown(countDown -1)
        }
      }, 1000)
  })
  return (
    <SafeAreaView>
        <View className="h-full p-5">
            <Text className='mt-10 text-3xl font-RobotoMedium'>Enter Mobile number</Text>
            <View className=' flex flex-row mt-5 mb-5'>
              {form.map((d,i) => (
                <TextInput
                key={i}
                textContentType="oneTimeCode"
                className="bg-gray-200 w-14 h-14 border-2 text-center mr-5 rounded-lg border-gray-400 text-xl"
                value={form[i]}
                // onChangeText={(value) => setForm(form[i] = value )}
                 />
              ))}
            </View>
            <View className='flex justify-center items-center'> 
              <Text className='text-center my-3'>valid till {countDown} s</Text>
            </View>
            <View>
            <CustomButton
            title={"Verify OTP"}
            onPress={() => router.push("/(tabs)")}
            // classname="w-11/12 mt-10 mb-5"
          />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Otp