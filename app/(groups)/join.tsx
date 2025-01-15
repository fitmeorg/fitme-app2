import * as React from "react";
import { Searchbar } from "react-native-paper";
import { View, StyleSheet, ScrollView } from "react-native";
import JoinGroups from "@/components/JoinGroup";

const JoinGroup = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.floatingBox}>
        <Searchbar
          placeholder="Search Groups"
          placeholderTextColor="#A0A0A0"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchbar}
          inputStyle={styles.inputStyle}
          iconColor="#A0A0A0"
        />
      </View>
      <ScrollView style={{ marginTop: 40 }}>
        <JoinGroups />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  floatingBox: {
    height: 48,
    width: "90%",
    backgroundColor: "#ffffff",
    position: "absolute",
    top: -25,
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  searchbar: {
    width: "100%",
    backgroundColor: "transparent",
    elevation: 0,
  },
  inputStyle: {
    fontSize: 16,
    color: "#A0A0A0",
    fontWeight: "600",
  },
});

export default JoinGroup;
