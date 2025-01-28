import React, { useState } from 'react';
  import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';
import { PhotoPakages } from '@/constants';
import { Collapsible } from '../Collapsible';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import ReactNativeModal from 'react-native-modal';
import CustomButton from '../CustomButton';
import InputField from '../InputField';

type ItemProps = {data: any};
type BusinessProps = {businessType: any};

const Location = ({data}: ItemProps) => (
    <View className='w-full'>
      {/* <Text>{JSON.stringify(data)}</Text> */}
      <View className='flex mt-5 w-full'>
        <InputField label="Edit Location" placeholder="Enter" textContentType="telephoneNumber" containerStyle="bg-gray-200" value={data.Address}
                    // onChangeText={(value) => setForm({ ...form, Email: value })}
        />
      </View>
    </View>
  );
const Package = ({data}: ItemProps) => (
    <View className='w-full'>
      <Text className='text-lg font-bold'>Add Package</Text>
      <View className='flex mt-5 w-full'>
        <InputField label="Description" placeholder="Description" textContentType="telephoneNumber" containerStyle="bg-gray-200" value={data.Descp}
                    // onChangeText={(value) => setForm({ ...form, Email: value })}
        />
        <InputField label="Price" placeholder="Price" textContentType="telephoneNumber" containerStyle="bg-gray-200" value={data.Price}
                    // onChangeText={(value) => setForm({ ...form, Email: value })}
        />
      </View>
    </View>
  );
const Editpackage = ({data}: ItemProps) => (
    <View className='w-full'>
      {/* <Text>{JSON.stringify(data)}</Text> */}
      <View className='flex mt-5 w-full'>
        <InputField label="Title" placeholder="Enter" textContentType="telephoneNumber" containerStyle="bg-gray-200" value={data.title}
                    // onChangeText={(value) => setForm({ ...form, Email: value })}
        />
        <InputField label="Description" placeholder="Enter" textContentType="telephoneNumber" containerStyle="bg-gray-200" value={data.Descp}
                    // onChangeText={(value) => setForm({ ...form, Email: value })}
        />
        <InputField label="Price" placeholder="Enter" textContentType="telephoneNumber" containerStyle="bg-gray-200" value={data.price}
                    // onChangeText={(value) => setForm({ ...form, Email: value })}
        />
      </View>
    </View>
  );
const Deletepackage = ({data}: ItemProps) => (
    <View className='w-full'>
      <Text className='text-lg font-bold'>Delete <Text className='text-red-500'>{data.title}</Text> package.</Text>
    </View>
  );
const Note = ({data}: ItemProps) => (
    <View className='w-full'>
      {/* <Text>{JSON.stringify(data)}</Text> */}
      <View className='flex mt-5 w-full'>
        <InputField label="Edit Note" placeholder="Enter" textContentType="telephoneNumber" containerStyle="bg-gray-200" value={data.Address}
                    // onChangeText={(value) => setForm({ ...form, Email: value })}
        />
      </View>
    </View>
  );


  const PhotoView = ({businessType}: BusinessProps) => {
    // const [value, setValue] = useState(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [functionType, setFunctionType] = useState({type:'',data:{}});

    return (
        <View>
          <View className='px-5 flex mb-4'>
            <View className='flex flex-row items-center mb-4'>
              <Text className='text-xl font-bold grow'>Description</Text>
              <TouchableOpacity className="w-[40px] h-[40px] items-center justify-center bg-[#FFE8D6] rounded-lg" onPress={() => {setShowSuccessModal(true);setFunctionType({type:'location',data:businessType})}}><Entypo name="pencil" size={20} color="#000" /></TouchableOpacity>
            </View>
            <View className='p-4 w-full flex flex-row border-[1px] border-gray-300 rounded-lg items-center'>
                <Text className='text-base font-normal'>{businessType.Descp}</Text>
            </View>
        </View>
        <View className='px-5 flex mb-4'>
          <View className='flex flex-row items-center mb-4'>
            <Text className='text-xl font-bold grow'>Location</Text>
            <TouchableOpacity className="w-[40px] h-[40px] items-center justify-center bg-[#FFE8D6] rounded-lg" onPress={() => {setShowSuccessModal(true);setFunctionType({type:'location',data:businessType})}}><Entypo name="pencil" size={20} color="#000" /></TouchableOpacity>
          </View>
          <View className='p-4 w-full flex flex-row border-[1px] border-gray-300 rounded-lg items-center'>
            {/* <Image source={images.map} className='w-20 h-20 object-contain' /> */}
              <Text className='text-base font-normal'>{businessType.Address}</Text>
          </View>
        </View>
          <View className='px-5 flex flex-row items-center mb-4'>
            <Text className='text-xl font-bold grow'>Packages</Text>
            <TouchableOpacity className="w-[40px] h-[40px] items-center justify-center bg-[#FFE8D6] rounded-lg" onPress={() => {setShowSuccessModal(true);setFunctionType({type:'packages',data:{}})}}><Entypo name="plus" size={26} color="#000" /></TouchableOpacity>
          </View>
          {PhotoPakages.map((item : any,index) => (<View  key={index} className='px-5 flex flex-row mb-1'>
          <View className='p-4 w-full border-[1px] border-gray-300 rounded-lg'>
              <Collapsible title={item.title}>
                <View>
                  <Text className='text-base font-normal mb-3'>
                    <Entypo name="dot-single" size={24} color="black" />
                    {item.Descp}
                  </Text>
                  <Text className='text-lg font-semibold text-red-600 text-right mb-4'>Price: {item.price}</Text>
                  <View className='flex flex-row gap-2'>
                    <TouchableOpacity className="w-[47%] px-3 py-2 items-center justify-center bg-red-400 rounded-lg" onPress={() => {setShowSuccessModal(true);setFunctionType({type:'delete',data:item})}}>
                      <MaterialIcons name="delete" size={26} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity className="w-[47%] px-3 py-2 items-center justify-center bg-sky-400 rounded-lg" onPress={() => {setShowSuccessModal(true);setFunctionType({type:'edit',data:item})}}>
                      <Entypo name="pencil" size={26} color="#000" />
                    </TouchableOpacity>
                  </View>
                </View>
              </Collapsible>
            </View>
        </View>))}
        <View className='px-5 flex my-5'>
          <View className='flex flex-row items-center mb-4'>
            <Text className='text-xl font-bold grow'>Note</Text>
            <TouchableOpacity className="w-[40px] h-[40px] items-center justify-center bg-[#FFE8D6] rounded-lg" onPress={() => {setShowSuccessModal(true);setFunctionType({type:'note',data:businessType})}}><Entypo name="pencil" size={20} color="#000" /></TouchableOpacity>
          </View>
          <View className='p-4 w-full flex flex-row border-[1px] border-gray-300 rounded-lg items-center'>
            <Text className='text-base font-normal'>{businessType.Address}</Text>
          </View>
        </View>
        <ReactNativeModal isVisible={showSuccessModal}>
          <View className="bg-white px-7 py-9 rounded-2xl">
            {functionType.type==='location' && <Location data={functionType.data}/>}
            {functionType.type==='packages' && <Package data={functionType.data}/>}
            {functionType.type==='edit' && <Editpackage data={functionType.data}/>}
            {functionType.type==='delete' && <Deletepackage data={functionType.data}/>}
            {functionType.type==='note' && <Note data={functionType.data}/>}
            <CustomButton title="OK" onPress={() => setShowSuccessModal(false)} className="mt-5" />
          </View>
        </ReactNativeModal>
    </View>
    );
  };

  export default PhotoView;