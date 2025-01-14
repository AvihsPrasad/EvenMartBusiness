import CustomHeader from '@/components/Header'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome, FontAwesome5, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons'
import DropdownComponent from '@/components/dropdown'

const requests =[
  {id:'1',title:'Hall',from:'Ganesh ks',createdOn:'17-Sep-1823',status:'pending',Brand:'Agustya Function hall',fromDate: '17-Sep-1823 08:00 AM',toDate:'17-Sep-1823 08:00 AM',},
  {id:'2',title:'Photographer',from:'Harshitha DS',createdOn:'17-Sep-1823',status:'rejected',Brand:'Machani clicks',fromDate: '17-Sep-1823 08:00 AM',toDate:'17-Sep-1823 08:00 AM',},
  {id:'3',title:'Food',from:'Vaibhav DS',createdOn:'17-Sep-1823',status:'Accepted',Brand:'Anapoorna Food',fromDate: '17-Sep-1823 08:00 AM',toDate:'17-Sep-1823 08:00 AM',},
  {id:'2',title:'Photographer',from:'Harshitha DS',createdOn:'17-Sep-1823',status:'rejected',Brand:'Machani clicks',fromDate: '17-Sep-1823 08:00 AM',toDate:'17-Sep-1823 08:00 AM',},
  {id:'3',title:'Food',from:'Vaibhav DS',createdOn:'17-Sep-1823',status:'Accepted',Brand:'Anapoorna Food',fromDate: '17-Sep-1823 08:00 AM',toDate:'17-Sep-1823 08:00 AM',},
  {id:'2',title:'Photographer',from:'Harshitha DS',createdOn:'17-Sep-1823',status:'rejected',Brand:'Machani clicks',fromDate: '17-Sep-1823 08:00 AM',toDate:'17-Sep-1823 08:00 AM',},
  {id:'3',title:'Food',from:'Vaibhav DS',createdOn:'17-Sep-1823',status:'Accepted',Brand:'Anapoorna Food',fromDate: '17-Sep-1823 08:00 AM',toDate:'17-Sep-1823 08:00 AM',},
  {id:'2',title:'Photographer',from:'Harshitha DS',createdOn:'17-Sep-1823',status:'rejected',Brand:'Machani clicks',fromDate: '17-Sep-1823 08:00 AM',toDate:'17-Sep-1823 08:00 AM',},
  {id:'3',title:'Food',from:'Vaibhav DS',createdOn:'17-Sep-1823',status:'Accepted',Brand:'Anapoorna Food',fromDate: '17-Sep-1823 08:00 AM',toDate:'17-Sep-1823 08:00 AM',},
  {id:'3',title:'Food',from:'Vaibhav DS',createdOn:'17-Sep-1823',status:'Accepted',Brand:'Anapoorna Food',fromDate: '17-Sep-1823 08:00 AM',toDate:'17-Sep-1823 08:00 AM',},
  {id:'3',title:'Food',from:'Vaibhav DS',createdOn:'17-Sep-1823',status:'Accepted',Brand:'Anapoorna Food',fromDate: '17-Sep-1823 08:00 AM',toDate:'17-Sep-1823 08:00 AM',},
  // {id:'1',title:'',from:'',createdOn:'',status:'',Brand:''},
  // {id:'1',title:'',from:'',createdOn:'',status:'',Brand:''},
  // {id:'1',title:'',from:'',createdOn:'',status:'',Brand:''},
  // {id:'1',title:'',from:'',createdOn:'',status:'',Brand:''},
];
const data = [
  { label: 'business 1', value: '1' },
  { label: 'business 2', value: '2' },
];

