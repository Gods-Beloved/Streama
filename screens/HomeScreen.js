import React from "react";
import { View, Text, Image } from "react-native";
import CircleComponent from "../components/CircleComponent";

function HomeScreen() {
  return (
    <View>
      <CircleComponent bgColor="bg-slate-400" size={40}>
        <Text>Welcome to Streama!</Text>
      </CircleComponent>

      <CircleComponent bgColor="bg-black" size={40}>
        <Image source={require("../assets/continent_logo.png")} />
      </CircleComponent>
    </View>
  );
}

export default HomeScreen;
