import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Import Feather icons

const SettingsPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <Icon name="user" size={60} color="#fff" />
            </View>
            <View style={styles.headerInfo}>
              <Text style={styles.headerText}>Guest Anonymous</Text>
              <Text style={styles.headerDescription}>Id: 661349977</Text>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={() => { /* Handle close */ }}>
              <Icon name="x" size={35} color="#000" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.editProfileButton} onPress={() => { /* Handle edit profile */ }}>
            <Text style={styles.editProfileText}>Edit profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Community</Text>
          <TouchableOpacity style={styles.section} onPress={() => { /* Handle navigation */ }}>
            <Text style={styles.sectionText}>About Us</Text>
            <Icon name="arrow-right" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.section} onPress={() => { /* Handle navigation */ }}>
            <Text style={styles.sectionText}>Community Guidelines</Text>
            <Icon name="arrow-right" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.section} onPress={() => { /* Handle navigation */ }}>
            <Text style={styles.sectionText}>Support</Text>
            <Icon name="arrow-right" size={20} color="#000" />
          </TouchableOpacity>

          <Text style={styles.sectionHeader}>Account</Text>
          <TouchableOpacity style={styles.section} onPress={() => { /* Handle navigation */ }}>
            <Text style={styles.sectionText}>Account Settings</Text>
            <Icon name="arrow-right" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.section} onPress={() => { /* Handle navigation */ }}>
            <Text style={styles.sectionText}>Privacy</Text>
            <Icon name="arrow-right" size={20} color="#000" />
          </TouchableOpacity>

          <Text style={styles.sectionHeader}>More Options</Text>
          <TouchableOpacity style={styles.section} onPress={() => { /* Handle navigation */ }}>
            <Text style={styles.sectionText}>Help & Feedback</Text>
            <Icon name="arrow-right" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.section} onPress={() => { /* Handle navigation */ }}>
            <Text style={styles.sectionText}>Terms & Conditions</Text>
            <Icon name="arrow-right" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.section} onPress={() => { /* Handle navigation */ }}>
            <Text style={styles.sectionText}>Log Out</Text>
            <Icon name="arrow-right" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#fafafa',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '110%',
    marginBottom: 10,
  },
  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: 100,
    backgroundColor: '#393938',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    marginLeft: 10,
  },
  headerInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 23,
    fontWeight: '500',
    marginLeft:-10,
  },
  headerDescription: {
    color: "grey",
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
    marginLeft: -60,
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  editProfileButton: {
    backgroundColor: '#393838',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
    height: "17%",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
  },
  editProfileText: {
    fontSize: 18,
    color: "white",
    textAlign: 'center',
  },
  sectionContainer: {
    marginTop: -85,
    width: '90%',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 5,
    width:"95%"
  },
  sectionText: {
    fontSize: 16,
  },
});

export default SettingsPage;