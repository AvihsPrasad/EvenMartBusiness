import { Stack } from 'expo-router';

export default function PublicLayout() {
  return (
      <Stack>
        <Stack.Screen name="search" options={{ headerShown: false }} />
        {/* <Stack.Screen name="list" options={{ headerShown: false }} /> */}
        <Stack.Screen name="profileEdit" options={{ headerShown: false }} />
        <Stack.Screen name="notification" options={{ headerShown: false }} />
        {/* <Stack.Screen name="category/[categoryid]" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="product/[productId]" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="details/[productDetails]" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="price/[price]" options={{ headerShown: false }} /> */}
        <Stack.Screen name="chat/[chatId]" options={{ headerShown: false }} />
        <Stack.Screen name="request/[requestId]" options={{ headerShown: false }} />
        {/* <Stack.Screen name="forget-password" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="+not-found" /> */}
      </Stack>
  );
}
