import React from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfilePlaceholder from './components/ProfilePlaceholder'; // Your custom profile placeholder component

const ModalComponent = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalView}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Account</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Ionicons name="close" size={24} color="#393838" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.modalContent}>
          <Text style={styles.sectionTitle}>Main</Text>
          <View style={styles.modalContainer}>
            <View style={styles.profileSectionContainer}>
              <ProfilePlaceholder />
              <View style={styles.profileText}>
                <Text style={styles.modalTit}>Richards Workplace</Text>
                <Text style={styles.profileEm}>richard@gmail.com</Text>
              </View>
            </View>

            <View style={styles.hr} />

            <TouchableOpacity style={styles.modalItem}>
              <Ionicons name="bar-chart-outline" size={24} color="#393838" />
              <Text style={styles.modalItemText}>Performance Overview</Text>
            </TouchableOpacity>
            <View style={styles.hr} />
            <TouchableOpacity style={styles.modalItem}>
              <Ionicons name="notifications-outline" size={24} color="#393838" />
              <Text style={styles.modalItemText}>Notifications</Text>
            </TouchableOpacity>
            <View style={styles.hr} />
            <TouchableOpacity style={styles.modalItem}>
              <Ionicons name="moon-outline" size={24} color="#393838" />
              <Text style={styles.modalItemText}>Dark-Mode</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Community Activity</Text>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalItem}>
              <Ionicons name="chatbox-outline" size={24} color="#393838" />
              <Text style={styles.modalItemText}>Feedback</Text>
            </TouchableOpacity>
            <View style={styles.hr} />
            <TouchableOpacity style={styles.modalItem}>
              <Ionicons name="bug-outline" size={24} color="#393838" />
              <Text style={styles.modalItemText}>Report a bug</Text>
            </TouchableOpacity>
            <View style={styles.hr} />
            <TouchableOpacity style={styles.modalItem}>
              <Ionicons name="logo-instagram" size={24} color="#393838" />
              <Text style={styles.modalItemText}>Follow us on Instagram</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    marginTop: 120,
    backgroundColor: '#fafafa',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4, 
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#333333",
  },
  modalContent: {
    flex: 1,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '600',
    marginBottom: 15,
    marginTop: 10,
  },
  profileSectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  modalTit: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '600',
  },
  profileEm: {
    fontSize: 14,
    color: '#666666',
  },
  hr: {
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    marginVertical: 16,
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  modalItemText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  hr: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 8,
  },

});

export default ModalComponent;
