import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { Image } from "expo-image";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "expo-router";

export default function PlusModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleOutsidePress = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="fade">
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text
                  onPress={() => {
                    navigation.push("Create Routine");
                    setModalVisible(false);
                  }}
                  style={styles.modalOption}>
                  Create Routine
                </Text>
                <View style={styles.divider} />
                <Text
                  onPress={() => {
                    navigation.push("Routine Details");
                    setModalVisible(false);
                  }}
                  style={styles.modalOption}>
                  Routine Details
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.openButton}>
        <View style={styles.innerButton}>
          <Image
            source={require("../assets/images/plusModal/plus.svg")}
            style={{ height: "40%", width: "40%" }}
          />
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 10,
    width: "45%",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#714ABB",
  },
  modalOption: {
    fontSize: 16,
    marginVertical: 10,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#e5e5e5",
    marginVertical: 10,
  },
  openButton: {
    borderRadius: 45,
    height: 55,
    width: 55,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 20,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  innerButton: {
    borderRadius: 40,
    height: 50,
    width: 50,
    backgroundColor: "#714ABB",
    alignItems: "center",
    justifyContent: "center",
  },
});
