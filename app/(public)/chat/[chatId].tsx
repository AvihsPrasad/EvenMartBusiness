import CustomButton from "@/components/CustomButton";
import CustomHeader from "@/components/Header";
import InputField from "@/components/InputField";
import { images } from "@/constants";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

const ChatId = () => {
  const { chatId } = useLocalSearchParams();
  // const [form, setForm] = useState({ searchtext: "" });
  return (
    <SafeAreaView>
      <View className="flex h-full">
        <View className="">
          <CustomHeader title={`${chatId}`} home={false} backArrow={true} onBack={() => router.back()}/>
        </View>
        <ScrollView className="p-5 h-full grow">
          <View className="mb-3 w-full">
              <View className="flex flex-row bg-white rounded-lg px-3 py-2 w-[80%]">
                  <Text className="grow text-sm max-w-[90%]">Note: Decoration and extra usage of plates.</Text>
                  <View className="flex justify-end items-end text-[#aaa9a9]"><Text className="text-xs ">9:00 am</Text></View>
              </View>
          </View>
          <View className="flex items-end mb-3 w-full">
              <View className="flex bg-[#FFE8D6] rounded-lg px-3 py-2 w-[80%]">
                <Text className="grow text-sm max-w-[90%]">Note: Decoration and extra usage of plates.</Text>
                <View className="flex justify-end items-end text-[#aaa9a9]"><Text className="text-xs ">9:00 am</Text></View>
              </View>
          </View>
          <View className="mb-3 w-full">
              <View className="flex bg-white rounded-lg px-3 py-2 w-[80%]">
                <Text className="grow text-sm max-w-[90%]">Note: Decoration and extra usage of plates.</Text>
                <View className="flex justify-end items-end text-[#aaa9a9]"><Text className="text-xs ">9:00 am</Text></View>
              </View>
          </View>
          <View className="mb-3 w-full">
              <View className="flex bg-white rounded-lg px-3 py-2 w-[80%]">
                <Image source={images.map} className='w-full h-40 object-contain mb-2' />
                <View className="flex justify-end items-end text-[#aaa9a9]"><Text className="text-xs ">9:00 am</Text></View>
              </View>
          </View>
          <View className="mb-3 w-full">
              <View className="flex bg-white rounded-lg px-3 py-2 w-[80%]">
                <Image source={images.map} className='w-full h-40 object-contain mb-2' />
                <View className="flex justify-end items-end text-[#aaa9a9]"><Text className="text-xs ">9:00 am</Text></View>
              </View>
          </View>
          <View className="mb-3 w-full">
              <View className="flex bg-white rounded-lg px-3 py-2 w-[80%]">
                <Image source={images.map} className='w-full h-40 object-contain mb-2' />
                <View className="flex justify-end items-end text-[#aaa9a9]"><Text className="text-xs ">9:00 am</Text></View>
              </View>
          </View>
          <View className="mb-10 w-full">
              <View className="flex bg-white rounded-lg px-3 py-2 w-[80%]">
                <Image source={images.map} className='w-full h-40 object-contain mb-2' />
                <View className="flex justify-end items-end text-[#aaa9a9]"><Text className="text-xs ">9:00 am</Text></View>
              </View>
          </View>
        </ScrollView>
        <View className='flex flex-row z-10 mt-2 py-3 w-full bg-[#fff]'>
          <View className='flex-row gap-x-2 px-5 w-full items-center'>
            <View className="flex grow w-3/4 pt-3"><InputField placeholder='Message' inputStyle=" h-[30px] text-[14px] rounded-sm" /></View>
            <CustomButton title={"Send"} className="w-[80px] h-[30px] text-sm p-0"/>
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default ChatId;
