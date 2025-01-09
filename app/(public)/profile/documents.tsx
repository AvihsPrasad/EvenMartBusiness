import CustomHeader from "@/components/Header";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

function Documents() {
  return (
    <>
      <CustomHeader title="Documents" backArrow={true} onBack={() => router.back()}/>
      <ScrollView className="flex px-3 pt-4"></ScrollView>
    </>
  );
}

export default Documents;
