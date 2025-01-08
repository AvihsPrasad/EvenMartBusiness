import React from 'react'
import { Text, View } from 'react-native';
import { AntDesign, Entypo, FontAwesome, FontAwesome5, FontAwesome6, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";


const getIcons = (variant: any) => {
    switch (variant.type) {
      case "AntDesign":
        return <AntDesign name={variant.name} size={variant.size} color={variant.color} />;
      case "Entypo":
        return <Entypo name={variant.name} size={variant.size} color={variant.color} />;
      case "FontAwesome":
        return <FontAwesome name={variant.name} size={variant.size} color={variant.color} />;
      case "FontAwesome5":
        return <FontAwesome5 name={variant.name} size={variant.size} color={variant.color} />;
      case "FontAwesome6":
        return <FontAwesome6 name={variant.name} size={variant.size} color={variant.color} />;
      case "MaterialCommunityIcons":
        return <MaterialCommunityIcons name={variant.name} size={variant.size} color={variant.color} />;
      default:
        return <Ionicons name={variant.name} size={variant.size} color={variant.color} />;
    }
  };

const Icon = (item: any) => {
  return (
    <>
        <View>
            {/* <Text>{JSON.stringify(item)}</Text> */}
            <Text>{getIcons(item)}</Text>
        </View>
    </>
  )
}

export default Icon