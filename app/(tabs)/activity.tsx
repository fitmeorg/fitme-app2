import CardActivity from "@/components/CardActivity";
import CardRecentActivity from "@/components/CardRecentActivity";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function Activity() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          width: "90%",
          height: 270,
          backgroundColor: "#ffff",
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
          borderColor: "#BFBFBF",
          alignItems: "center",
        }}>
        <Text
          style={{
            width: "90%",
            marginTop: 11,
            fontWeight: "semibold",
            fontSize: 16,
          }}>
          Yours Activities
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ justifyContent: "center" }}>
          <CardActivity />
          <CardActivity />
          <CardActivity />
          <CardActivity />
        </ScrollView>
      </View>
      <View
        style={{
          width: "90%",
          height: 170,
          backgroundColor: "#ffff",
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
          borderColor: "#BFBFBF",
          alignItems: "center",
        }}>
        <Text
          style={{
            width: "90%",
            marginTop: 11,
            fontWeight: "semibold",
            fontSize: 16,
          }}>
          Recent Activities
        </Text>
        <CardRecentActivity />
      </View>
      <View
        style={{
          flex: 1,
          width: "90%",
          justifyContent: "flex-end",
          marginBottom: 27,
        }}>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            height: 68,
            backgroundColor: "#714ABB",
            borderRadius: 15,
          }}>
          <Text
            style={{
              color: "#ffff",
              fontSize: 17,
              fontWeight: "semibold",
            }}>
            Add New Activity
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
