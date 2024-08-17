import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CoursePage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      title: 'Life Principles',
      author: 'Ray Dalio',
      description: 'A guide to living effectively',
      date: 'Aug 9, 2024',
      episodes: [
        'Episode 1: Story Structure',
        'Episode 2: Engaging the Audience',
        'Episode 3: Emotional Connection',
        'Episode 4: Delivering Impact',
      ],
    },
    {
      title: 'Core Teachings of ',
      author: 'Dale Carnegie',
      description: 'Learn the essential principles',
      date: 'Aug 8, 2024',
      episodes: [
        'Episode 1: Story Structure',
        'Episode 2: Engaging the Audience',
        'Episode 3: Emotional Connection',
        'Episode 4: Delivering Impact',
      ],
    },
    {
      title: 'How to manage oneself',
      author: 'Peter Drucker',
      description: 'Master the art of self-management',
      date: 'Aug 7, 2024',
      episodes: [
        'Episode 1: Story Structure',
        'Episode 2: Engaging the Audience',
        'Episode 3: Emotional Connection',
        'Episode 4: Delivering Impact',
      ],
    },
   
   
  ];

  const handlePress = (course) => {
    setSelectedCourse(course);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.searchBar}>
          <Feather name="search" size={24} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for any course"
            placeholderTextColor="#999"
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {courses.map((course, index) => (
          <TouchableOpacity key={index} style={styles.iconContainer} onPress={() => handlePress(course)}>
            <View style={[styles.iconContent, styles.greenTone]}>
              <Text style={styles.titleText}>{course.title}</Text>
              <View style={styles.divider} />
              <Text style={styles.authorText}>{course.author}</Text>
            </View>
            <View style={styles.whiteTone}>
              <Text style={styles.descriptionText}>{course.description}</Text>
              <View style={styles.greyDivider} />
              <Text style={styles.dateText}>{course.date}</Text>
              <Feather name="share" size={20} color="#999" style={styles.shareIcon} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {selectedCourse && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
            setSelectedCourse(null);
          }}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                <Feather name="x" size={35} color="#fff" style={styles.closeIcon} onPress={() => setModalVisible(false)} />
                <Text style={styles.modalTitleText}>{selectedCourse.title}</Text>
                <Text style={styles.modalAuthorText}>{selectedCourse.author}</Text>
              </View>
              <ScrollView contentContainerStyle={styles.modalContent}>
                <View style={styles.greyDivider} />
                <Text style={styles.modalDescriptionText}>{selectedCourse.description}</Text>
                <View style={styles.greyDivider} />
                {selectedCourse.episodes.map((episode, index) => (
                  <View key={index} style={styles.episodeContainer}>
                    <Text style={styles.modalContentText}>{episode}</Text>
                    <View style={styles.episodeDivider} />
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  headerContainer: {
    backgroundColor: '#fafafa',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    width: '100%',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ede6e6',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 2, // Optional: adds slight shadow to the search bar
    width: '100%',
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 40, // Adjust padding to accommodate the icon
    fontSize: 16,
    color: '#333',
  },
  scrollContainer: {
    flexGrow: 2,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: '48%',
    height: '35%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContent: {
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 16,
  },
  greenTone: {
    backgroundColor: '#393938',
  },

  whiteTone: {
    height: '40%', // Increased to accommodate description, date, and icon
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    justifyContent: 'space-between', // Align content evenly
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  authorText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
  descriptionText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'left',
    fontWeight: '500',
    marginTop: 5,
    marginBottom: 5,
  },
  greyDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
  dateText: {
    fontSize: 14,
    color: '#999',
    marginLeft: -3,
    marginTop: 8,
    marginBottom: -8,
  },
  shareIcon: {
    marginLeft: 95,
    marginTop: -12,
  },
  divider: {
    width: '60%',
    height: 2,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    height: "100%",
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    elevation: 5,
  },
  modalHeader: {
    backgroundColor: '#393938',
    padding: 10,
    height: "30%",
    width: "120%",
    marginLeft: -25,
    marginTop: -20,
  },
  modalTitleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  modalContent: {
    paddingVertical: 20,
  },
  modalAuthorText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  modalDescriptionText: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
  },
  modalContentText: {
    fontSize: 14,
    color: '#333',
    marginVertical: 10,
  },
  episodeContainer: {
    marginBottom: 10,
  },
  episodeDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 5,
  },
});

export default CoursePage;
  