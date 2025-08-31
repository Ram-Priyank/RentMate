import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ebe2aaff"
      }}>
      <Text>Hello World!</Text>
      <Link href={"/about"}>Click here</Link>
    </View>
  );
}
