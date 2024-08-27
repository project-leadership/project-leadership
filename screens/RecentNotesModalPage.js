import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { forwardRef, useState } from "react";

const RecentNotesModalPage = forwardRef(({}, ref) => {
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
        <Text>Recent Notes Modal Content</Text>
        <TouchableOpacity onPress={() => setVisible(false)}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
});

export default RecentNotesModalPage;

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
