import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Home from "./Pages/Home";
import UsersContextProvider from "./contexts/userContext";
import Root from "./Navigation/Root";
import {NavigationContainer} from "@react-navigation/native";
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Home></Home>
    // </View>
    <UsersContextProvider>
      <NavigationContainer>
        <Root></Root>
      </NavigationContainer>
    </UsersContextProvider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   flexDirection: "row",
  //   marginHorizontal: 10,
  //   // alignItems: "center",
  //   // justifyContent: "center",
  // },
  items: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 10,
  },
});
