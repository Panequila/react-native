import { StatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Pressable,
  FlatList,
  SectionList,
} from "react-native";
import styles from "../styles";
import { useCallback, useState } from "react";
import { TouchableOpacity } from "react-native-web";
import routes from "../Routes/routes";

export default function App({ navigation }) {
  const sections = [
    {
      id: "0",
      title: "A",
      data: [
        {
          id: "0",
          text: "Ahmed",
          image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
        },
        {
          id: "1",
          text: "Abdo",
          image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
        },
        {
          id: "2",
          text: "Ali",
          image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
        },
      ],
    },
    {
      id: "1",
      title: "B",
      data: [
        {
          id: "3",
          text: "Badr",
          image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
        },
        {
          id: "4",
          text: "Basant",
          image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
        },
        {
          id: "5",
          text: "Baher",
          image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
        },
      ],
    },
    {
      id: "2",
      title: "C",
      data: [
        {
          id: "6",
          text: "Carol",
          image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
        },
        {
          id: "7",
          text: "Carol",
          image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
        },
        {
          id: "8",
          text: "Carol",
          image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
        },
      ],
    },
    {
      id: "3",
      title: "D",
      data: [
        {
          id: "9",
          text: "Daniel",
          image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
        },
        {
          id: "10",
          text: "Daniel",
          image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
        },
        {
          id: "11",
          text: "Daniel",
          image: "https://img.freepik.com/free-icon/user_318-159711.jpg",
        },
      ],
    },
  ];
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: "row", alignItems: "center", margin: 10 }}>
      <Image source={item.image} style={{ width: 50, height: 50 }} />
      <Text style={{ marginLeft: 10 }}>{item.text}</Text>
      {/* <View>
        <TouchableOpacity style={styles.btn} title="See Details">
          <Text style={styles.btnTxt}>See Details</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SectionList
          sections={sections}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section }) => (
            <Text style={styles.headerStyle}>{section.title}</Text>
          )}
          renderItem={renderItem}
        ></SectionList>
        <View style={styles.next}>
          <TouchableOpacity
            // style={styles.Homebtn}
            style={styles.Homebtn}
            onPress={() => navigation.navigate(routes.users)}
          >
            <Text
              style={{
                color: "3C8767",
                fontWeight: "bold",
                margin: "2",
                textAlign: "center",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
