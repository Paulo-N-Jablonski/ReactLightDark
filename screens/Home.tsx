import { StyleSheet, Text, View, FlatList, Switch } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { User } from "../types/user";
import { ThemeContext } from "../context/ThemeContext";
import { dark, light } from "../theme/Theme";
import ProductCard from "../components/UserCard";

const Home = () => {

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
      marginBottom: 10,
      padding: 10,
      marginVertical: 20,
      color: theme === "light" ? light.corFundo : dark.corFundo,
      backgroundColor: theme === "light" ? light.corLetra : dark.corLetra,
    },
  });

  const [userList, setUserList] = useState<User[]>([]);
  const URL = "https://melivecode.com/api/users";

  const getUser = async () => {
    try {
      const response = await axios.get<User[]>(
        `${URL}`
      );
      setUserList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={theme === "light" ? "#220759" : "#ed85ed"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={theme === "dark"}
      />
      <Text style={styles.text}>Users</Text>
      <FlatList
        data={userList}
        renderItem={({ item }) => <ProductCard user={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Home;