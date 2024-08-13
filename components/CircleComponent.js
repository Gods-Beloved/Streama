import React from "react";
import { View, Text } from "react-native";

function CircleComponent({ bgColor, onPress, children, style, size }) {
  return (
    <View
      className={`rounded-full ${bgColor} w-${size} h-${size} items-center justify-center`}
    >
      <View>{children}</View>
    </View>
  );
}

export default CircleComponent;
