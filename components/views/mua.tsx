import { Entypo, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ReactNativeModal from "react-native-modal";
import InputField from "../InputField";
import CustomButton from "../CustomButton";
import DropdownComponent from "../dropdown";
import { Catdata } from "@/constants";

type ItemProps = { data: any };
type BusinessProps = { businessType: any };

const Food = ({ data }: ItemProps) => (
  <View className="w-full">
    {/* <Text>{JSON.stringify(data)}</Text> */}
    <InputField label="FoodType" placeholder="Enter" textContentType="telephoneNumber" containerStyle="bg-gray-200" value={''}
                    // onChangeText={(value) => setForm({ ...form, Email: value })}
        />
  </View>
);
const FoodList = [
  { label: 'North Indian Plate', value: '1' },
  { label: 'South Indian Plate', value: '2' },
];

const Mua = ({ businessType }: BusinessProps) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [functionType, setFunctionType] = useState({ type: "", data: {} });
  const [childValue, setChildValue] = useState('');
  const dropdownData = (data?: any) =>{
    setChildValue(data)
  }
  
const FoodItems = ({ data }: ItemProps) => (
  <View className="w-full">
    <Text>{JSON.stringify(childValue)}</Text>
    <DropdownComponent data={FoodList} value={childValue} dropdownDataChild={dropdownData} />
    <InputField label="Add Items" placeholder="Enter" textContentType="telephoneNumber" containerStyle="bg-gray-200" value={''}
                    // onChangeText={(value) => setForm({ ...form, Email: value })}
        />
  </View>
);
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
          <Text className="text-xl font-bold grow">Price & Packages</Text>
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
      {/* <Text>{JSON.stringify(functionType)}</Text> */}
      <ReactNativeModal isVisible={showSuccessModal}>
        <View className="bg-white px-7 py-9 rounded-2xl">
          {functionType.type === "food" && (<Food data={functionType.data} />)}
          {functionType.type === "foodItem" && (<FoodItems data={functionType.data} />)}
          <CustomButton title="OK" onPress={() => setShowSuccessModal(false)} className="mt-5" />
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default Mua;
