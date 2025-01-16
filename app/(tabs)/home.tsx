import { Stack, useNavigation } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ActivitiesCarousel from "@/components/ActivitiesCarousel";
import { Image } from "expo-image";
import JoinedGroup from "@/components/JoinedGroup";
import PlusModal from "@/components/PlusModal";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

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
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={{ flexDirection: "row" }}>
      <Ionicons
        onPress={() => navigation.push("Notification")}
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
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Stack.Screen
          options={{
            headerTitle: () => <Header />,
            headerRight: () => <HeaderRight />,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
            paddingVertical: 10,
            marginLeft: "5%",
          }}>
          <Text
            style={{
              fontSize: 19,
              fontWeight: 600,
              fontFamily: "Montserrat-SemiBold",
            }}>
            Quick Activity
          </Text>
          <Text
            style={{ fontSize: 12, fontWeight: "medium", color: "#714ABB" }}>
            See all
          </Text>
        </View>

        <ActivitiesCarousel />

        <Text
          style={{
            fontSize: 19,
            fontWeight: 600,
            fontFamily: "Montserrat-SemiBold",
            marginLeft: "5%",
            paddingVertical: 10,
          }}>
          Joined Group
        </Text>

        <JoinedGroup />
      </ScrollView>
      <PlusModal />
    </View>
  );
}
