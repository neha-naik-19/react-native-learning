import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>HomeScreen !!</Text>
      <Button
        onPress={() =>
          /*props.navigation.navigate("Components")*/ navigation.navigate(
            "Components"
          )
        }
        title="Components Demo"
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to List Demo 1</Text>
      </TouchableOpacity> */}
      <Button
        onPress={() => navigation.navigate("ImgScreen")}
        title="Image Screen"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Counter Screen"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Color Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
