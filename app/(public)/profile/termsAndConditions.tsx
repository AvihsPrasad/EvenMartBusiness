import CustomHeader from "@/components/Header";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

function TermsAndCondition() {
  return (
    <>
      <CustomHeader title="Terms & Condition" backArrow={true} onBack={() => router.back()}/>
      <ScrollView className="flex px-3 pt-4"></ScrollView>
    </>
  );
}

export default TermsAndCondition;
