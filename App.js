import { useState } from "react";
import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function App() {
  const [randomcolor, setrandomcolor] = useState("rgb(32,0,126)");
  const changebackcolor = () => {
    let color =
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";
    setrandomcolor(color);
  };
  return (
    <View
      style={{
        backgroundColor: randomcolor,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={changebackcolor}>
        <View style={{ width: "80%", height: 44, backgroundColor: "black" }}>
          <Text style={{ fontSize: 33, color: "white" }}>
            click to change color
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
