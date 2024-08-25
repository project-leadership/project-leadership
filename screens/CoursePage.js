
  import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CoursePage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, User</Text>
          <Ionicons name="person-circle-outline" size={36} color="#333" />
        </View>

       

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <TextInput 
            style={styles.searchInput}
            placeholder="Search what you need"
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Continue Course Card */}
        <Text style={styles.continueYourCourse}>Start with our Intro-Course</Text>
        <TouchableOpacity style={styles.continueCard}>
          <View style={styles.continueCardContent}>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>To be a professional communicator!</Text>
              <Text style={styles.cardSubtitle}>Sharpen your skills in new markets</Text>
              <View style={styles.lessonIndicator}>
                <Ionicons name="play-circle" size={18} color="#333" />
                <Text style={styles.lessonText}>Lesson 3</Text>
              </View>
            </View>
            <Image 
              source={{ uri: 'https://path-to-your-image/scooter.png' }} 
              style={styles.scooterImage}
            />
          </View>
        </TouchableOpacity>

        {/* Top Courses */}
        <Text style={styles.sectionTitle}>Our Courses</Text>
        <View style={styles.courseCards}>
          <TouchableOpacity style={[styles.courseCard, styles.marketingCard]}>
            <Text style={styles.courseCardTitle}>Dale Carnegie</Text>
            <Text style={styles.courseCount}>27 Courses</Text>
            <Image 
              source={{ uri: 'https://path-to-your-image/marketing-icon.png' }} 
              style={styles.courseImage} 
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.courseCard, styles.designCard]}>
            <Text style={styles.courseCardTitle}>How to manage oneself</Text>
            <Text style={styles.courseCount}>41 Courses</Text>
            <Image 
              source={{ uri: 'https://path-to-your-image/design-icon.png' }} 
              style={styles.courseImage} 
            />
          </TouchableOpacity>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FaFaFa',
    padding: 20,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4169E1',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor:"ddd",
    paddingLeft: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    width: '100%',
  },
  searchInput: {
    flex: 1,
    height: 50,
    color: '#333',
  },
  searchButton: {
    backgroundColor: "#393838",
    borderRadius: 3,
    padding: 15,
    marginLeft: 9,
  },
  continueCard: {
    backgroundColor: '#FEE4CF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    width: '100%',
  },
  continueCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  lessonIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lessonText: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  scooterImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  continueYourCourse: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4169E1',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  courseCards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  courseCard: {
    width: '48%',
    borderRadius: 15,
    padding: 20,
    height: 160,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 10,
  },
  marketingCard: {
    backgroundColor: '#FFB6C1',
  },
  designCard: {
    backgroundColor: '#ADD8E6',
  },
  developmentCard: {
    backgroundColor: '#98FB98',
  },
  businessCard: {
    backgroundColor: '#FFDAB9',
  },
  courseCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  courseCount: {
    fontSize: 14,
    color: '#555',
  },
  courseImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
