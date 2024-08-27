import { Modal, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { forwardRef, useState } from "react";

const HomeworkModalPage = forwardRef(({}, ref) => {
  const [homeworkModalVisible, setHomeworkModalVisible] = useState(false);

  ref.current = {
    setVisible: setHomeworkModalVisible,
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={homeworkModalVisible}
      onRequestClose={() => setHomeworkModalVisible(false)}
    >
      <View style={styles.modalView}>
        <Text>Homework Modal Content</Text>
        <TouchableOpacity onPress={() => setHomeworkModalVisible(false)}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
});

export default HomeworkModalPage;

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
