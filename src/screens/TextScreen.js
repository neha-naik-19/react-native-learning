import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newText) => setName(newText)}
      />
      <Text>My name is : {name}</Text>
      <Text></Text>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />
      {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
