import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import HomeworkModalPage from './HomeworkModalPage';
import HomeworkPage from './HomeworkPage';

const continueItems = [
  {
    title: "Introduction",
    author: "Unknown Author",
    progress: "PDF • 3%",
    image: require('../assets/peter.jpg'),
    backgroundColor: "#FDEDEC",
  },
  {
    title: "crucial conv",
    author: "Robert W. Straver",
    progress: "PDF • 5%",
    image: require('../assets/crucial.jpg'),
    backgroundColor: "#E8F8F5",
  },
  {
    title: "how to ",
    author: "John Doe",
    progress: "PDF • 10%",
    image: require('../assets/madetostick.jpg'),
    backgroundColor: "#FEF9E7",
  },
];

const NotesPage = () => {
  const [quoteModalVisible, setQuoteModalVisible] = useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [recentNotesModalVisible, setRecentNotesModalVisible] = useState(false);
  const [profileModalVisible, setProfileModalVisible] = useState(false);

  const homeworkPage = useRef(null);

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Welcome User</Text>
        <TouchableOpacity onPress={() => setProfileModalVisible(true)}>
          <View style={styles.progressContainer}>
            <View style={styles.progressCircle}>
              <View style={styles.progressArc} />
              <Text style={styles.progressText}>0</Text>
              <Text style={styles.progressTotal}>/ 5</Text>
            </View>
            <Image
              source={require('../assets/profile.png')}
              style={styles.avatar}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* Horizontal Scroll for Continue Items */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.continueList}>
          {continueItems.map((item, index) => (
            <View key={index} style={[styles.continueItem, { backgroundColor: item.backgroundColor }]}>
              <Image source={item.image} style={styles.bookCover} />
              <View style={styles.continueDetails}>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.bookAuthor}>{item.author}</Text>
                <Text style={styles.bookProgress}>{item.progress}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Quote Container */}
      <TouchableOpacity onPress={() => setQuoteModalVisible(true)}>
        <View style={styles.quoteSection}>
          <View style={styles.quoteContainer}>
            <Text style={styles.quoteTitle}>Quote of the Day</Text>
            <Text style={styles.quoteText}>"Pain + Reflection = Progress" - Ray Dalio</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Icon and Open Section */}
      <View style={styles.iconContainer}>
        <Text style={styles.openText}>Open</Text>
        <View style={styles.iconItem}>
          <Feather name="share" size={20} color="grey" />
          <Text style={styles.iconLabel}>Share</Text>
        </View>
        <View style={styles.iconItem}>
          <Feather name="heart" size={20} color="grey" />
          <Text style={styles.iconLabel}>Favourite</Text>
        </View>
      </View>

      {/* Horizontal Line Above Settings */}
      <View style={styles.hr} />

      {/* Settings Section */}
      <TouchableOpacity onPress={() => setSettingsModalVisible(true)}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <View style={styles.settingsSubHeaderContainer}>
            <Text style={styles.subHeader}>Manage your Account and Preferences, Get Help, and More...</Text>
            <Feather name="settings" size={45} marginRight={-35} color="black" style={styles.settingsIcon} />
          </View>
        </View>
      </TouchableOpacity>

      {/* Horizontal Line Above Homework */}
      <View style={styles.hr} />

      {/* Homework Section */}
      <TouchableOpacity onPress={() => homeworkPage.current.setVisible(true)}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Homework</Text>
          <Text style={styles.homeworkText}>Read Chapter 1 of "Principles" by Ray Dalio</Text>
        </View>
      </TouchableOpacity>

      {/* New Section: Recent Notes */}
      <View style={styles.hr} />
      <TouchableOpacity onPress={() => setRecentNotesModalVisible(true)}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Recent Notes</Text>
          <View style={styles.recentNotesContainer}>
            <View style={styles.recentNoteItem}>
              <Feather name="file-text" size={24} color="#4A90E2" />
              <View style={styles.recentNoteDetails}>
                <Text style={styles.recentNoteTitle}>Chapter 1 Summary</Text>
                <Text style={styles.recentNoteDate}>Last edited: 2 days ago</Text>
              </View>
            </View>
            <View style={styles.recentNoteItem}>
              <Feather name="file-text" size={24} color="#4A90E2" />
              <View style={styles.recentNoteDetails}>
                <Text style={styles.recentNoteTitle}>Key Concepts</Text>
                <Text style={styles.recentNoteDate}>Last edited: 1 week ago</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Modal components */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={quoteModalVisible}
        onRequestClose={() => setQuoteModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text>Quote Modal Content</Text>
          <TouchableOpacity onPress={() => setQuoteModalVisible(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={settingsModalVisible}
        onRequestClose={() => setSettingsModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text>Settings Modal Content</Text>
          <TouchableOpacity onPress={() => setSettingsModalVisible(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <HomeworkModalPage ref={homeworkPage} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={recentNotesModalVisible}
        onRequestClose={() => setRecentNotesModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text>Recent Notes Modal Content</Text>
          <TouchableOpacity onPress={() => setRecentNotesModalVisible(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={profileModalVisible}
        onRequestClose={() => setProfileModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text>Profile Modal Content</Text>
          <TouchableOpacity onPress={() => setProfileModalVisible(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#fafafa',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    marginRight: 16,
    position: 'relative',
  },
  progressArc: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    borderWidth: 3,
    borderColor: '#ccc',
    borderRadius: 20,
    borderBottomColor: 'transparent',
    transform: [{ rotate: '360deg' }],
  },
  progressText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressTotal: {
    fontSize: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  continueList: {
    flexDirection: 'row',
  },
  continueItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 8,
    borderRadius: 8,
    minWidth: 200,
  },
  bookCover: {
    width: 40,
    height: 60,
    resizeMode: 'cover',
    marginRight: 16,
  },
  continueDetails: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 14,
    color: '#888',
  },
  bookProgress: {
    fontSize: 12,
    color: '#888',
  },
  quoteSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  quoteContainer: {
    backgroundColor: '#393838',
    padding: 16,
    height: 150,
    width: 340,
    borderRadius: 8,
  },
  quoteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  iconItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLabel: {
    marginLeft: 4,
    fontSize: 14,
    color: 'grey',
  },
  openText: {
    fontSize: 14,
    color: 'grey',
  },
  sectionContainer: {
    backgroundColor:'#fafafa',
    padding: 16,
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  settingsSubHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    width: 280,
  },
  subHeader: {
    fontSize: 14,
    color: 'grey',
    flex: 1,
  },
  settingsIcon: {
    marginLeft: 8,
  },
  homeworkText: {
    fontSize: 16,
  },
  hr: {
    marginTop: 35,
    height: 1.5,
    backgroundColor: '#ddd',
    marginVertical: 16,
    marginHorizontal: 16,
  },
  recentNotesContainer: {
    marginTop: 16,
  },
  recentNoteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  recentNoteDetails: {
    marginLeft: 16,
  },
  recentNoteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recentNoteDate: {
    fontSize: 14,
    color: '#888',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});

export default NotesPage;
