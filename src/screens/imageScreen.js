import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/imageDetail";

const imageScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Image Screen</Text>

      <ImageDetail
        title="Forest"
        img={require("../../assets/forest.jpg")}
        imgScore={7}
      />
      <ImageDetail
        title="Beach"
        img={require("../../assets/beach.jpg")}
        imgScore={9}
      />
      <ImageDetail
        title="Mountain"
        img={require("../../assets/mountain.jpg")}
        imgScore={5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default imageScreen;
