import CustomButton from '@/components/CustomButton';
import CustomHeader from '@/components/Header';
import ListCard from '@/components/ListCard';
import { Business } from '@/constants';
import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Image, Platform, View, Text, ScrollView, TouchableOpacity } from 'react-native';


export default function TabTwoScreen() {
  const [tab,setTab] = useState(true)
  return (    
    <View>
        <CustomHeader title={"Business"} home={false} backArrow={true} add={true} onBack={() => router.back()} onAddBusiness={() => router.push("/(tabs)/addBusiness")}/>
            {/* <Text>{JSON.stringify({listOfData}.listOfData)}</Text> */}
        <View className='p-4 h-full'>
            <ScrollView>
              <View className='flex mb-28'>
                {Business && Business.map((item,index) =>(
                  <TouchableOpacity key={index} className='mb-2' onPress={() => router.push({pathname:'/(public)/details/[businessDetails]',params:{businessDetails: item.Id}})}>
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