function Category() {
//   const [modalVisible, setModalVisible] = useState(false);
  const [requestData, setRequestData] = useState(requests);
  const [filter, setFilter] = useState('All')
  const filterData = (item: any)=>{
    setFilter(item)
    if (item === 'All'){
      // setFilter(item)
      setRequestData(requests)
    } else {
      let sotedData = requests.filter((data)=> data.status === item)
      setRequestData(sotedData)
    }
  }
  return (
    <>
      {/* <SafeAreaView> */}
        <CustomHeader title="Requests" home={false} backArrow={true} onBack={() => router.back()}/>
        <ScrollView className='bg-[#efefef] h-screen'>
          <View className='flex w-full'>
              <View className=' px-4 pt-4 flex w-full'>
                <DropdownComponent data={data} dropStyle='bg-white rounded-md'/>
              </View>
              <View className='px-4 py-3 flex flex-row w-full flex-wrap'>
                {/* <Text>{filter}</Text> */}
                <TouchableOpacity className='mr-2' onPress={()=>filterData('All')}>
                  <View className={`px-4 py-1 rounded-md border-[0.5px] border-gray-400 ${filter == 'All'? 'bg-yellow-400':'bg-white'}`}>
                    <Text className='text-sm'>All</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className='mr-2' onPress={()=>filterData('pending')}>
                  <View className={`px-4 py-1 rounded-md border-[0.5px] border-gray-400 ${filter == 'pending'? 'bg-yellow-400':'bg-white'}`}>
                    <Text className='text-sm'>Pendings</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className='mr-2' onPress={()=>filterData('rejected')}>
                  <View className={`px-4 py-1 rounded-md border-[0.5px] border-gray-400 ${filter == 'rejected'? 'bg-yellow-400':'bg-white'}`}>
                    <Text className='text-sm'>Rejected</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>filterData('Accepted')}>
                  <View className={`px-4 py-1 rounded-md border-[0.5px] border-gray-400 ${filter == 'Accepted'? 'bg-yellow-400':'bg-white'}`}>
                    <Text className='text-sm'>Accepted</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {requestData && requestData.map((data,index)=>(<View className='flex' key={index}>
                <TouchableOpacity className="mb-0" onPress={() => router.push({pathname:'/(public)/request/[requestId]',params:{requestId: '' + data.from}})}>
                  <View className="flex flex-row bg-white p-3 border-b-[1px] border-gray-300">
                      <View className={`w-[45px] h-[45px] justify-center items-center rounded-full bg-gray-200 border-[1px] border-gray-300`}>
                          {data.title == 'Hall' &&<FontAwesome name="university" size={18} color="black" />}
                          {data.title == 'Props' &&<MaterialCommunityIcons name="sunglasses" size={18} color="black" />}
                          {data.title == 'Photographer' &&<FontAwesome name="camera-retro" size={18} color="black" />}
                          {data.title == 'Decorations' &&<FontAwesome6 name="award" size={18} color="black" />}
                          {data.title == 'Music' &&<FontAwesome name="music" size={18} color="black" />}
                          {data.title == 'MUA' &&<FontAwesome6 name="wand-magic-sparkles" size={18} color="black" />}
                          {data.title == 'Food' &&<FontAwesome6 name="burger" size={18} color="black" />}
                          {data.title == 'Invitations' &&<FontAwesome5 name="book-open" size={18} color="black" />}
                          {data.title == 'Jewels' &&<MaterialCommunityIcons name="gold" size={18} color="black" />}
                          {data.title == 'Vehical' &&<FontAwesome5 name="car" size={18} color="black" />}
                      </View>
                      <View className="pl-5 grow items-center">
                        <View className='flex flex-row items-center'>
                          <View className='flex flex-row grow items-center'>
                            <Text className="font-semibold text-base">{data.from}</Text>
                          </View>
                          <Text className={`font-normal text-xs text-gray-500`}>{data.createdOn}</Text>
                        </View>
                        <View className='flex flex-row items-center mb-0'>
                          <Text className="font-normal text-xs grow text-[#aaa9a9]">{data.Brand}</Text>
                          <View className='flex justify-center items-center'>
                            <Text className="font-semibold text-xs text-gray-400 w-full text-center">{data.status}</Text>
                          </View>
                        </View>
                      </View>
                  </View>
                </TouchableOpacity>
              </View>))}
          </View>
        </ScrollView>
      {/* </SafeAreaView> */}
    </>
  )
}

export default Category;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'white',
    // opacity:0.5
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});