import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  Modal,
  Pressable,
} from "react-native";
import { Feather } from "react-native-vector-icons";
import { LineChart } from "react-native-chart-kit"; // Import chart library
import Animated from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function CoursePage() {
  const [modalVisible, setModalVisible] = useState(false);

  // Dummy data for the chart
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [10, 20, 12, 15, 22, 10, 18],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Chart line color
        strokeWidth: 2, // Line thickness
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <Animated.View style={styles.header}>
          <Text style={styles.greeting}>Courses</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.progressContainer}>
              <View style={styles.progressCircle}>
                <View style={styles.progressArc} />
                <Text style={styles.progressText}>0</Text>
                <Text style={styles.progressTotal}>/ 5</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Animated.View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search what you need"
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Feather name="search" size={25} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Continue Course Card */}
        <Animated.View style={styles.continueCard}>
          <View style={styles.continueCardContent}>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>
                To be a professional communicator!
              </Text>
              <Text style={styles.cardSubtitle}>
                Sharpen your skills in new markets
              </Text>
              <View style={styles.lessonIndicator}>
                <Feather name="play-circle" size={18} color="#333" />
                <Text style={styles.lessonText}>Lesson 3</Text>
              </View>
            </View>
            <Image
              source={{ uri: "https://path-to-your-image/scooter.png" }}
              style={styles.scooterImage}
            />
          </View>
        </Animated.View>

        {/* Top Courses */}
        <View style={styles.courseCards}>
          <Animated.View style={[styles.courseCard, styles.marketingCard]}>
            <Text style={styles.courseCardTitle}>Dale Carnegie</Text>
            <Text style={styles.courseCount}>27 Courses</Text>
            <Image
              source={{ uri: "https://path-to-your-image/marketing-icon.png" }}
              style={styles.courseImage}
            />
          </Animated.View>
          <Animated.View style={[styles.courseCard, styles.designCard]}>
            <Text style={styles.courseCardTitle}>How to manage oneself</Text>
            <Text style={styles.courseCount}>41 Courses</Text>
            <Image
              source={{ uri: "https://path-to-your-image/design-icon.png" }}
              style={styles.courseImage}
            />
          </Animated.View>
        </View>
      </ScrollView>

      {/* Profile Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.fixedModalContainer}>
          <View style={styles.modalContent}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Feather
                name="x"
                size={24}
                color="#333"
                onPress={() => setModalVisible(false)}
              />
              <Text style={styles.modalTitle}>Your Statistics</Text>
            </View>
         

            <ScrollView contentContainerStyle={styles.modalScroll}>
              {/* Chart */}
              <LineChart
                data={chartData}
                width={width * 0.9} // Chart width
                height={220}
                chartConfig={{
                  backgroundColor: "#e26a00",
                  backgroundGradientFrom: "#fb8c00",
                  backgroundGradientTo: "#ffa726",
                  decimalPlaces: 1,
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726",
                  },
                }}
                bezier
                style={{
                  marginVertical: 20,
                  borderRadius: 16,
                }}
              />

              {/* Reading Goals */}
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
            </ScrollView>

           
           
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    padding: 20,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
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
  
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
    marginTop: 15,
  },
  greeting: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    width: "100%",
  },
  searchInput: {
    flex: 1,
    height: 50,
    color: "#333",
  },
  searchButton: {
    backgroundColor: "#393838",
    borderRadius: 3,
    padding: 15,
    marginLeft: 9,
  },
  continueCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    width: "100%",
  },
  continueCardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  lessonIndicator: {
    flexDirection: "row",
    alignItems: "center",
  },
  lessonText: {
    marginLeft: 5,
    fontWeight: "bold",
    color: "#333",
  },
  scooterImage: {
    width: 100,
    height: 100,
  },
  courseCards: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  courseCard: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginRight: 10,
    height: 150,
  },
  streakContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginBottom: 30,
  },
  streakCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  streakText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  fixedModalContainer: {
    flex: 1,
    justifyContent: "flex-end", // Align modal to the bottom
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "#fafafa",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    width: "100%",
    height: "80%",
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
});
