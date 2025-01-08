import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField'
import OAuth from '@/components/OAuth';
import { router } from 'expo-router';
import React, { useState } from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function Register() {
    const [form, setForm] = useState({
        Email: "shivaprasad266@gmail.com",
        vName: "Shivaprasad KS",
        brandName: "Agustya Convention Hall",
        city: "Bellary",
        states: "Karnataka",
        country: "India",
        cc: "+91",
        phone: "9591499101",
        Category: "1",
        Password: "9591499101",
      });
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white w-full">
        <ScrollView className='flex w-full'>
            <View className="flex w-full p-5">
                <Text className='mt-5 text-4xl font-RobotoMedium'>Register</Text>
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
                <View className='flex mb-2 w-full'>
                    <InputField
                    label="Vendor's Name"
                    placeholder="Enter Vendor name"
                    // textContentType="text"
                    containerStyle="bg-gray-200"
                    value={form.vName}
                    onChangeText={(value) => setForm({ ...form, vName: value })}
                    />
                </View>
                <View className='flex mb-2 w-full'>
                    <InputField
                    label="Brand Name"
                    placeholder="Enter Brand name"
                    // textContentType="password"
                    containerStyle="bg-gray-200"
                    value={form.brandName}
                    onChangeText={(value) => setForm({ ...form, brandName: value })}
                    />
                </View>
                <View className='flex mb-2 w-full'>
                    <InputField
                    label="Country"
                    placeholder="Enter Country"
                    // textContentType="password"
                    containerStyle="bg-gray-200"
                    value={form.country}
                    onChangeText={(value) => setForm({ ...form, country: value })}
                    />
                </View>
                <View className='flex mb-2 w-full'>
                    <InputField
                    label="State"
                    placeholder="Enter State"
                    // textContentType="password"
                    containerStyle="bg-gray-200"
                    value={form.states}
                    onChangeText={(value) => setForm({ ...form, states: value })}
                    />
                </View>
                <View className='flex flex-row mb-2 w-full items-end'>
                    <View className='pr-2 w-[85px]'>
                        <InputField
                        label="Phone"
                        containerStyle="bg-gray-200 mr-1"
                        value={form.cc}
                        onChangeText={(value) => setForm({ ...form, cc: value })}
                        />
                    </View>
                    <View className='w-3/4'>
                        <InputField
                        label=""
                        placeholder="Enter password"
                        textContentType="password"
                        containerStyle="bg-gray-200"
                        value={form.phone}
                        onChangeText={(value) => setForm({ ...form, phone: value })}
                        />
                    </View>
                </View>
                <View>
                <CustomButton
                title={"Register"}
                onPress={() => router.push("/(auth)/login")}
                // classname="w-11/12 mt-10 mb-2"
            />
                </View>
            </View>
        </ScrollView>
        {/* <View className="flex pb-8 bg-white">
          <OAuth />
        </View> */}
    </SafeAreaView>
  )
}

export default Register