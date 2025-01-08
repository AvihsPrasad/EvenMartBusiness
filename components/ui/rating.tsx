import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const Rating = () => {
  return (
    <>
    <View className="flex flex-row mb-3">
        <FontAwesome name="star" size={44} color="#f98600" />
        <View className="flex pl-5">
          <Text className="font-bold text-2xl">4.4 rating</Text>
          <Text className="font-light text-xs">based on 321 reviwes</Text>
        </View>
      </View>
      <View className="flex">
        <View className="flex flex-row items-center mb-1">
          <Text className="pr-2 font-bold text-base">5</Text>
          <View className="grow  bg-gray-200 h-3 rounded-2xl">
            <View className="w-[75%] bg-[#f98600] h-3 rounded-2xl"></View>
          </View>
          <Text className="pl-3 font-bold text-base">75%</Text>
        </View>
        <View className="flex flex-row items-center mb-1">
          <Text className="pr-2 font-bold text-base">4</Text>
          <View className="grow  bg-gray-200 h-3 rounded-2xl">
            <View className="w-[60%] bg-[#f98600] h-3 rounded-2xl"></View>
          </View>
          <Text className="pl-3 font-bold text-base">60%</Text>
        </View>
        <View className="flex flex-row items-center mb-1">
          <Text className="pr-2 font-bold text-base">3</Text>
          <View className="grow  bg-gray-200 h-3 rounded-2xl">
            <View className="w-[30%] bg-[#f98600] h-3 rounded-2xl"></View>
          </View>
          <Text className="pl-3 font-bold text-base">30%</Text>
        </View>
        <View className="flex flex-row items-center mb-1">
          <Text className="pr-2 font-bold text-base">2</Text>
          <View className="grow  bg-gray-200 h-3 rounded-2xl">
            <View className="w-[47%] bg-[#f98600] h-3 rounded-2xl"></View>
          </View>
          <Text className="pl-3 font-bold text-base">47%</Text>
        </View>
        <View className="flex flex-row items-center ">
          <Text className="pr-2 font-bold text-base">1</Text>
          <View className="grow  bg-gray-200 h-3 rounded-2xl">
            <View className="w-[10%] bg-[#f98600] h-3 rounded-2xl"></View>
          </View>
          <Text className="pl-3 font-bold text-base">10%</Text>
        </View>
      </View>
    </>
  );
};

export default Rating;
