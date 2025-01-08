import { HeaderProps } from "@/types/type";
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, Text, View, Image } from "react-native";
import InputField from "./InputField";
import React from "react";


const CustomHeader = ({
    onSearch,
    onWishList,
    onNotification,
    onAddBusiness,
    onBack,
    title,
    user,
    userImage,
    backArrow = false,
    home = false,
    notification = false,
    add = false,
    ...props
  }: HeaderProps) => {
  return (<>
    <View className="flex flex-row px-5 py-3 bg-[#5E3023] shadow-lg h-[60px] relative items-center">
        {home && <View className="grow justify-center">
            <View className="flex flex-row items-center">
                    <View>
                        <Text className="text-lg font-RobotoMedium pl-3 m-0 text-white">Hi, {user ? user : 'Shivaprasad KS'}</Text>
                        <View className="flex flex-row mt-1 pl-3">
                            <View className="mr-2"><FontAwesome6 name="location-dot" size={24} color="#FFE8D6" /></View>
                            <Text className="text-base font-Roboto m-0 text-white">{user ? user : 'location'}</Text>
                        </View>
                    </View>
                </View>
            </View>}
            {!home && title && 
            <>
            {backArrow && <View className="flex flex-row absolute top-2 left-4 pl-2 w-[40px] h-[40px] justify-center items-center rounded-full bg-[#FFE8D6]">
                <TouchableOpacity  onPress={() => router.back()} className="mr-2"><AntDesign name="arrowleft" size={20} color="#000" /></TouchableOpacity>
            </View>}
            <View className="grow flex flex-row justify-center items-center">
                <Text className="text-xl font-RobotoMedium text-white tracking-widest">{title}</Text>
            </View>
            </>}
        {(home || notification) && <View className={`justify-center ${notification ? 'absolute top-2 right-5': ''}`}>
            <View className="flex flex-row items-end justify-end ">
                <TouchableOpacity  onPress={onNotification} className="px-3 py-3 bg-[#FFE8D6] rounded-lg"><FontAwesome name="bell" size={18} color="#000" /></TouchableOpacity>
            </View>
        </View>}
        {add && <View className="justify-center">
            <View className="flex flex-row items-end justify-end">
                <TouchableOpacity  onPress={onAddBusiness} className="w-[40px] h-[40px] items-center justify-center bg-[#FFE8D6] rounded-lg"><Entypo name="plus" size={26} color="#000" /></TouchableOpacity>
            </View>
        </View>}
    </View>
    {home && <View className="flex px-5 bg-[#5E3023] shadow-lg pb-3">
        <TouchableOpacity  onPress={() => router.push('/(public)/search')} className="mx-1">
            <InputField disable={true} placeholder='Search' containerStyle={'bg-[#FFE8D6]'} onPress={() => router.push('/(public)/search')} icon={<Ionicons name={'search' } color={'#979dac'} style={{fontSize:20,marginLeft: 15}}/>}/>
        </TouchableOpacity>
    </View>}
    </>
  );
};

export default CustomHeader;