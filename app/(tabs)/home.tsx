import { Stack } from "expo-router";
import { View, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Header = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        style={{ height: 40, width: 40, borderRadius: 20 }}
        source={require("../../assets/images/userExample/jake.jpg")}></Image>
      <View style={{ marginLeft: 10 }}>
        <Text
          style={{
            color: "#FFFF",
            fontSize: 12,
            fontFamily: "Montserrat-SemiBold",
            fontWeight: "regular",
          }}>
          Happy back
        </Text>
        <Text
          style={{
            color: "#FFFF",
            fontSize: 16,
            fontWeight: "bold",
          }}>
          Alexandro!
        </Text>
      </View>
    </View>
  );
};

const HeaderRight = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Ionicons
        name="notifications-outline"
        size={30}
        color="white"
        style={{ marginRight: 5 }}
      />
      <View
        style={{
          height: 34,
          width: 67,
          backgroundColor: "#BC98FC",
          marginRight: 25,
          borderRadius: 17,
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}>
        <Image source={require("../../assets/images/header/streakFlame.png")} />
        <Text
          style={{
            marginLeft: 4,
            fontSize: 21,
            fontWeight: "regular",
          }}>
          0
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontWeight: "regular",
          }}>
          Days
        </Text>
      </View>
    </View>
  );
};

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: () => <Header />,
          headerRight: () => <HeaderRight />,
        }}
      />
      <Text onPress={() => navigation.push("Create Routine")}>
        create group
      </Text>
      <Text onPress={() => navigation.push("Join Group")}>join group</Text>
      <Text onPress={() => navigation.push("Group Details")}>
        group details
      </Text>
    </View>
  );
}
