import { Entypo, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type BusinessProps = { businessType: any };

const Amenities = [];

const Hall = ({ businessType }: BusinessProps) => {
  return (
    <View className="py-5">
      <View className="px-5 flex mb-4">
        <View className="flex flex-row items-center mb-4">
          <Text className="text-xl font-bold grow">Description</Text>
          <TouchableOpacity className="w-[40px] h-[40px] items-center justify-center bg-[#FFE8D6] rounded-lg">
            <Entypo name="pencil" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <View className="p-4 w-full flex flex-row border-[1px] border-gray-300 rounded-lg items-center">
          <Text className="text-base font-normal">{businessType.Descp}</Text>
        </View>
      </View>
      <View className="px-5 flex mb-4">
        <View className="flex flex-row items-center mb-4">
          <Text className="text-xl font-bold grow">Location</Text>
          <TouchableOpacity className="w-[40px] h-[40px] items-center justify-center bg-[#FFE8D6] rounded-lg">
            <Entypo name="pencil" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <View className="p-4 w-full flex flex-row border-[1px] border-gray-300 rounded-lg items-center">
          {/* <Image source={images.map} className='w-20 h-20 object-contain' /> */}
          <Text className="text-base font-normal">{businessType.Address}</Text>
        </View>
      </View>
      <View className="px-5 flex mb-4">
        <View className="flex flex-row items-center mb-4">
          <Text className="text-xl font-bold grow">Amenities</Text>
          <TouchableOpacity className="w-[40px] h-[40px] items-center justify-center bg-[#FFE8D6] rounded-lg">
            <Entypo name="plus" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <View className="p-4 w-full flex border-[1px] border-gray-300 rounded-lg">
          <View className="flex flex-row mb-2">
            <View className="flex flex-row grow">
              <Entypo name="dot-single" size={24} color="black" />
              <Text className="text-base font-normal">Wifi</Text>
            </View>
            <TouchableOpacity className="p-1 bg-gray-300 rounded-full">
              <MaterialIcons name="delete" size={16} color="black" />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row mb-2">
            <View className="flex flex-row grow">
              <Entypo name="dot-single" size={24} color="black" />
              <Text className="text-base font-normal">AC</Text>
            </View>
            <TouchableOpacity className="p-1 bg-gray-300 rounded-full">
              <MaterialIcons name="delete" size={16} color="black" />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row mb-2">
            <View className="flex flex-row grow">
              <Entypo name="dot-single" size={24} color="black" />
              <Text className="text-base font-normal">Parking</Text>
            </View>
            <TouchableOpacity className="p-1 bg-gray-300 rounded-full">
              <MaterialIcons name="delete" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="px-5 flex mb-4">
        <View className="flex flex-row items-center mb-4">
          <Text className="text-xl font-bold grow">Halls</Text>
          <TouchableOpacity className="w-[40px] h-[40px] items-center justify-center bg-[#FFE8D6] rounded-lg">
            <Entypo name="plus" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <View className="p-4 w-full flex border-[1px] border-gray-300 rounded-lg">
          <View className="flex flex-row mb-2">
            <View className="flex flex-row grow">
              <Entypo name="dot-single" size={24} color="black" />
              <Text className="text-base font-bold"> Milan One</Text>
              <Text className="text-base font-normal">, Sitting 200</Text>
              <Text className="text-base font-normal">, Floating 300</Text>
            </View>
            <TouchableOpacity className="p-1 bg-gray-300 rounded-full">
              <MaterialIcons name="delete" size={16} color="black" />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row mb-2">
            <View className="flex flex-row grow">
              <Entypo name="dot-single" size={24} color="black" />
              <Text className="text-base font-bold"> Milan Two</Text>
              <Text className="text-base font-normal">, Sitting 200</Text>
              <Text className="text-base font-normal">, Floating 300</Text>
            </View>
            <TouchableOpacity className="p-1 bg-gray-300 rounded-full">
              <MaterialIcons name="delete" size={16} color="black" />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row mb-2">
            <View className="flex flex-row grow">
              <Entypo name="dot-single" size={24} color="black" />
              <Text className="text-base font-bold"> Milan Full</Text>
              <Text className="text-base font-normal">, Sitting 400</Text>
              <Text className="text-base font-normal">, Floating 600</Text>
            </View>
            <TouchableOpacity className="p-1 bg-gray-300 rounded-full">
              <MaterialIcons name="delete" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="px-5 flex mb-4">
        <View className="flex flex-row items-center mb-4">
          <Text className="text-xl font-bold grow">Decoration</Text>
          <TouchableOpacity className="w-[40px] h-[40px] items-center justify-center bg-[#FFE8D6] rounded-lg">
            <Entypo name="pencil" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <View className="p-4 w-full flex border-[1px] border-gray-300 rounded-lg items-center">
        <View className="flex flex-row mb-2">
            <View className="flex flex-row grow">
              <Entypo name="dot-single" size={24} color="black" />
              <Text className="text-base font-normal">Parking</Text>
            </View>
            <TouchableOpacity className="p-1 bg-gray-300 rounded-full">
              <MaterialIcons name="delete" size={16} color="black" />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row mb-2">
            <View className="flex flex-row grow">
              <Entypo name="dot-single" size={24} color="black" />
              <Text className="text-base font-normal">Parking</Text>
            </View>
            <TouchableOpacity className="p-1 bg-gray-300 rounded-full">
              <MaterialIcons name="delete" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="px-5 flex mb-4">
        <View className="flex flex-row items-center mb-4">
          <Text className="text-xl font-bold grow">Property Rules and Information</Text>
          <TouchableOpacity className="w-[40px] h-[40px] items-center justify-center bg-[#FFE8D6] rounded-lg">
            <Entypo name="pencil" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <View className="p-4 w-full flex border-[1px] border-gray-300 rounded-lg items-center">
          <View className="flex flex-row mb-2">
            <View className="flex flex-row grow">
              <Entypo name="dot-single" size={24} color="black" />
              <Text className="text-base font-normal">Parking</Text>
            </View>
            <TouchableOpacity className="p-1 bg-gray-300 rounded-full">
              <MaterialIcons name="delete" size={16} color="black" />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row mb-2">
            <View className="flex flex-row grow">
              <Entypo name="dot-single" size={24} color="black" />
              <Text className="text-base font-normal">Parking</Text>
            </View>
            <TouchableOpacity className="p-1 bg-gray-300 rounded-full">
              <MaterialIcons name="delete" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <View className="">
        <Text className="text-xl">{JSON.stringify(businessType)}</Text>
      </View> */}
    </View>
  );
};

export default Hall;
