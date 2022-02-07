import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child 1</Text>
      <Text style={styles.textTwoStyle}>Child 2</Text>
      <Text style={styles.textThreeStyle}>Child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // Parent -> alignItems, justifyContent, flexDirection
  // Child -> flex, alignSelf

  viewStyle: {
    borderWidth: 5,
    borderColor: "black",
    height: 200,
    // alignItems: "flex-start",
    // alignItems: "flex-end",
    // alignItems: "center",

    // flexDirection: "row",

    // justifyContent: "space-evenly",
    // justifyContent: "space-between",
    // justifyContent: "space-around",
    // justifyContent: "center",
  },

  //Box Style layout
  //   textStyle: {
  //     borderWidth: 1,
  //     borderColor: "red",
  //     // marginVertical: 20,
  //     // marginHorizontal: 20,
  //     margin: 20,
  //   },

  //Flex style layout
  //   textFlexStyle: {
  //     borderWidth: 1,
  //     borderColor: "red",
  //   },

  textOneStyle: {
    borderWidth: 1,
    borderColor: "red",
    // margin: 20,
    // flex: 4,
    // flex: 1,
  },

  textTwoStyle: {
    borderWidth: 1,
    borderColor: "red",
    // margin: 20,
    // flex: 2,
    // flex: 1,
    // alignSelf: "flex-start",
    // alignSelf: "flex-end",
    // alignSelf: "center",
    // position: "absolute",
    // fontSize: 18,
    // top: 10,

    // position: "absolute",
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,

    ...StyleSheet.absoluteFillObject,
  },

  textThreeStyle: {
    borderWidth: 1,
    borderColor: "red",
    // margin: 20,
    // flex: 4,
    // flex: 1,
  },
});

export default BoxScreen;
