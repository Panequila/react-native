import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import styles from "../styles";
import Icon from 'react-native-vector-icons/FontAwesome';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { TextInput } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import axios from "axios";
import routes from "../Routes/routes";
import { usersContext } from "../contexts/userContext";

const Users = ({ navigation }) => {
  const { users } = useContext(usersContext);

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleSearchInput = (input) => {
    setSearchInput(input);
  };

  const searchData = (input) => {
    const newData = users.filter((user) => {
      const lowerCaseUser = user.name.toLocaleLowerCase();
      const lowerCaseInput = input.toLocaleLowerCase();
      return lowerCaseUser.indexOf(lowerCaseInput) > -1;
    });
    setFilteredUsers(newData);
  };

  const handleSearch = (input) => {
    handleSearchInput(input);
    searchData(input);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#242424" barStyle="light-contact" />
      <TextInput
        style={styles.txtInput}
        placeholder="Search"
        // placeholderTextColor=''
        onChangeText={handleSearch}
        value={searchInput}
      />

      <ScrollView style={styles.userContainer}>
        {filteredUsers.map((user) => (
          <View style={styles.user} key={user.id}>
            <Image
              style={{ width: 50, height: 50 }}
              source={"https://img.freepik.com/free-icon/user_318-159711.jpg"}
            />
            <Text style={styles.userTxt}>{user.name}</Text>
            <TouchableOpacity
              style={styles.userBtn}
              onPress={() => navigation.navigate(routes.details, user.id)}
            >
              <Icon name="arrow-right" size={30} color="black" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Users;
