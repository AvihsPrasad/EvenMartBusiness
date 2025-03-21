import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField'
// import OAuth from '@/components/OAuth';
import { useSignIn } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Otp from './otp';
import Spinner from 'react-native-loading-spinner-overlay';

function LogIn() {
  const [loadingSpinner, setLoadingSpinner] = useState(false);
    const [form, setForm] = useState({
        Email: "shivaprasad266@gmail.com",
        Password: "266@shiva"
      });
    const { signIn, setActive, isLoaded } = useSignIn()
    const router = useRouter();

      const onSignInPress = async () => {
        setLoadingSpinner(true);
        if (!isLoaded) return;
        try {
          const signInAttempt = await signIn.create({
            identifier: form.Email,
            password: form.Password,
          })
          if (signInAttempt.status === 'complete') {
            await setActive({ session: signInAttempt.createdSessionId })
            router.replace('/(tabs)')
          } else {
            console.error(JSON.stringify(signInAttempt, null, 2))
          }
        } catch (err) {
          console.error(JSON.stringify(err, null, 2))
         if (err.errors[0].code === 'session_exists'){
          router.replace('/(tabs)')
         } else{
          router.replace('/')
         }
        }
        setLoadingSpinner(false);
      }
  return (
    <SafeAreaView className="flex-1 h-full items-center justify-between bg-white">
      <Spinner visible={loadingSpinner} />
        <View className="flex p-5 w-full">
            <Text className='text-4xl font-RobotoMedium'>Login</Text>
            <View className='flex mt-5 w-full'>
                <InputField
                label="Email"
                placeholder="Enter email"
                textContentType="telephoneNumber"
                containerStyle="bg-gray-200"
                value={form.Email}
                onChangeText={(value) => setForm({ ...form, Email: value })}
                 />
            </View>
            <View className='flex mb-5 w-full'>
                <InputField
                label="Enter Password"
                placeholder="Enter email"
                textContentType="password"
                containerStyle="bg-gray-200"
                value={form.Password}
                onChangeText={(value) => setForm({ ...form, Password: value })}
                 />
            </View>
            <View>
            <CustomButton
            title={"Login"}
            onPress={onSignInPress}
            // classname="w-11/12 mt-10 mb-5"
          />
            </View>
        </View>
        <View className="flex pb-8 bg-white w-full px-5">
        <CustomButton title='Register' bgVariant='secondary' textVariant='secondary' classname='mt-6' onPress={() => router.push("/(auth)/register")} />
        </View>
        {/* <Otp /> */}
    </SafeAreaView>
  )
}

export default LogIn