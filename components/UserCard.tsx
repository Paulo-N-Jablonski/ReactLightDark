import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { User } from "../types/user";
import { useNavigation } from "@react-navigation/native";

interface UserProps {
  user: User;
}

const UserCard: FC<UserProps> = ({ user }) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("UserDetails", user)}
    >
      <Text style={styles.text}>{user.fname} {user.lname}</Text>
      <Image style={styles.image} source={{ uri: user.avatar }} />
    </TouchableOpacity>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6c757d",
    padding: 16,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    margin: 10,
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 2,
    margin: 10,
    resizeMode: "contain",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20
  },
});