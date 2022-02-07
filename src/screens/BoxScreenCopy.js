import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOne} />
      <View style={styles.viewTwo} />
      <View style={styles.viewThree} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 2,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  viewOne: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },

  viewTwo: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
    // marginTop: 150,
    //top: 50,
    alignSelf: "flex-end",
  },
  viewThree: {
    height: 100,
    width: 100,
    backgroundColor: "green",
  },
});

export default BoxScreen;
