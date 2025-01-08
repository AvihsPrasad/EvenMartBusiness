import CustomButton from '@/components/CustomButton';
import CustomHeader from '@/components/Header';
import ListCard from '@/components/ListCard';
import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Image, Platform, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  const [tab,setTab] = useState(true)
  return (    
    <SafeAreaView className='mb-[160px]'>
        <CustomHeader title={"Business"} home={false} backArrow={true} add={true} onBack={() => router.back()} onAddBusiness={() => router.push("/(tabs)/addBusiness")}/>
            {/* <Text>{JSON.stringify({listOfData}.listOfData)}</Text> */}
        <View className='p-4 h-full'>
            <ScrollView>
              {/* <View className='mb-5 flex flex-row gap-2'>
                <CustomButton title={"Event Organiser"} bgVariant={tab ?'secondary':'primary'} textVariant={tab?'secondary':'primary'} onPress={() => setTab(false)} classname="w-[48%]"/>
                <CustomButton title={"Destination"} bgVariant={!tab ?'secondary':'primary'} textVariant={!tab?'secondary':'primary'} onPress={() => setTab(true)} classname="w-[48%]"/>
              </View> */}
              {tab && <View className='flex'>
                <TouchableOpacity className='mb-2'><ListCard DataList={{Id: 'HALL0002',Name: "Elixer Resort",Rating:'3.5',Address: 'GOA'}} /></TouchableOpacity>
                <TouchableOpacity className='mb-2'><ListCard DataList={{Id: 'HALL0002',Name: "Jaipur Mahal",Rating:'3.5',Address: 'Jaipur'}} /></TouchableOpacity>
              </View>}
              {!tab && <Text>
                <TouchableOpacity className='mb-2'><ListCard DataList={{Id: 'HALL0002',Name: "GRR Events",Rating:'3.5',Address: 'GOA'}} /></TouchableOpacity></Text>}
            </ScrollView>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
