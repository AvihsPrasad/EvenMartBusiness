import CustomButton from "@/components/CustomButton";
import CustomHeader from "@/components/Header";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

const Price = () => {
  const { price } = useLocalSearchParams();
  const [form, setForm] = useState({ searchtext: "" });
  return (
    <SafeAreaView>
      <ScrollView className="mb-[75px] h-[90%]">
      <CustomHeader
        title="Price"
        home={false}
        backArrow={true}
        onBack={() => router.back()}
      />
        <View className="p-5">
            <View className="flex bg-white rounded-lg p-4 w-full">
                <Text className="text-xl font-bold">Order Summary</Text>
                <View className="mb-5">
                    <View className="flex flex-row">
                        <Text className="text-lg font-bold">Hall Name :</Text>
                        <Text className="text-lg "> Milan 1</Text>
                        <Text className="grow text-lg text-right">8,000</Text>
                    </View>
                    <View className="flex flex-row">
                        <Text className="text-lg font-bold">Food :</Text>
                        <Text className="text-lg "> South Indian for 250 plate</Text>
                        <Text className="grow text-lg text-right">{250*390}</Text>
                    </View>
                </View>
                <Text className="text-xl font-bold">Advance amount:</Text>
                <View className="flex flex-row">
                    <Text className="text-lg">Advance amount:</Text>
                    <Text className="grow text-lg text-right">20,000</Text>
                </View>
                <Text className="mt-5 text-base">Note: Decoration and extra usage of plates, price will updated at the end during full and final settelment.</Text>
            </View>
        </View>
      </ScrollView>
      <View className='flex flex-row absolute z-10 mt-2 py-3 bottom-0 left-0 w-full bg-[#FFE8D6]'>
          {/* <View className='grow px-5'>
            <Text className='text-xl font-medium'>8,000</Text>
          </View> */}
          <View className='flex-row gap-2 px-5 w-full'>
            <CustomButton title={"Confirm Payment"} classname="w-full"/>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default Price;
