import CustomButton from "@/components/CustomButton";
import CustomHeader from "@/components/Header";
import InputField from "@/components/InputField";
import { Entypo, Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

const ProductDetails = () => {
  const { productDetails } = useLocalSearchParams();
  const [form, setForm] = useState({ searchtext: "" });
  return (
    <SafeAreaView>
      <ScrollView className="mb-[75px]">
      <CustomHeader
        title="Select"
        home={false}
        backArrow={true}
        onBack={() => router.back()}
      />
        <View className="p-5">
          <View className="bg-white p-5 rounded-lg mb-3">
            <Text className="text-lg font-bold">Select Date & Time</Text>
            <View className="flex flex-row w-full gap-2">
              <View className="w-[48%]">
                <InputField
                  placeholder="From"
                  value={form.searchtext}
                  onChangeText={(value) =>
                    setForm({ ...form, searchtext: value })
                  }
                  icon={
                    <Entypo
                      name={"calendar"}
                      color={"#979dac"}
                      style={{ fontSize: 20, marginLeft: 15 }}
                    />
                  }
                />
              </View>
              <View className="w-[48%]">
                <InputField
                  placeholder="to"
                  value={form.searchtext}
                  onChangeText={(value) =>
                    setForm({ ...form, searchtext: value })
                  }
                  icon={
                    <Entypo
                      name={"calendar"}
                      color={"#979dac"}
                      style={{ fontSize: 20, marginLeft: 15 }}
                    />
                  }
                />
              </View>
            </View>
          </View>
          <View className="bg-white p-5 rounded-lg mb-3">
            <Text className="text-lg font-bold">Hall</Text>
            <View className="w-full">
              <InputField
                placeholder="Select hall "
                value={'Milan 1'}
                onChangeText={(value) => setForm({ ...form, searchtext: value })}
                icon={
                  <Feather
                    name={"user"}
                    color={"#979dac"}
                    style={{ fontSize: 20, marginLeft: 15 }}
                  />
                }
              />
            </View>
          </View>
          <View className="bg-white p-5 rounded-lg mb-3">
            <View>
              <Text className="text-lg font-bold">Food</Text>
              <View className="w-full">
                <InputField
                  placeholder="Select Food "
                  value={'South Indian'}
                  onChangeText={(value) => setForm({ ...form, searchtext: value })}
                  icon={
                    <Feather
                      name={"user"}
                      color={"#979dac"}
                      style={{ fontSize: 20, marginLeft: 15 }}
                    />
                  }
                />
              </View>
            </View>
            <View>
              <Text className="text-lg font-bold">Capacity</Text>
              <View className="w-full">
                <InputField
                  placeholder="Select capacity"
                  value={'250'}
                  onChangeText={(value) => setForm({ ...form, searchtext: value })}
                  icon={
                    <Feather
                      name={"user"}
                      color={"#979dac"}
                      style={{ fontSize: 20, marginLeft: 15 }}
                    />
                  }
                />
              </View>
            </View>
          </View>
          <View className="bg-white p-5 rounded-lg mb-3">
            <Text className="text-lg font-bold">Decorations</Text>
            <View className='flex flex-row items-center'><Entypo name="dot-single" size={24} color="black" /><Text>Stage setup decorations are all done by our team.</Text></View>
          </View>
        </View>
      </ScrollView>
      <View className='flex flex-row absolute z-10 mt-2 py-3 bottom-0 left-0 w-full bg-[#FFE8D6]'>
          {/* <View className='grow px-5'>
            <Text className='text-xl font-medium'>8,000</Text>
          </View> */}
          <View className='flex-row gap-2 px-5 w-full'>
            <CustomButton title={"Generate Price"} onPress={() => router.push({pathname:'/(public)/price/[price]',params:{price: '' + productDetails}})} classname="w-full"/>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
