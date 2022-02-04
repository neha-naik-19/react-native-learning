import React, { useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounterReducer from "../components/ColorCounterReducer";

const COLOR_INCREAMENT = 15;

const reducer = (state, action) => {
  // state === {red: number, green: number, blue:number}
  // action === {colorToChange : 'red' || 'green' || 'blue', amount: 15 || -15}

  switch (action.colorToChange) {
    case "red":
      if (state.red + action.amount > 255 || state.red + action.amount < 0) {
        return;
      }
      return { ...state, red: state.red + action.amount };
    case "green":
      if (
        state.green + action.amount > 255 ||
        state.green + action.amount < 0
      ) {
        return;
      }
      return { ...state, green: state.green + action.amount };
    case "blue":
      if (state.blue + action.amount > 255 || state.blue + action.amount < 0) {
        return;
      }
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreenReducer = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounterReducer
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREAMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREAMENT })
        }
        color="Red"
      />
      <ColorCounterReducer
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREAMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREAMENT })
        }
        color="Blue"
      />
      <ColorCounterReducer
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREAMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREAMENT })
        }
        color="Green"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue} )`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default SquareScreenReducer;
