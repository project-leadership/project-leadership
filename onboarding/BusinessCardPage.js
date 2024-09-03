import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

const GradientSquares = () => (
  <Svg height="100%" width="100%" viewBox="0 0 100 100">
    <Defs>
      <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="30%" stopColor="#1a5f7a" stopOpacity="1" />
        <Stop offset="100%" stopColor="#1a4375" stopOpacity="1" />
      </LinearGradient>
    </Defs>
    <Rect x="0" y="0" width="100" height="45" fill="url(#grad)" rx="15" />
    <Rect x="0" y="55" width="100" height="45" fill="url(#grad)" rx="15" />
  </Svg>
);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <GradientSquares />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Richard</Text>
          <Text style={styles.subtitle}>SUGARY ARCHIVIST</Text>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.footerLeft}>
            <Text style={styles.footerText}>LEAD</Text>
            <Text style={styles.footerDate}>Aug 31, 2024</Text>
          </View>
          <View style={styles.footerRight}>
            <Text style={styles.footerText}>PROJECT LEADERSHIP</Text>
          </View>
        </View>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.iconContainer}>
            <Icon name="share" size={27} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.iconContainer}>
            <Icon name="bookmark" size={27} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393838',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fbfced',
    borderRadius: 15,
    padding: 20,
    width: '70%',
    aspectRatio: 0.7,
    justifyContent: 'space-between',
    marginTop: 45,
    zIndex: 999,
  },
  imageContainer: {
    height: '60%', // Increased height
    width: '100%',
    marginBottom: 10,
  },
  textContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "#2c3e50",
  },
  subtitle: {
    fontSize: 16,
    color: "#34495e",
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  iconButton: {
    padding: 10,
    marginHorizontal: 20,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#414141',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  footerLeft: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  footerRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  footerText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "#34495e",
  },
  footerDate: {
    fontSize: 12,
    color: "#34495e",
  },
});
