import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField'
import OAuth from '@/components/OAuth';
import { router } from 'expo-router';
import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function LogIn() {
    const [form, setForm] = useState({
        Email: "shivaprasad266@gmail.com",
        Password: "9591499101"
      });
  return (
    <SafeAreaView className="flex-1 h-full items-center justify-between bg-white">
        <View className="flex p-5 w-full">
            <Text className='mt-5 text-4xl font-RobotoMedium'>Login</Text>
            <View className='flex mt-5 w-full'>
                <InputField
                label="Email"
                placeholder="Enter email"
                textContentType="telephoneNumber"
                containerStyle="bg-gray-200"
                value={form.Email}
                onChangeText={(value) => setForm({ ...form, Email: value })}
                 />
            </View>
            <View className='flex mb-5 w-full'>
                <InputField
                label="Enter Password"
                placeholder="Enter email"
                textContentType="password"
                containerStyle="bg-gray-200"
                value={form.Password}
                onChangeText={(value) => setForm({ ...form, Password: value })}
                 />
            </View>
            <View>
            <CustomButton
            title={"Login"}
            onPress={() => router.push("/(tabs)")}
            // classname="w-11/12 mt-10 mb-5"
          />
            </View>
        </View>
        <View className="flex pb-8 bg-white w-full px-5">
        <CustomButton title='Register' bgVariant='secondary' textVariant='secondary' classname='mt-6' onPress={() => router.push("/(auth)/register")} />
        {/* <CustomButton
        title="Register"
        className="mt-5 w-full shadow-none bg-white"
        bgVariant="outline"
        textVariant="secondary"
        onPress={() => router.push("/(auth)/register")}
      /> */}
        </View>
    </SafeAreaView>
  )
}

export default LogIn