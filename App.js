// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import { LinearGradient } from "expo";

// import HomeScreen from "./src/screens/HomeScreen";
// import ComponentScreen from "./src/screens/componentsScreen";
// import ListScreen from "./src/screens/ListScreen";

// import { createStackNavigator } from "react-navigation-stack";

// const rootStack = createStackNavigator({
//   Home: HomeScreen,
//   Comp: ComponentScreen,
//   ListScrn: ListScreen,
// });

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" /> */}
//       <StatusBar style="light" />
//       <rootStack />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/componentsScreen";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
