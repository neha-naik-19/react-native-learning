import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
  // todo: fix this
  // let counter = 0;

  const [counter, setCounter] = useState(0);

  console.log("rendered");

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // Don't do this
          // counter++;
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          // counter--;
          setCounter(counter - 1);
        }}
      />
      <Text style={styles.text}>Current Count : {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default CounterScreen;
