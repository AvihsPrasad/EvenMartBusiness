import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
// import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign, Entypo, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#5E3023',
        headerShown: false,
        tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle:{...styles.barContainer}
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color,focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} color={color} style={{fontSize:20}}/>,
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: 'Requests',
          tabBarIcon: ({ color,focused }) => <Entypo name="blackboard" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Businesses',
          tabBarIcon: ({ color,focused }) => <MaterialIcons name="business-center" size={24} color={color} />,
        }}
      />
        <Tabs.Screen name="chat" options={{
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => (
            // <Ionicons name={focused ? 'cog' : 'cog-outline'} color={color} style={{fontSize:20}}/>
            // <AntDesign name="setting" size={24} color={color} />
            <FontAwesome name="user" size={24} color={color} />
          ),
        }} />
      <Tabs.Screen name='profile' options={{
        title: 'Account',
        tabBarIcon: ({ color, focused }) => (
          // <Ionicons name={focused ? 'cog' : 'cog-outline'} color={color} style={{fontSize:20}}/>
          // <AntDesign name="setting" size={24} color={color} />
          <FontAwesome name="user" size={24} color={color} />
        ),
      }} />
      <Tabs.Screen name='addBusiness' options={{
          title: 'addBusiness',
          href:null,
        }} />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  barContainer: {
    // backgroundColor:'#5E3023'
  },
});