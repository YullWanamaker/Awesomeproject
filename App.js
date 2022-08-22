import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        height: 200,
        padding: 50,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "900",
        }}
      >
        Hello World!
      </Text>
      <Image
        style={{
          width: 200,
          height: 200,
        }}
        source={{
          uri: "https://s2.coinmarketcap.com/static/img/coins/64x64/1698.png",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
