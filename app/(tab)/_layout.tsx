import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';


const TabRoot = () => {
  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: '#00695c',
        height: 64
      },
      headerShown: false
    }}>
      <Tabs.Screen name="home" options={{
        title: "Home",
        tabBarIcon: ({ color }) => (
          <FontAwesome5 size={26} name="building" color="#ebe2aaff" />
        ),
        tabBarActiveTintColor: "#e07a5f",
      }} />


      <Tabs.Screen name="search" options={{
        title: "Search", 
        tabBarIcon: ({ color }) => (
          <View style={{
            width: 60,
            height: 60,
            backgroundColor: "#ebe2aaff",
            borderRadius: 30,
            padding: 4,       // space inside border
            alignItems: "center",
            justifyContent: "center"
          }}>
            <FontAwesome5 size={26} name="searchengin" color="#e07a5f" />
          </View>
        ),
        tabBarActiveTintColor: "#e07a5f",
      }} />

      <Tabs.Screen name="liked" options={{
        title: "Liked",
        tabBarIcon: ({ color }) => (
          <FontAwesome5 size={26} name="gratipay" color="#ebe2aaff" />
        ),
        tabBarActiveTintColor: "#e07a5f",
      }} />
    </Tabs>
  )
}

export default TabRoot