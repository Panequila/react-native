import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles";
import { useRoute } from "@react-navigation/native";
import { usersContext } from "../contexts/userContext";

const Details = () => {
  const { params } = useRoute();
  const { users } = useContext(usersContext);
  const [user, setUser] = useState();

  useEffect(() => {
    users.map((user) => {
      user.id === params ? setUser(user) : user;
    });
  }, []);

  if (!user)
    return (
      <View style={[styles.container, styles.userDetails]}>
        <Text style={styles.infoTxt}>Try again !</Text>
      </View>
    );

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.userDetails}>
        <Image
          style={{ width: 50, height: 50 }}
          source={"https://img.freepik.com/free-icon/user_318-159711.jpg"}
          alt="there is no image in this json use this as a placeholder for now"
        />
        <View style={styles.txtContainer}>
          <Text style={styles.titleTxt}>Name : </Text>
          <Text style={styles.infoTxt}>{user.name}</Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.titleTxt}>Email : </Text>
          <Text style={styles.infoTxt}>{user.email}</Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.titleTxt}>Phone : </Text>
          <Text style={styles.infoTxt}>{user.phone}</Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.titleTxt}>Website : </Text>
          <Text style={styles.infoTxt}>{user.website}</Text>
        </View>
      </View>
    </View>
  );
};

export default Details;
