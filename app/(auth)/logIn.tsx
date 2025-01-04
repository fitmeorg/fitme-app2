import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function LogIn() {
  const [email, onChangeEmail] = React.useState("");
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("../../assets/images/fitmeLogo.svg")}
        style={{ height: 100, width: 100, marginTop: 20 }}
      />
      <Text style={{ fontSize: 15, color: "#828284", marginTop: 18 }}>
        Login to continue
      </Text>
      <TextInput
        style={[style.input, { marginTop: 50 }]}
        value={email}
        placeholder="Enter your email"
        onChangeText={onChangeEmail}
      />
      <View style={style.input}>
        <TextInput
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          style={{ width: "80%" }}
          placeholder="Enter Password"
          placeholderTextColor="#aaa"
        />
        <MaterialCommunityIcons
          name={showPassword ? "eye-off" : "eye"}
          size={24}
          color="#aaa"
          style={style.icon}
          onPress={toggleShowPassword}
        />
      </View>

      <View style={{ alignItems: "flex-end", width: "90%" }}>
        <Text
          style={{ fontSize: 13, fontWeight: "semibold", color: "#FFB703" }}>
          Forgot Password?
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.push("HomePage")}
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          height: 68,
          width: "90%",
          marginTop: 24,
          backgroundColor: "#714ABB",
          borderRadius: 15,
        }}>
        <Text
          style={{
            color: "#ffff",
            fontSize: 17,
            fontWeight: "semibold",
          }}>
          Login
        </Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 18, marginTop: 30 }}>Sign in with</Text>

      <Image
        source={require("../../assets/images/googleLogo.svg")}
        style={{ height: 43, width: 43, marginTop: 30 }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: 20,
        }}>
        <Text
          style={{
            fontSize: 14,
            color: "#404B52",
          }}>
          Don't have an account?{" "}
          <Text
            onPress={() => navigation.push("Sign Up")}
            style={{
              fontSize: 14,
              color: "#461B93",
              fontWeight: 500,
            }}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}

export const style = StyleSheet.create({
  input: {
    width: "90%",
    height: 60,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
  },
});
