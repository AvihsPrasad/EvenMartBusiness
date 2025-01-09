import { Stack } from 'expo-router';

export default function PublicLayout() {
  return (
      <Stack>
        <Stack.Screen name="search" options={{ headerShown: false }} />
        <Stack.Screen name="profile/profileEdit" options={{ headerShown: false }} />
        <Stack.Screen name="profile/bookings" options={{ headerShown: false }} />
        <Stack.Screen name="profile/documents" options={{ headerShown: false }} />
        <Stack.Screen name="profile/location" options={{ headerShown: false }} />
        <Stack.Screen name="profile/support" options={{ headerShown: false }} />
        <Stack.Screen name="profile/termsAndConditions" options={{ headerShown: false }} />
        <Stack.Screen name="profile/notification" options={{ headerShown: false }} />
        <Stack.Screen name="chat/[chatId]" options={{ headerShown: false }} />
        <Stack.Screen name="request/[requestId]" options={{ headerShown: false }} />
      </Stack>
  );
}
