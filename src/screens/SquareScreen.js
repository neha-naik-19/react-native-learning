import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREAMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // use switch statement
    // if (color === "red") {
    //   if (red + change > 255 || red + change < 0) {
    //     return;
    //   } else {
    //     setRed(red + change);
    //   }
    // }
    // if (color === "green") {
    //   if (green + change > 255 || green + change < 0) {
    //     return;
    //   } else {
    //     setGreen(green + change);
    //   }
    // }
    // if (color === "blue") {
    //   if (blue + change > 255 || blue + change < 0) {
    //     return;
    //   } else {
    //     setBlue(blue + change);
    //   }
    // }

    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREAMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREAMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCREAMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREAMENT)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCREAMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREAMENT)}
        color="Green"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue} )`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default SquareScreen;
