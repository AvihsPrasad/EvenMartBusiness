import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/components/Header";
import { router } from "expo-router";
import { Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";


export default function Notification() {
  return (
    <>
      {/* {Platform.OS === 'ios'? <View className="bg-red-500 w-full h-9"><Text>asas</Text></View> : ''} */}
      {/* <StatusBar barStyle="light-content" backgroundColor={'#32357a'}/> */}
      <SafeAreaView>
        <CustomHeader
          title="Notification"
          backArrow={true}
          onBack={() => router.back()}
        />
        <ScrollView>
          <View className="flex p-5">
            <TouchableOpacity className="mb-2">
                <View className="flex flex-row bg-white rounded-xl p-3">
                    <View className="w-[45px] h-[45px] justify-center items-center rounded-full bg-[#ededed]">
                        <Feather name="package" size={20} color="black" />
                    </View>
                    <View className="pl-5">
                        <Text className="font-RobotoBold text-lg">Sep-17 : 08:00 AM</Text>
                        <Text>Package updated with ur Items as requested</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className="mb-2">
                <View className="flex flex-row bg-white rounded-xl p-3">
                    <View className="w-[45px] h-[45px] justify-center items-center rounded-full bg-[#ededed]">
                        <MaterialCommunityIcons name="brightness-percent" size={20} color="black" />
                    </View>
                    <View className="pl-5">
                        <Text className="font-RobotoBold text-lg">Sep-17 : 08:00 AM</Text>
                        <Text>Limited Offer of 10% off on selected Products</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className="mb-2">
                <View className="flex flex-row bg-white rounded-xl p-3">
                    <View className="w-[45px] h-[45px] justify-center items-center rounded-full bg-[#ededed]">
                        <FontAwesome name="bell" size={20} color="black" />
                    </View>
                    <View className="pl-5">
                        <Text className="font-RobotoBold text-lg">Sep-17 : 08:00 AM</Text>
                        <Text>Package updated with ur Items as requested</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className="mb-2">
                <View className="flex flex-row bg-white rounded-xl p-3">
                    <View className="w-[45px] h-[45px] justify-center items-center rounded-full bg-[#ededed]">
                        <Ionicons name="settings-sharp" size={20} color="black" />
                    </View>
                    <View className="pl-5">
                        <Text className="font-RobotoBold text-lg">Sep-17 : 08:00 AM</Text>
                        <Text>Please completed ur profile</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className="mb-2">
                <View className="flex flex-row bg-white rounded-xl p-3">
                    <View className="w-[45px] h-[45px] justify-center items-center rounded-full bg-[#ededed]">
                        <Entypo name="location-pin" size={20} color="black" />
                    </View>
                    <View className="pl-5">
                        <Text className="font-RobotoBold text-lg">Sep-17 : 08:00 AM</Text>
                        <Text>Add address or current location</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className="mb-2">
                <View className="flex flex-row bg-white rounded-xl p-3">
                    <View className="w-[45px] h-[45px] justify-center items-center rounded-full bg-[#ededed]">
                        <MaterialIcons name="payment" size={20} color="black" />
                    </View>
                    <View className="pl-5">
                        <Text className="font-RobotoBold text-lg">Sep-17 : 08:00 AM</Text>
                        <Text>Payment details are missing. </Text>
                    </View>
                </View>
            </TouchableOpacity>
                
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
