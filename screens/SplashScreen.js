import React from "react";
import { View, Text, ImageBackground } from "react-native";

function SplashScreen() {
  return (
    <ImageBackground
      className="flex-1 "
      source={require("../assets/music_bg.jpg")}
      resizeMode="cover"
    ></ImageBackground>
  );
}

export default SplashScreen;
