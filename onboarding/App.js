import React, { useState } from 'react';
import { View, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
// Import the different pages
import IntroductionPage from './IntroductionPage';
import UserInfoPage from './UserInfoPage';
import GoalsPage from './GoalsPage';
import AnalyzePage from './AnalyzePage';
import BusinessCardPage from './BusinessCardPage';

const App = () => {
  const [step, setStep] = useState(1); // Manage steps (1: Introduction, 2: User Info, 3: Goals, 4: Analyze, 5: Business Card)

  // Handler for "Next" button click
  const handleNext = () => {
    if (step === 4) {
      setStep(5); // Go to BusinessCardPage
    } else if (step < 4) {
      setStep(step + 1);
    }
  };

  // Handler for "Back" button click
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          {/* Arrow Button */}
          {step > 1 && (
            <TouchableOpacity style={styles.arrowButton} onPress={handleBack}>
              <Feather name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
          )}
          
          {/* Step Indicator */}
          <View style={styles.stepContainer}>
            <View style={styles.stepIndicator}>
              <View style={[styles.stepDot, step === 1 && styles.activeStepDot]} />
              <View style={[styles.stepDot, step === 2 && styles.activeStepDot]} />
              <View style={[styles.stepDot, step === 3 && styles.activeStepDot]} />
              <View style={[styles.stepDot, step === 4 && styles.activeStepDot]} />
              <View style={[styles.stepDot, step === 5 && styles.activeStepDot]} />
            </View>
          </View>
        </View>

        {/* Render the current page */}
        {step === 1 && <IntroductionPage />}
        {step === 2 && <UserInfoPage />}
        {step === 3 && <GoalsPage handleNext={handleNext} />}
        {step === 4 && <AnalyzePage />}
        {step === 5 && <BusinessCardPage />}
      </ScrollView>

      {/* Bottom Section */}
      <View style={styles.bottomContainer}>
        {/* Render "Next" button if not on the last step */}
        {step < 5 && (
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        )}
        
        {/* Terms and Conditions beneath the button */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By proceeding, you agree to all terms of use and privacy policies.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393838',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20, // Adjust spacing from the arrow
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  stepDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#555',
    margin: 5,
  },
  activeStepDot: {
    backgroundColor: '#fff',
  },
  bottomContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#404040',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    width: '90%',
    height: 55,
    borderWidth: 2,
    borderColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowButton: {
    position: 'absolute',
    left: 20,
  },
  termsContainer: {
    padding: 20,
    alignItems: 'center',
  },
  termsText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default App;
