import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../Pages/Home";
import Users from "../Pages/Users";
import styles from "../styles";
import routes from "../Routes/routes";
import details from "../Pages/details";

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.home}
        component={Home}
        options={{
          title: "Home",
          headerStyle: styles.navbar,
          headerTintColor: "082E49",
        }}
      />
      <Stack.Screen
        name={routes.users}
        component={Users}
        options={{
          title: "Users",
          headerStyle: styles.navbar,
          headerTintColor: "082E49",
        }}
      />
      <Stack.Screen
        name={routes.details}
        component={details}
        options={{
          title: "User Info",
          headerStyle: styles.navbar,
          headerTintColor: "082E49",
        }}
      />
    </Stack.Navigator>
  );
};

export default Root;