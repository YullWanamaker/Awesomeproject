import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, ScrollView } from "react-native-web";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <view style={{ height: 300 }}></view>
        <view style={{ heigt: 300 }}>
          <Textinput
            style={{
              borderWidth: 1,
              padding: 10,
            }}
            placeholder="메뉴입력"
          />
        </view>
      </ScrollView>
    </SafeAreaView>
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
