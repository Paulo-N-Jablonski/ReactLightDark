import { StyleSheet, Text, View, Image, Switch } from "react-native";
import React, { useContext } from "react";
import { User } from "../types/user";
import { ThemeContext } from "../context/ThemeContext";
import { dark, light } from "../theme/Theme";
import { useRoute } from "@react-navigation/native";

const UserDetails = () => {

  const { theme, toggleSwitch } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme === "light" ? light.corFundo : dark.corFundo,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    text: {
      color: theme === "light" ? light.corLetra : dark.corLetra,
      fontSize: 28,
    },
    input: {
      height: 30,
      width: "90%",
      padding: 10,
      marginVertical: 20,
      color: theme === "light" ? light.corFundo : dark.corFundo,
      backgroundColor: theme === "light" ? light.corLetra : dark.corLetra,
    },
    image: {
      width: 270,
      height: 270,
      borderRadius: 2,
      margin: 10,
    },
  });

  const route = useRoute<any>();

  const { id, fname, lname, username, avatar } =
    route.params as User;
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={theme === "light" ? "#220759" : "#ed85ed"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={theme === "dark"}
      />
      <Text style={styles.text}>Complete Name: {fname} {lname}</Text>
      <Text style={styles.text}>Username: {username}</Text>
      <Image style={styles.image} source={{ uri: avatar }} />
      <Text style={styles.text}>ID: {id}</Text>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#343a40",
    color: "#FFFFFF",
  },
  text: {
    color: "#FFFFFF",
    margin: 5,
    fontSize: 20
  },
});