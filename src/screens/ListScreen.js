import React from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";

const ListScreen = () => {
  const friends = [
    { key: "01", name: "Priti", age: 10 },
    { key: "02", name: "Nita", age: 15 },
    { key: "03", name: "Sumati", age: 25 },
    { key: "04", name: "Sneha", age: 30 },
    { key: "05", name: "Reshma", age: 35 },
    { key: "06", name: "Runal", age: 40 },
    { key: "07", name: "Shina", age: 45 },
    { key: "08", name: "Yahvi", age: 21 },
    { key: "09", name: "Vedh", age: 22 },
    { key: "10", name: "Diksha", age: 18 },
    { key: "11", name: "Priti", age: 22 },
    { key: "12", name: "Nita", age: 30 },
    { key: "13", name: "Sumati", age: 28 },
    { key: "14", name: "Sneha", age: 32 },
    { key: "15", name: "Reshma", age: 30 },
    { key: "16", name: "Runal", age: 25 },
    { key: "17", name: "Shina", age: 27 },
    { key: "18", name: "Yahvi", age: 26 },
    { key: "19", name: "Vedh", age: 24 },
    { key: "20", name: "Diksha", age: 20 },
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      // horizontal={true}
      data={friends}
      renderItem={({ item }) => {
        // element === {item : {name: "Priti"}, index : 0}
        // item === {name: "Priti"}
        return (
          <View>
            <Text style={styles.textStyle}>
              {item.name} - {item.age}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginVertical: 15,
  },
});

export default ListScreen;
