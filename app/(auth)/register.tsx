import CustomButton from '@/components/CustomButton';
import DropdownComponent from '@/components/dropdown';
import InputField from '@/components/InputField'
import OAuth from '@/components/OAuth';
import { fetchAPI, useFetch } from '@/lib/fetch';
import { useSignUp } from '@clerk/clerk-expo';
import { router, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';
import { SafeAreaView } from 'react-native-safe-area-context'

const data = [
    { label: 'Event Hall', value: '1' },
    { label: 'Props', value: '2' },
    { label: 'Photos & Videos', value: '3' },
    { label: 'Decorations', value: '4' },
    { label: 'Music & DJ', value: '5' },
    { label: 'MUA', value: '6' },
    { label: 'Food & Beverages', value: '7' },
    { label: 'Invitations', value: '8' },
    { label: 'Arificial Jewels', value: '9' },
    { label: 'Vehical Convoie', value: '10' },
];

function Register() {
    
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    const [form, setForm] = useState({
        Email: "shivaprasadfab6@gmail.com",
        fName: "Shivaprasad",
        lName: "KS",
        // brandName: "Agustya Convention Hall",
        // city: "Bellary",
        // states: "Karnataka",
        // country: "India",
        // cc: "+91",
        // phone: "9591499101",
        // Category: "1",
        Password: "qwerty@123",
    });

    const { isLoaded, signUp, setActive } = useSignUp()
    const router = useRouter();
    const dbUpdate = async (clerkId: any, firstname: any, lastname: any, Email: string) => {
        await fetchAPI("/(api)/user", {
          method: "POST",
          body: JSON.stringify({
            clerkId,
            firstname,
            lastname ,
            Email,
          }),
        });
      }

    // const [emailAddress, setEmailAddress] = React.useState('')
    // const [password, setPassword] = React.useState('')
    const [pendingVerification, setPendingVerification] = useState(false)
    const [code, setCode] = useState('')
    const { data: drivers, loading, error } = useFetch<any[]>("/(api)/getcat");
    console.log(drivers);
    const onSignUpPress = async () => {
        setLoadingSpinner(true);
        if (!isLoaded) return

        // Start sign-up process using email and password provided
        try {
            await signUp.create({
                username: form.fName,
                emailAddress: form.Email,
                password: form.Password,
            })

            // Send user an email with verification code
            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

            // Set 'pendingVerification' to true to display second form
            // and capture OTP code
            setPendingVerification(true)
            setLoadingSpinner(false);
        } catch (err) {
            // See https://clerk.com/docs/custom-flows/error-handling
            // for more info on error handling
            console.error(JSON.stringify(err, null, 2));
            setLoadingSpinner(false);
        }
    }

    // Handle submission of verification form
    const onVerifyPress = async () => {
        setLoadingSpinner(true);
        if (!isLoaded) return

        try {
            // Use the code the user provided to attempt verification
            const signUpAttempt = await signUp.attemptEmailAddressVerification({
                code,
            })

            // If verification was completed, set the session to active
            // and redirect the user
            if (signUpAttempt.status === 'complete') {
                await setActive({ session: signUpAttempt.createdSessionId })
                dbUpdate(signUpAttempt.createdUserId,form.fName,form.lName,form.Email);
                setLoadingSpinner(false);
                router.replace('/')
            } else {
                // If the status is not complete, check why. User may need to
                // complete further steps.
                setLoadingSpinner(false);
                console.error(JSON.stringify(signUpAttempt, null, 2))
            }
        } catch (err) {
            // See https://clerk.com/docs/custom-flows/error-handling
            // for more info on error handling
            console.error(JSON.stringify(err, null, 2));
            router.replace('/(auth)/login')
        }
    }

    if (pendingVerification) {
        return (
            <><View className="flex h-full items-center justify-between bg-white w-full">
                <ScrollView className='flex w-full'>
                    <View className="flex w-full p-5">
                        <Text className='mt-8 mb-10 text-4xl'>Verify your email</Text>
                        <InputField
                            placeholder="Enter your verification code"
                            containerStyle="bg-gray-200"
                            value={code}
                            onChangeText={(code) => setCode(code)}
                        />
                        <CustomButton title={"Verify Email"} onPress={onVerifyPress} classname="w-full mt-5" />
                    </View>
                </ScrollView>
            </View>
            </>
        )
    }
    return (<><Spinner visible={loadingSpinner} />
        <View className="flex h-full items-center justify-between bg-white w-full">
            <ScrollView className='flex w-full'>
                <View className="flex w-full p-5">
                    <Text className='mt-5 text-4xl font-RobotoMedium'>Register</Text>
                    <View className='flex mt-5 w-full'>
                        <InputField
                            label="First Name"
                            placeholder="Enter Vendor name"
                            // textContentType="text"
                            containerStyle="bg-gray-200"
                            value={form.fName}
                            onChangeText={(value) => setForm({ ...form, fName: value })}
                        />
                    </View>
                    <View className='flex mb-2 w-full'>
                        <InputField
                            label="Last Name"
                            placeholder="Enter Lastname name"
                            // textContentType="text"
                            containerStyle="bg-gray-200"
                            value={form.lName}
                            onChangeText={(value) => setForm({ ...form, lName: value })}
                        />
                    </View>
                    <View className='flex mb-2 w-full'>
                        <InputField
                            label="Email"
                            placeholder="Enter email"
                            textContentType="telephoneNumber"
                            containerStyle="bg-gray-200"
                            value={form.Email}
                            onChangeText={(value) => setForm({ ...form, Email: value })}
                        />
                    </View>
                    <View className='flex mb-2 w-full'>
                        <InputField
                            label="Password"
                            placeholder="Enter email"
                            textContentType="telephoneNumber"
                            containerStyle="bg-gray-200"
                            value={form.Password}
                            onChangeText={(value) => setForm({ ...form, Email: value })}
                        />
                    </View>
                    {/* <View className='flex mb-2 w-full'>
                        <Text className='mb-2 text-lg'>Business Type</Text>
                        <DropdownComponent data={data} value={value} dropStyle='bg-gray-200' />
                    </View> */}
                    {/* <View className='flex flex-row mb-2 w-full items-end'>
                        <View className='pr-2 w-[85px]'>
                            <InputField
                                label="Phone"
                                containerStyle="bg-gray-200 mr-1"
                                value={form.cc}
                                onChangeText={(value) => setForm({ ...form, cc: value })}
                            />
                        </View>
                        <View className='w-3/4'>
                            <InputField
                                label=""
                                placeholder="Enter password"
                                textContentType="password"
                                containerStyle="bg-gray-200"
                                value={form.phone}
                                onChangeText={(value) => setForm({ ...form, phone: value })}
                            />
                        </View>
                    </View> */}
                    <View>
                        <CustomButton title={"Register"} onPress={onSignUpPress}
                        // classname="w-11/12 mt-10 mb-2"
                        />
                    </View>
                </View>
            </ScrollView>
            {/* <View className="flex pb-8 bg-white">
          <OAuth />
        </View> */}
            <View className="flex pb-8 bg-white w-full px-5">
                <CustomButton title='Login' bgVariant='secondary' textVariant='secondary' classname='mt-6' onPress={() => router.push("/(auth)/login")} />
            </View>
        </View></>
    )
}

export default Register