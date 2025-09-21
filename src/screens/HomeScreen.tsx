import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";

const HomeScreen = () => {
  const { user, logout } = useContext(AuthContext)!;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {user?.email}!</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, marginBottom: 20 },
});

export default HomeScreen;
