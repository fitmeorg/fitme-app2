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

export default function SignUp() {
  const [email, onChangeEmail] = React.useState("");
  const [name, onChangeName] = React.useState("");
  const [phoneNumber, onChangePhoneNumber] = React.useState("");


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
        Sign Up to continue
      </Text>
      <TextInput
        style={[style.input, { marginTop: 16 }]}
        value={name}
        onChangeText={onChangeName}
        placeholder="Enter your full name"
      />
      <TextInput
        style={[style.input, { marginTop: 16 }]}
        value={email}
        onChangeText={onChangeEmail}
        placeholder="Enter your email"
      />
      <View style={style.input}>
        <Text style={{ color: "#aaa", marginRight: 14, fontSize: 14 }}>
          +52
        </Text>
        <View
          style={{
            height: "45%",
            width: 1,
            backgroundColor: "#ccc",
            marginRight: 6,
          }}></View>
        <TextInput
          style={{ width: "80%", fontSize: 14 }}
          placeholder="Phone Number"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={onChangePhoneNumber}
        />
      </View>

      <View style={style.input}>
        <TextInput
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          style={{ width: "90%" }}
          placeholder="Enter Password"
          placeholderTextColor="#aaa"
        />
        <MaterialCommunityIcons
          name={showPassword ? "eye-off" : "eye"}
          size={24}
          color="#aaa"
          onPress={toggleShowPassword}
        />
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
          Sign Up
        </Text>
      </TouchableOpacity>

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
          Already have an Account?{" "}
          <Text
            onPress={() => navigation.push("LogIn")}
            style={{
              fontSize: 14,
              color: "#461B93",
              fontWeight: 500,
            }}>
            Log In
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
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },
});
