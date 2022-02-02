import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorScreen = () => {
  // todo: fix this
  // let counter = 0;

  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />

      <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default ColorScreen;
