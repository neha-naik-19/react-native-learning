import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const imageDetail = ({ title, img, imgScore }) => {
  return (
    <View>
      <Image source={img} />
      <Text style={styles.text}> {title} </Text>
      <Text style={styles.text}>Image Score - {imgScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default imageDetail;
