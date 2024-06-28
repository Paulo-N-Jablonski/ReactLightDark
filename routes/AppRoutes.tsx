import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import UserDetails from "../screens/UserDetails";
import { StackParamList } from "../types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

const AppRoutes = () => {
  const Stack = createNativeStackNavigator<StackParamList>();
  const Tab = createBottomTabNavigator();

  const StackRoutes = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          statusBarColor: "#252525",
          headerTintColor: "#fff",
          title: "List of Users",
          headerStyle: {
            backgroundColor: "#252525",
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
      </Stack.Navigator>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#252525",
        },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Return"
        component={StackRoutes}
        options={{
          tabBarIcon: () => <Ionicons name="radio-button-on" size={24} color="white" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;