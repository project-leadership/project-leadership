import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';  // Import Feather icon

const introImage = require('./about-our-team.png');

const IntroductionPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Skip Button with Feather Icon */}
      

      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={introImage} style={styles.staticImage} />
        </View>
      </View>

      {/* Step Indicator with Visual Representation */}
      

      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Project Leadership</Text>
        <Text style={styles.subheader}>A program for folks who wanna lead well</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20 
  },
  content: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  imageContainer: { 
    marginBottom: 20 
  },
  staticImage: { 
    width: 300, 
    height: 300, 
    resizeMode: 'contain' 
  },

  // Step Indicator styles (Visual Representation)
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#bbb',
    marginHorizontal: 5,
  },

  headerContainer: { 
    alignItems: 'center' 
  },
  header: { 
    color: 'white', 
    fontSize: 28, 
    fontWeight: 'bold' 
  },
  subheader: { 
    color: 'white', 
    fontSize: 18, 
    textAlign: 'center' 
  },

  // Skip Button with Feather Icon
  skipButton: { 
    position: 'absolute', 
    top: 40, 
    right: 20 
  },
});

export default IntroductionPage;
