import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Home = () => {
  return (
    <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ebe2aaff"
          }}>
          <Text style={{fontWeight:900,fontSize:50}}>Home</Text>
          <Link style={{borderWidth:2,padding:5}} href={"/about"}>Click here</Link>
          
        </View>
  )
}

export default Home