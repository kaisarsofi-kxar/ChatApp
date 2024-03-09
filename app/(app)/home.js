import { View, Text, Button } from "react-native";
import React from "react";
import { useAuth } from "../../context/authContext";

export default function Home() {
  const { logout, user } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  console.log("user data 1", user);
  return (
    <View>
      <Text>Home</Text>
      <Button title="Sign out" onPress={handleLogout} />
    </View>
  );
}
