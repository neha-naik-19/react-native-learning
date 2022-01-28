import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { exp } from "react-native/Libraries/Animated/Easing";

const ComponentScreen = () => {
  const greeting = `Hello Good Morning`;
  const elemnet = <Text>Hi I am here !!</Text>;
  const name = "Neha";

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text style={styles.nextText}>My Name is {name}</Text>
      {elemnet}
    </View>
  );
};
5;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    color: "red",
  },
  nextText: { fontSize: 20, color: "green" },
});

export default ComponentScreen;
