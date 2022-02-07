import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const COUNTER_INCREAMENT = 0;

const reducer = (state, action) => {
  // state === {count: number}
  // action === {type: 'increment' || 'decrement', payload: 1 }

  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // todo: fix this
  // let counter = 0;

  // const [counter, setCounter] = useState(0);

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // Don't do this
          // counter++;

          //Do this
          // setCounter(counter + 1);

          dispatch({ type: "increment", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          // counter--;

          // Do this
          // setCounter(counter - 1);

          dispatch({ type: "decrement", payload: 1 });
        }}
      />
      <Text style={styles.text}>Current Count : {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default CounterScreen;
