import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Animated, Image, TouchableOpacity } from 'react-native';
import Svg, { Circle, Defs, RadialGradient, Stop } from 'react-native-svg';
import localImage from './Target_perspective_matte.png';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const NUM_CIRCLES = 6;

const AnalyzePage = ({ handleNext }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const [showResults, setShowResults] = useState(false);
  const circleAnimations = [...Array(NUM_CIRCLES)].map(() => ({
    radius: useRef(new Animated.Value(20)).current,
    opacity: useRef(new Animated.Value(0.5)).current,
  }));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();
    startCircleAnimations();

    // Show results after 4 seconds
    setTimeout(() => {
      setShowResults(true);
    }, 4000);
  }, []);

  const startCircleAnimations = () => {
    const animations = circleAnimations.map((anim, index) => {
      const delay = index * 200;
      return Animated.parallel([
        Animated.loop(
          Animated.sequence([
            Animated.timing(anim.radius, {
              toValue: 40 + index * 6,
              duration: 3000,
              delay,
              useNativeDriver: false,
            }),
            Animated.timing(anim.radius, {
              toValue: 20,
              duration: 3000,
              useNativeDriver: false,
            }),
          ])
        ),
        Animated.loop(
          Animated.sequence([
            Animated.timing(anim.opacity, {
              toValue: 0.3,
              duration: 3000,
              delay,
              useNativeDriver: false,
            }),
            Animated.timing(anim.opacity, {
              toValue: 0.5,
              duration: 3000,
              useNativeDriver: false,
            }),
          ])
        ),
      ]);
    });
    Animated.parallel(animations).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        {!showResults && (
          <View style={styles.animationContainer}>
            <Svg height="240" width="240" viewBox="0 0 160 160">
              <Defs>
                <RadialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <Stop offset="0%" stopColor="#F9E300" stopOpacity="1" />
                  <Stop offset="100%" stopColor="#F5E6D3" stopOpacity="1" />
                </RadialGradient>
              </Defs>
              {circleAnimations.map((anim, index) => (
                <AnimatedCircle
                  key={index}
                  cx="80"
                  cy="80"
                  r={anim.radius}
                  fill="url(#grad)"
                  opacity={anim.opacity}
                />
              ))}
            </Svg>
            <Text style={styles.statusText}>Analyzing your data...</Text>
          </View>
        )}
        {showResults && (
          <Animated.View 
            style={[
              styles.resultsContainer,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
              },
            ]}
          >
            <Text style={styles.congratsText}>Congratulations, Your Account is set up!</Text>
            <Text style={styles.messageText}>Click on Next to see your personal Card</Text>
            <Image
              source={localImage}
              style={styles.picture}
            />
            {/* Next Button */}
           
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393838',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  statusText: {
    color: 'white',
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
  resultsContainer: {
    alignItems: 'center',
    backgroundColor: "#393838",
    borderRadius: 20,
    padding: 20,
    maxWidth: '80%',
  },
  congratsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    width: 300,
    marginLeft: 95,
  },
  messageText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  picture: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  nextButton: {
    backgroundColor: '#404040',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AnalyzePage;
