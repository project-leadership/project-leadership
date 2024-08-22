import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Modal,
  ScrollView,
  Animated,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import NotesPage from "./screens/NotesPage";
import CoursePage from "./screens/CoursePage";
import LoginPage from "./screens/LoginPage";
import JournalPage from "./screens/JournalPage";
import SettingsPage from "./screens/SettingsPage";
import HomeworkPage from "./screens/HomeworkPage";
import YourPrinciplePage from "./screens/YourPrinciplePage";
import OurPrinciplePage from "./screens/OurPrinciplePage";
import styles from "./screens/styles";
import { BlurView } from "expo-blur";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Haptics from "expo-haptics";

const { width, height } = Dimensions.get("window");

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showPopup, setShowPopup] = useState(true);
  const [isFabOpen, setFabOpen] = useState(false);
  const [savedEntry, setSavedEntry] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [moreOptionsVisible, setMoreOptionsVisible] = useState(null);
  const [entryTemplate, setEntryTemplate] = useState("");

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 100],
    extrapolate: "clamp",
  });

  const headerPosition = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -40],
    extrapolate: "clamp",
  });

  const headerFontSize = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [30, 17],
    extrapolate: "clamp",
  });

  const fabOptions = [
    { icon: "book", label: "Write Principle" },
    { icon: "alert-circle", label: "Pain Button" },
    { icon: "message-circle", label: "Crucial Conversations" },
  ];

  useEffect(() => {
    retrieveData();
  }, [currentPage]);

  // When the fab is open
  useEffect(() => {
    if (isFabOpen) {
      Haptics.selectionAsync();
      navigateTo("journal");
    }
  }, [isFabOpen]);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("journalEntry");
      const template = await AsyncStorage.getItem("entryTemplate");
      console.log("Templates: " + template)
      if (value !== null) {
        setSavedEntry(value);
      }
      if (template !== null) {
        setEntryTemplate(template);
      }
    } catch (error) {
      console.error("Error retrieving data", error);
    }
  };
  const saveData = async (entry, selectedEntryTemplate) => {
    try {
      const existingEntry = await AsyncStorage.getItem("journalEntry");
      console.log("existingEntry " + existingEntry)
      const existingTemplates = await AsyncStorage.getItem("entryTemplate");

      const newEntry = existingEntry ? existingEntry + "\n\n" + entry : entry;
      await AsyncStorage.setItem("journalEntry", newEntry);
      await AsyncStorage.setItem(
        "entryTemplate",
        existingTemplates
          ? existingTemplates + "\n\n" + selectedEntryTemplate
          : selectedEntryTemplate
      );
      console.log("Data appended successfully");
      retrieveData();
      console.log("Templates: " + entryTemplate)
    } catch (error) {
      console.error("Error saving data", error);
    }
  };
  console.log("_______________________________");

  const deleteEntry = async (index) => {
    try {
      const entries = savedEntry.split("\n\n");
      entries.splice(index, 1);
      const newSavedEntry = entries.join("\n\n");
      await AsyncStorage.setItem("journalEntry", newSavedEntry);
      setSavedEntry(newSavedEntry);
      setMoreOptionsVisible(null);

      const templates = entryTemplate.split("\n\n");
      templates.splice(index, 1);
      const newEntryTemplates = templates.join("\n\n");
      await AsyncStorage.setItem("entryTemplate", newEntryTemplates);
      setEntryTemplate(newEntryTemplates);

      console.log("Entry deleted successfully");
      console.log("Templates: " + entryTemplate)
    } catch (error) {
      console.error("Error deleting entry", error);
    }
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setFabOpen(false);
    setMoreOptionsVisible(null);
  };

  const handleFabPress = () => {
    navigateTo("journal");
  };

  const toggleFab = () => {
    setFabOpen(!isFabOpen);
  };

  const toggleMoreOptions = (index) => {
    setMoreOptionsVisible(moreOptionsVisible === index ? null : index);
  };

  const renderContent = () => {
    if (currentPage === "home") {
      return (
        <Animated.ScrollView
          contentContainerStyle={{ paddingTop: 120 }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
          horizontal={false}
        >
          {showPopup && (
            <View style={[styles.popup, localStyles.popup]}>
              <Text
                style={styles.popupText}
                onPress={() => navigateTo("login")}
              >
                You're currently logged in as a guest. Click here to create a
                profile.
              </Text>
              <TouchableOpacity
                onPress={() => setShowPopup(false)}
                style={styles.closeButton}
              >
                <Feather name="x" size={20} color="#393938" />
              </TouchableOpacity>
            </View>
          )}

          <View style={localStyles.entries}>
            {savedEntry ? (
              savedEntry.split("\n\n").map((entry, index) => (
                <View
                  key={index}
                  style={[
                    localStyles.entryContainer,
                    { alignSelf: showPopup ? "center" : undefined },
                  ]}
                >
                  <Text style={localStyles.entryTemplate}>
                    {entryTemplate.split("\n\n")[index] || "Journal Entry"}
                  </Text>
                  <Text style={localStyles.entryText}>{entry}</Text>
                  <View style={localStyles.hr} />
                  <View style={localStyles.entryFooter}>
                    <Text style={localStyles.entryDate}>
                      {new Date().toLocaleDateString()}
                    </Text>
                    <TouchableOpacity onPress={() => toggleMoreOptions(index)}>
                      <Feather
                        name="more-horizontal"
                        size={16}
                        color="#333"
                        style={localStyles.moreIcon}
                      />
                    </TouchableOpacity>
                  </View>
                  {moreOptionsVisible === index && (
                    <View style={localStyles.optionsContainer}>
                      <TouchableOpacity
                        style={localStyles.optionButton}
                        onPress={() => console.log("Edit")}
                      >
                        <Text style={localStyles.optionText}>Edit</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={localStyles.optionButton}
                        onPress={() => console.log("Bookmark")}
                      >
                        <Text style={localStyles.optionText}>Bookmark</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={localStyles.optionButton}
                        onPress={() => deleteEntry(index)}
                      >
                        <Text style={localStyles.optionText}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              ))
            ) : (
              <Text style={localStyles.entryText}>No saved entry found.</Text>
            )}
          </View>
        </Animated.ScrollView>
      );
    } else {
      return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} horizontal={false}>
          {currentPage === "notes" && (
            <NotesPage
              navigateTo={navigateTo}
              deleteEntry={deleteEntry}
              savedEntry={savedEntry}
              setSavedEntry={setSavedEntry}
            />
          )}
          {currentPage === "course" && <CoursePage />}
          {currentPage === "login" && <LoginPage navigateTo={navigateTo} />}
          {currentPage === "journal" && (
            <JournalPage navigateTo={navigateTo} saveData={saveData} />
          )}
          {currentPage === "settings" && <SettingsPage />}
          {currentPage === "homework" && <HomeworkPage />}
          {currentPage === "yourprinciple" && <YourPrinciplePage />}
          {currentPage === "ourprinciple" && <OurPrinciplePage />}
        </ScrollView>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentPage === "home" && (
        <Animated.View
          style={[
            styles.header,
            {
              height: headerHeight,
              transform: [{ translateY: headerPosition }],
              position: "absolute",
              left: -23,
              right: 0,
              zIndex: 1000,
              backgroundColor: "#fafafa",
            },
          ]}
        >
          <Animated.View
            style={[
              styles.headerContent,
              {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 20,
              },
            ]}
          >
            <Animated.Text
              style={[
                styles.headerText,
                { fontSize: headerFontSize, marginLeft: 20 },
              ]}
            >
              Project Leadership
            </Animated.Text>
            <TouchableOpacity onPress={() => setShowOptions(!showOptions)}>
              <View style={styles.hamburgerIcon}>
                <Feather name="align-center" size={24} color="black" />
              </View>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      )}

      {renderContent()}

      {currentPage === "home" && (
        <>
          <TouchableOpacity
            style={styles.fab}
            onPress={handleFabPress}
            onLongPress={toggleFab}
          >
            <Feather name="edit" size={34} color="#ffffff" />
          </TouchableOpacity>

          {isFabOpen && (
            <Modal transparent animationType="fade">
              <BlurView intensity={50} style={localStyles.blurView}>
                <TouchableOpacity
                  style={localStyles.closeArea}
                  onPress={toggleFab}
                />

                <View style={localStyles.fabOptionsContainer}>
                  {fabOptions.map((option) => (
                    <TouchableOpacity
                      key={option.label}
                      style={localStyles.fabOption}
                      onPress={() =>
                        navigateTo(option.label.toLowerCase().replace(" ", ""))
                      }
                    >
                      <Feather
                        name={option.icon}
                        size={20}
                        color="#393938"
                        style={localStyles.fabOptionIcon}
                      />
                      <Text style={localStyles.fabOptionText}>
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </BlurView>
            </Modal>
          )}
        </>
      )}

      <View style={styles.bottomNav}>
        <LinearGradient
          colors={["rgba(250, 250, 250, 0)", "rgba(250, 250, 250, 0.9)"]}
          style={styles.gradient}
        />
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigateTo("home")}
        >
          <Feather
            name="home"
            size={24}
            color={currentPage === "home" ? "#393938" : "grey"}
          />
          <Text style={{ color: currentPage === "home" ? "#393938" : "grey" }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigateTo("course")}
        >
          <Feather
            name="book-open"
            size={24}
            color={currentPage === "course" ? "#393938" : "grey"}
          />
          <Text
            style={{ color: currentPage === "course" ? "#393938" : "grey" }}
          >
            Course
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigateTo("notes")}
        >
          <Feather
            name="book"
            size={24}
            color={currentPage === "notes" ? "#393938" : "grey"}
          />
          <Text style={{ color: currentPage === "notes" ? "#393938" : "grey" }}>
            Notes
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  optionsContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#f5eded",
    borderRadius: 8,
    zIndex: 1000,
    width: 150,
    padding: 10,
    elevation: 8,
  },
  optionButton: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  popup: {
    zIndex: 999,
  },
  blurView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeArea: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  fabOptionsContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    zIndex: 2,
    width: 250,
  },
  fabOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  fabOptionIcon: {
    marginRight: 10,
  },
  fabOptionText: {
    fontSize: 16,
    color: "#393938",
  },
  entryContainer: {
    marginTop: 20,
    width: width * 0.86,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 2,
    borderColor: "#999999",
    borderWidth: 1,
    justifyContent: "center",
  },
  entryTemplate: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  entryText: {
    fontSize: 18,
    color: "#333",
  },
  hr: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    marginVertical: 10,
    marginHorizontal: 0,
  },
  entryFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  entryDate: {
    fontSize: 14,
    color: "#555",
  },
  moreIcon: {
    marginLeft: 10,
  },
  entries: {
    justifyContent: "center",
    width: "95%",
    paddingBottom: 2,
  },
});
