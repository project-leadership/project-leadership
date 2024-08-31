import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { forwardRef, useState } from "react";
import SettingsPage from "./SettingsPage";
import { ScrollView } from "react-native-gesture-handler";

const SettingsModalPage = forwardRef(({}, ref) => {
  const [visible, setVisible] = useState(false);

  ref.current = {
    setVisible,
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <View style={styles.modalView}>
        <Text>Settings Modal Content</Text>
        <TouchableOpacity onPress={() => setVisible(false)}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
});

export default SettingsModalPage;

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
