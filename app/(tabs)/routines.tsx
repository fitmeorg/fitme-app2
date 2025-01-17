import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CardRoutine from "@/components/CardRoutine";
import PlusModalRoutine from "@/components/PlusModalRoutine";
import { useState } from "react";

export default function Routines() {
  const width = Dimensions.get("window").width;
  const widthRoutineNav = (width * 85) / 100;
  const [currentTab, setCurrentTab] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            width: widthRoutineNav,
            height: 70,
            backgroundColor: "#ffff",
            position: "absolute",
            top: -25,
            zIndex: 1,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 3,
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}>
          <TouchableOpacity
            onPress={() => setCurrentTab(false)}
            style={{
              backgroundColor: currentTab === false ? "#704AB9" : "#EBEAEA",
              borderRadius: 5,
              width: (widthRoutineNav * 50) / 100 - 15,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Text
              style={{
                fontSize: 15,
                color: currentTab === false ? "#ffff" : "#767575",
                fontWeight: 500,
              }}>
              My Routine
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCurrentTab(true)}
            style={{
              backgroundColor: currentTab === true ? "#704AB9" : "#EBEAEA",
              borderRadius: 5,
              width: (widthRoutineNav * 50) / 100 - 15,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Text
              style={{
                fontSize: 15,
                color: currentTab === false ? "#767575" : "#ffff",
              }}>
              Assigned Routine
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {currentTab === true ? (
        <ScrollView
          style={{ marginTop: 75, width: "100%" }}
          contentContainerStyle={{ alignItems: "center" }}>
          <CardRoutine />
          <CardRoutine />
          <CardRoutine />
          <CardRoutine />
          <CardRoutine />
          <CardRoutine />
        </ScrollView>
      ) : (
        <ScrollView
          style={{ marginTop: 75, width: "100%" }}
          contentContainerStyle={{ alignItems: "center" }}>
          <CardRoutine />
          <CardRoutine />
        </ScrollView>
      )}
      <PlusModalRoutine />
    </View>
  );
}
