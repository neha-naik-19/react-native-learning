import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  // console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>HomeScreen !!</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <TouchableOpacity
        onPress={() => console.log("TouchableOpacity Pressed ")}
      >
        <Text>Go to List Demo 1</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
