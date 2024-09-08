import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

// Import the local image
import shipImage from './assets/ship.jpg'; // Adjust the path as needed

const IntroScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image Section */}
      <View style={styles.imageSection}>
        <Image
          source={shipImage} // Use the imported local image
          style={styles.image}
        />
      </View>

      {/* Title and Description Section */}
      <View style={styles.infoSection}>
        <Text style={styles.title}>Introduction</Text>
        <Text style={styles.description}>
          Description goes here. This is a brief overview of the content.
        </Text>
      </View>

      {/* Episodes Section */}
      <View style={styles.episodesSection}>
        
        <View style={styles.episodeList}>
        <View style={styles.privateContainer}>
          <Text style={styles.episodeItem}>Episode 1: Title</Text>
         </View>
         <View style={styles.privateContainer}>
          <Text style={styles.episodeItem}>Episode 2: Title</Text>
         </View>
         <View style={styles.privateContainer}>
          <Text style={styles.episodeItem}>Episode 3: Title</Text>
         </View>
          {/* Add more episodes as needed */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'flex-start', // Align children to the left
  },
  imageSection: {
    width: '100%',
    height: '33.33%', // 1/3 of the height of the parent container
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  privateContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
},
  infoSection: {
    backgroundColor: '#393838',
    color: '#fff',
    padding: 20,
    width: '100%',
    alignItems: 'flex-start', // Align text to the left
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'left', // Align text to the left
    width: '100%',
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'left', // Align text to the left
    width: '100%',
  },
  episodesSection: {
    padding: 20,
    width: '100%',
    alignItems: 'flex-start', // Align text to the left
  },
  episodeTitle: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'left', // Align text to the left
    width: '100%',
  },
  episodeList: {
    width: '100%',
  },
  episodeItem: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'left', // Align text to the left
  },
});

export default IntroScreen;
