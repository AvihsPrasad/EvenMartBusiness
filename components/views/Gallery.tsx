import { router } from 'expo-router';
import React, { useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomButton from '../CustomButton';
import ReactNativeModal from 'react-native-modal';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

type ItemProps = {data: any};
const images = [
    {id:'1',url:'https://dummyimage.com/600x400/000/fff&text=Image+1'},
    {id:'2',url:'https://dummyimage.com/600x400/c45cc4/fff&text=Image+2'},
    {id:'3',url:'https://dummyimage.com/600x400/c45cc4/fff&text=Image+3'},
    {id:'4',url:'https://dummyimage.com/600x400/c45cc4/fff&text=Image+4'},
    {id:'5',url:'https://dummyimage.com/600x400/c45cc4/fff&text=Image+5'},
    {id:'6',url:'https://dummyimage.com/600x400/c45cc4/fff&text=Image+6'},
    {id:'7',url:'https://dummyimage.com/600x400/c45cc4/fff&text=Image+7'},
];

// const Item = ({data}: ItemProps) => (
//     <View className='w-1/2'>
//       {/* <Text>{data.url}</Text> */}
//       <Image source={{uri: data.url}} resizeMode='cover' className='w-full h-[150px] bg-contain' />
//     </View>
//   );

  const GalleryView = () => {
    // const [value, setValue] = useState(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images', 'videos'],
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };


    return (<>
        <View className='w-full h-full flex flex-row flex-wrap justify-center items-center px-2 mb-10'>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
            <CustomButton title='Add Photos' bgVariant='secondary' textVariant='secondary' classname='mb-5 mt-0' onPress={() => setShowSuccessModal(true)} />
            {images&& images.map((data, index)=>(<View key={index} className={`${images.length === index+1 ? images.length%2 ==0? 'w-1/2':'w-full' : 'w-1/2' } p-1`}>
                {/* <Text>{'' + (images.length === index+1)}</Text> */}
                <Image source={{uri: data.url}} resizeMode='cover' className='w-full h-[150px] bg-contain rounded-md' />
            </View>))}
        </View>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <ReactNativeModal isVisible={showSuccessModal}>
          <View className="bg-white px-7 py-9 rounded-2xl">
          <View className='flex px-5 pt-5 bg-white w-full'>
                    <View className='flex rounded-lg ring-1 ring-gray-300 bg-sky-200 p-5 justify-center items-center mb-5'>
                        <FontAwesome name="image" size={34} color="#0ea5e9" />
                        <Text className='text-xl font-bold mt-3'>Upload Photos</Text>
                        <CustomButton title='Choose Photos' bgVariant='secondary' textVariant='secondary' classname='my-5' onPress={() => setShowSuccessModal(false)} />
                    </View>
                </View>
            {/* <CustomButton title="OK" onPress={() => setShowSuccessModal(false)} className="mt-5" /> */}
          </View>
        </ReactNativeModal>
        </>);
  };

  export default GalleryView;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 200,
      height: 200,
    },
  });