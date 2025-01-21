import { View, Text } from "react-native";
import { Image } from "expo-image";
import { ScrollView } from "react-native-gesture-handler";
import CardProfile from "@/components/CardProfile";

export default function Profile() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("../../assets/images/Profile/userProfile.svg")}
        style={{
          height: 130,
          width: 130,
          position: "absolute",
          top: -85,
          zIndex: 1,
        }}
      />
      <Text style={{ marginTop: 55, fontSize: 21, fontWeight: "medium" }}>
        Alexandro Gracias!
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 6,
        }}>
        <Image
          source={require("../../assets/images/Profile/iconLocations.jpg")}
          style={{ height: 15, width: 15 }}
        />
        <Text
          style={{
            marginLeft: 4,
            fontSize: 15,
            fontWeight: "regular",
            color: "#8A94A4",
            justifyContent: "center",
          }}>
          Durango, Mexico
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: 7 }}>
        <View style={{ alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../assets/images/Profile/streak.svg")}
              style={{ height: 16, width: 15, marginRight: 3 }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "semibold",
                color: "#022150",
              }}>
              45
            </Text>
          </View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "regular",
              color: "#79869F",
            }}>
            Streak
          </Text>
        </View>
        <View style={{ alignItems: "center", marginLeft: 30 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "semibold",
              color: "#022150",
            }}>
            2
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "regular",
              color: "#79869F",
            }}>
            Group Joined
          </Text>
        </View>
      </View>

      <CardProfile />
    </View>
  );
}
