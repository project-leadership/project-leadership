import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfilePlaceholder from './components/ProfilePlaceholder'; // Your custom profile placeholder component

const SettingsScreen = ({ navigation }) => {

  // Function to handle Profile Button press
  const handleEditProfile = () => {
    // For now, this will show an alert. You can navigate to an "Edit Profile" screen if needed
    Alert.alert('Edit Profile Button Pressed');
    
    // Example of navigation to an Edit Profile screen (if using React Navigation):
    // navigation.navigate('EditProfile');
  };

  return (
    <View style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.profileSectionContainer}>
          <ProfilePlaceholder style={styles.largerPlaceholder} />
          <View style={styles.profileText}>
            <Text style={styles.modalTit}>Richards Workplace</Text>
            <Text style={styles.profileEm}>richard@gmail.com</Text>
          </View>
        </View>
    
        <TouchableOpacity style={styles.ProfileButton} onPress={handleEditProfile}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>

        <View style={styles.settingsContainer}>
          <TouchableOpacity style={styles.settingsItem}>
            <Ionicons name="bar-chart-outline" size={24} color="#393838" />
            <Text style={styles.settingsItemText}>Performance Overview</Text>
          </TouchableOpacity>
          <View style={styles.hr} />
          <TouchableOpacity style={styles.settingsItem}>
            <Ionicons name="notifications-outline" size={24} color="#393838" />
            <Text style={styles.settingsItemText}>Notifications</Text>
          </TouchableOpacity>
          <View style={styles.hr} />
          <TouchableOpacity style={styles.settingsItem}>
            <Ionicons name="moon-outline" size={24} color="#393838" />
            <Text style={styles.settingsItemText}>Dark-Mode</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Community Activity</Text>
        <View style={styles.settingsContainer}>
          <TouchableOpacity style={styles.settingsItem}>
            <Ionicons name="chatbox-outline" size={24} color="#393838" />
            <Text style={styles.settingsItemText}>Feedback</Text>
          </TouchableOpacity>
          <View style={styles.hr} />
          <TouchableOpacity style={styles.settingsItem}>
            <Ionicons name="bug-outline" size={24} color="#393838" />
            <Text style={styles.settingsItemText}>Report a bug</Text>
          </TouchableOpacity>
          <View style={styles.hr} />
          <TouchableOpacity style={styles.settingsItem}>
            <Ionicons name="logo-instagram" size={24} color="#393838" />
            <Text style={styles.settingsItemText}>Follow us on Instagram</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  scrollViewContent: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '600',
    marginBottom: 15,
    marginTop: 10,
  },
  settingsContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  profileSectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 25,
  },
  largerPlaceholder: {
    width: 80,
    height: 80,
  },
  profileText: {
    marginLeft: 12,
  },
  modalTit: {
    fontSize: 20,
    color: '#333333',
    fontWeight: '600',
  },
  profileEm: {
    fontSize: 16,
    color: '#666666',
  },
  hr: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 16,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  settingsItemText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  ProfileButton: {
    backgroundColor: "#393838",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  editText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  }
});

export default SettingsScreen;
