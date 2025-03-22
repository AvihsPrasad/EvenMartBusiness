import CustomButton from '@/components/CustomButton';
import CustomHeader from '@/components/Header';
import ListCard from '@/components/ListCard';
import { Business } from '@/constants';
import { useFetch } from '@/lib/fetch';
import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Image, Platform, View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';


export default function TabTwoScreen() {
  // const [tab,setTab] = useState(true);
  const { data: businesDb, loading, error } = useFetch<any[]>("/(api)/getbusiness");
  console.log(businesDb)
  return (    
    <View>
        <CustomHeader title={"Business"} home={false} backArrow={true} add={true} onBack={() => router.back()} onAddBusiness={() => router.push("/(tabs)/addBusiness")}/>
            {/* <Text>{JSON.stringify({listOfData}.listOfData)}</Text> */}
        <View className='p-4 h-full'>
            {loading &&<View className='h-full justify-center items-center'><ActivityIndicator size="large" color="#5E3023" /></View>}
            <ScrollView>
              <View className='flex mb-28'>
                {businesDb && businesDb.map((item,index) =>(
                  <TouchableOpacity key={index} className='mb-2' onPress={() => router.push({pathname:'/(public)/details/[businessDetails]',params:{businessDetails: JSON.stringify(item?.v_id)}})}>
                    <Text className='text-lg'>{item?.v_id}</Text>
                    <ListCard DataList={item} />
                  </TouchableOpacity>))
                }
              </View>
            </ScrollView>
        </View>
    </View>
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
