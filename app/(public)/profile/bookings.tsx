import CustomHeader from "@/components/Header";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

function Bookings() {
  return (
    <>
      <CustomHeader title="Bookings" backArrow={true} onBack={() => router.back()}/>
      <ScrollView className="flex bg-[#5E3023] px-3 pt-4"></ScrollView>
    </>
  );
}

export default Bookings;