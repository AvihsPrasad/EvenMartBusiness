import { useAuth } from '@clerk/clerk-react'
import { Redirect, router } from 'expo-router'
import React, { useEffect } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

const SplashScreen = () => {
    const { isLoaded, isSignedIn, userId, sessionId, getToken } = useAuth();

    // if (!isLoaded) {
    //     return <Text>Loading...</Text>
    // }
   console.log('========================================')
   console.log(isSignedIn)
   console.log(sessionId)
   console.log(getToken())
   console.log('========================================')
    useEffect(() => {
        setTimeout(() => {
            if (isSignedIn) {
                router.replace('/(tabs)')
            } else {
                router.replace('/(auth)/login')
            }
        }, 5000)
    })
    return (
        <View className='flex w-full h-full bg-[#5E3023] justify-center items-center'>
            <Text className='text-center font-medium text-4xl text-[#FFE8D6]'>Event Mart Business</Text>
            <View className='absolute bottom-10'>
                 <View className='flex flex-row justify-center items-center mb-5'>
                    <ActivityIndicator size="large" color="#FFE8D6" />
                </View>
                <Text className='text-center text-[#FFE8D6] mb-2'>Powered By</Text>
                <Text className='text-center text-xl text-[#FFE8D6]'>Shivaprasad KS</Text>
            </View>
        </View>
    )
}

export default SplashScreen