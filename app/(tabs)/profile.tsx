import CustomButton from '@/components/CustomButton'
import CustomHeader from '@/components/Header'
import { MenuList } from '@/constants'
import { useUser } from '@clerk/clerk-expo'
import { useAuth } from '@clerk/clerk-react'
import { Entypo, Feather } from '@expo/vector-icons'
import { Href, router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

function Profile() {
  const { user } = useUser();
  const { signOut } = useAuth();
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const handleSignOut = async() => {
    setLoadingSpinner(true);
    await signOut();
    setLoadingSpinner(false);
    router.replace("/(auth)/login");
  };
  useEffect(() => {
    // console.log(JSON.stringify(user?.username));
  });

  return (
    <><Spinner visible={loadingSpinner} />
        <CustomHeader
          title="Profile"
          backArrow={true}
          onBack={() => router.back()}
        />
        <ScrollView>
          <View className="mb-5">
            <View className="flex flex-row items-center px-5 py-4">
              <View className="w-20 h-20 bg-black justify-center items-center rounded-full">
              { user?.imageUrl && <Image source={{uri: user?.externalAccounts[0]?.imageUrl ?? user?.imageUrl,}}
                     style={{ width: 80, height: 80, borderRadius: 110 / 2 }} 
                     className=" rounded-full h-[110px] w-[110px] border-[3px] border-white shadow-sm shadow-neutral-300"
                     />}
                {/* {! user?.imageUrl && <Text className="font-RobotoMedium text-3xl color-[#ffffff] " style={{ letterSpacing: 1.2 }}>SH</Text>} */}
                { !user?.imageUrl &&<Text className="font-RobotoMedium text-3xl color-[#ffffff] " style={{ letterSpacing: 1.2 }}>SH</Text>}
              </View>
              <View className="grow">
                <Text className="text-xl font-RobotoBold m-0 pl-2 capitalize"> {user?.username} KS</Text>
                <Text className="text-sm font-Roboto pl-2 m-0 text-gray-500">shivaprasad266@gmail.com</Text>
              </View>
              <View className="p-3 ml-5">
                <TouchableOpacity onPress={() => router.push('/(public)/profile/profileEdit')}>
                  <Feather name="edit" size={22} color="#3b82f6" />
                  <Text className="mt-2 text-blue-500 font-RobotoMedium">Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
            {
                MenuList.map((item,index) => (
                    // <View key={index}>
                        <TouchableOpacity key={index} onPress={()=> router.push(`${item.route}` as Href<string>)}>
                            <View className="flex flex-row bg-white px-5 mb-0.5 py-4">
                                <View className="grow">
                                    <Text className="font-Roboto text-lg">{item.title}</Text>
                                    {/* <Text>{item.descp}</Text> */}
                                </View>
                                <View><Entypo name="chevron-right" size={22} color="black" /></View>
                            </View>
                        </TouchableOpacity>
                    // </View>
                ))
            }
            <View className="flex px-5 py-4">
              <CustomButton title='Logout' bgVariant='secondary' textVariant='secondary' classname='mt-6' onPress={handleSignOut}/>
            </View>
            <View style={{flexDirection:'row',padding:10,marginBottom:80,justifyContent: 'center'}}>
                <Text>Version 1.1.0</Text>
            </View>
          </View>
        </ScrollView>
      </>
  )
}

export default Profile