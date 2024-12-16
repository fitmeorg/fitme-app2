import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.screen}>
      <View style={[styles.container, styles.dropShadow]}>
        <Text style={styles.title}>Welcome</Text>
        <Link push href="/(auth)/logIn" style={styles.link}>
          <Text style={styles.linkText}>Login</Text>
        </Link>
        <Link push href="/(auth)/signUp" style={styles.link}>
          <Text style={styles.linkText}>Signup</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#ffffff",
  },
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    height: "47%",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  link: {
    marginVertical: 10,
  },
  linkText: {
    fontSize: 18,
    color: "blue",
  },
  dropShadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 36,
    elevation: 30,
  },
});
