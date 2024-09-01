import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Modal, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const continueItems = [
  {
    // image: require('../assets/being-creative.png'),
    backgroundColor: "white",
    title: "Being Creative",
    author: "Author Name",
    progress: "50% complete",
  },
  {
    // image: require('../assets/biz.png'),
    backgroundColor: "white",
    title: "Business Deal",
    author: "Author Name",
    progress: "30% complete",
  },
  {
    // image: require('../assets/strategy.png'),
    backgroundColor: "white",
    title: "Strategy",
    author: "Author Name",
    progress: "75% complete",
  },
];

const NotesPage = ({ navigateTo }) => {
  const [quoteModalVisible, setQuoteModalVisible] = useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [homeworkModalVisible, setHomeworkModalVisible] = useState(false);
  const [recentNotesModalVisible, setRecentNotesModalVisible] = useState(false);
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}> User</Text>
        <View style={styles.progressContainer}>
          <TouchableOpacity onPress={() => setProfileModalVisible(true)}>
            <View style={styles.progressCircle}>
              <View style={styles.progressArc} />
              <Text style={styles.progressText}>0</Text>
              <Text style={styles.progressTotal}>/ 5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSettingsModalVisible(true)}>
            <Image
              source={require('../assets/profile.png')}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Horizontal Scroll for Continue Items */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.continueList}>
          {continueItems.map((item, index) => (
            <View 
              key={index} 
              style={[
                styles.continueItem, 
                { backgroundColor: item.backgroundColor },
                styles.continueItemShadow
              ]}
            >
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
      <TouchableOpacity onPress={() => navigateTo("quote")}>
        <View style={styles.quoteSection}>
          <View style={styles.quoteContainer}>
            <Text style={styles.quoteTitle}>Quote of the Day</Text>
            <Text style={styles.quoteText}>"Pain + Reflection = Progress" - Ray Dalio</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Icon and Open Section */}
      <View style={styles.iconContainer}>
        <View style={styles.iconItem}>
          <Text style={styles.openText}>Open</Text>
        </View>
        <View style={styles.iconItem}>
          <Feather name="share" size={24} color="grey" />
          <Text style={styles.iconLabel}>Share</Text>
        </View>
        <TouchableOpacity onPress={toggleFavorite} style={styles.iconItem}>
          <Feather name="heart" size={24} color={isFavorite ? "red" : "grey"} />
          <Text style={styles.iconLabel}>Favourite</Text>
        </TouchableOpacity>
      </View>

      {/* Settings Section */}
      <TouchableOpacity onPress={() => setSettingsModalVisible(true)}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <View style={styles.settingsSubHeaderContainer}>
            <Text style={styles.subHeader}>Manage your Account and Preferences, Get Help, and More...</Text>
            <Feather name="settings" size={45} color="black" style={styles.settingsIcon} />
          </View>
        </View>
      </TouchableOpacity>

      {/* Homework Section */}
      <TouchableOpacity onPress={() => setHomeworkModalVisible(true)}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Homework</Text>
          <Text style={styles.homeworkText}>Read Chapter 1 of "Principles" by Ray Dalio</Text>
        </View>
      </TouchableOpacity>

      {/* New Section: Recent Notes */}
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
        <View style={styles.fixedModalContainer}>
          <View style={styles.modalContent}>
            <Text>Quote Modal Content</Text>
            <TouchableOpacity onPress={() => setQuoteModalVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={settingsModalVisible}
        onRequestClose={() => setSettingsModalVisible(false)}
      >
        <View style={styles.fixedModalContainer}>
          <View style={styles.modalContent}>
            <Text>Settings Modal Content</Text>
            <TouchableOpacity onPress={() => setSettingsModalVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={homeworkModalVisible}
        onRequestClose={() => setHomeworkModalVisible(false)}
      >
        <View style={styles.fixedModalContainer}>
          <View style={styles.modalContent}>
            <Text>Homework Modal Content</Text>
            <TouchableOpacity onPress={() => setHomeworkModalVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={recentNotesModalVisible}
        onRequestClose={() => setRecentNotesModalVisible(false)}
      >
        <View style={styles.fixedModalContainer}>
          <View style={styles.modalContent}>
            <Text>Recent Notes Modal Content</Text>
            <TouchableOpacity onPress={() => setRecentNotesModalVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Profile Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={profileModalVisible}
        onRequestClose={() => setProfileModalVisible(false)}
      >
        <View style={styles.fixedModalContainer}>
          <View style={styles.modalContent}>
            <Text>Profile Modal Content</Text>
            <Text style={styles.sectionHeader}>Reading Goals</Text>
            <Text style={styles.sectionDescription}>
              Read every day, see your stats soar and finish more books.
            </Text>

            {/* Timer Section */}
            <View style={styles.timerContainer}>
              <Text style={styles.readingGoalTitle}>Today's Reading</Text>
              <Text style={styles.timerText}>0:00</Text>
              <Text style={styles.goalText}>of your 3-minute goal</Text>

              {/* "Keep Reading" Button */}
              <TouchableOpacity style={styles.readButton}>
                <Text style={styles.readButtonText}>Keep Reading</Text>
              </TouchableOpacity>
            </View>

            {/* Streak Section */}
            <Text style={styles.sectionHeader}>Streak</Text>
            <View style={styles.streakContainer}>
              {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                <View key={index} style={styles.streakCircle}>
                  <Text style={styles.streakText}>{day}</Text>
                </View>
              ))}
            </View>
            <TouchableOpacity onPress={() => setProfileModalVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    marginTop: 30,
    backgroundColor: "#fafafa",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    width: "100%",
    height: "80%",
  },
  fixedModalContainer: {
    flex: 1,
    justifyContent: "flex-end", // Align modal to the bottom
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent background
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  modalHr: {
    marginVertical: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  timerContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  timerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#333",
  },
  goalText: {
    fontSize: 16,
    color: "#666",
  },
  readButton: {
    backgroundColor: "#393838",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  readButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
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
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 38,
    fontWeight: 'bold',
    color: "#393838",
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
    transform: [{ rotate: '45deg' }], // Fixed rotation angle
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
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  continueItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 240,
    height: 100,
    marginRight: 16,
    borderRadius: 8,
    padding: 12,
  },
  continueItemShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  bookCover: {
    width: 60,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 4,
    marginRight: 12,
  },
  continueDetails: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
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
    marginLeft: 8,
    fontSize: 16,
    color: 'grey',
  },
  openText: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
  },
  sectionContainer: {
    backgroundColor: "white",
    padding: 16,
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 5,
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
  streakContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  streakCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  streakText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  sectionDescription: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  readingGoalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NotesPage;
