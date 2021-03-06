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
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Square Screen"
      />
      <Button
        onPress={() => navigation.navigate("SquareReducer")}
        title="SquareReducer Screen"
      />
      <Button
        onPress={() => navigation.navigate("TxtScreen")}
        title="Text Screen"
      />
      <Button onPress={() => navigation.navigate("Box")} title="Box Screen" />
      <Button
        onPress={() => navigation.navigate("BoxCopy")}
        title="Box Screen Copy"
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
