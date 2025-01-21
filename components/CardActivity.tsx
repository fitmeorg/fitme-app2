import React, { useState } from "react";
import { Avatar, Card, Text } from "react-native-paper";
import { View } from "react-native";
import { Image } from "expo-image";
import { RadioButton } from "react-native-paper";

export default function CardActivity() {
  const [checked, setChecked] = useState("first");
  return (
    <View
      style={{
        backgroundColor: "#ffff",
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#BFBFBF",
        height: 60,
        marginTop: 8,
        justifyContent: "space-between",
      }}>
      <View style={{ backgroundColor: "#512DA8", height: 40, width: 4 }}></View>
      <Card.Title
        title="Cycling"
        titleStyle={{ color: "#BFBFBF" }}
        leftStyle={{ marginRight: 25 }}
        style={{ width: "90%" }}
        left={(props) => (
          <Image
            style={{ height: 40, width: 40 }}
            source={require("../assets/images/QuickActivity/cycling.svg")}
          />
        )}
        right={(props) => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {checked === "second" ? (
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "regular",
                  color: "#979C9E",
                }}>
                Done
              </Text>
            ) : (
              <></>
            )}
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => {
                if (checked === "second") {
                  setChecked("unchecked");
                } else {
                  setChecked("second");
                }
              }}
            />
          </View>
        )}
      />
      <View style={{ backgroundColor: "#512DA8", height: 40, width: 4 }}></View>
    </View>
  );
}
