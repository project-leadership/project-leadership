import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const goalImage1 = require('./Clipboard_perspective_matte.png');
const goalImage2 = require('./Settings_perspective_matte.png');
const goalImage3 = require('./Crosshair_perspective_matte.png');
const goalImage4 = require('./Crown_perspective_matte.png');

const goals = [
  { title: 'Journal', description: 'Keep a daily journal to track your progress and thoughts.', images: goalImage1 },
  { title: 'Systemize My Thinking', description: 'Organize your thoughts and processes for better clarity.', images: goalImage2 },
  { title: 'Listen to the World\'s Renowned Authors', description: 'Expand your knowledge by listening to influential authors.', images: goalImage3 },
  { title: 'Control Specific Situations Better', description: 'Improve your ability to handle challenging situations effectively.', images: goalImage4 },
];

const GoalsPage = ({ handleNext }) => {
  const [selectedGoalIndex, setSelectedGoalIndex] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>What are your goals?</Text>
      {goals.map((goal, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.goalContainer, selectedGoalIndex === index && styles.selectedBorder]}
          onPress={() => setSelectedGoalIndex(index)}
        >
          <Image source={goal.images} style={styles.goalImage} />
          <View style={styles.goalTextContainer}>
            <Text style={styles.goalTitle}>{goal.title}</Text>
            <Text style={styles.goalDescription}>{goal.description}</Text>
          </View>
          <View style={styles.radioContainer}>
            {selectedGoalIndex === index && <View style={styles.radioButton} />}
          </View>
        </TouchableOpacity>
      ))}
      {/* Next Button */}
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#393838',
    width: 375,
    marginLeft: -15,
  },
  header: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  goalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#404040',
    borderRadius: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedBorder: {
    borderColor: 'white',
  },
  goalImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 15,
  },
  goalTextContainer: {
    flex: 1,
  },
  goalTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  goalDescription: {
    color: 'white',
    fontSize: 14,
  },
  radioContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  radioButton: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  nextButton: {
    backgroundColor: '#404040',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    width: '100%',
    height: 55,
    borderWidth: 2,
    borderColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GoalsPage;
