import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
  Modal,
  TextInput,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

const JournalPage = ({ navigation, saveData }) => {
  const [selectedCategory, setSelectedCategory] = useState("Recommended");
  const [isFabOpen, setFabOpen] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [recentTemplates, setRecentTemplates] = useState([]);
  const [journalEntries, setJournalEntries] = useState([]);
  const [entryTemplates, setEntryTemplates] = useState("");
  const fabAnimation = useRef(new Animated.Value(0)).current;
  const categoryBarAnimation = useRef(new Animated.Value(0)).current // X Position of black bar

  const categories = ["Recommended", "Recent"];
  const recommendedTemplates = ["Template A", "Template B", "Template C"];

  const [templateColors, setTemplateColors] = useState({
    "Template A": "#FFD700",
    "Template B": "#90EE90",
    "Template C": "#87CEEB",
  });

  const fabOptions = [
    { icon: "book", label: " Write Principle" },
    { icon: "alert-circle", label: "Pain Button" },
    { icon: "message-circle", label: "Crucial Conversations" },
  ];

  useEffect(() => {
    Animated.timing(fabAnimation, {
      toValue: isFabOpen ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isFabOpen]);

  useEffect(() => {
    Animated.timing(categoryBarAnimation, {
      toValue: selectedCategory === "Recommended" ? 0 : (width / 2) - (5 * 6),
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [selectedCategory])

  useEffect(() => {
    retrieveData();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const toggleFab = () => {
    setFabOpen(!isFabOpen);
  };

  const fabScale = fabAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.2],
  });

  const handleTemplateClick = async (template) => {
    setSelectedTemplate(template);
    setModalVisible(true);
    if (!recentTemplates.includes(template)) {
      const updatedTemplates = [template, ...recentTemplates];
      setRecentTemplates(updatedTemplates);
      await AsyncStorage.setItem(
        "recentTemplates",
        JSON.stringify(updatedTemplates)
      );
    }
  };

  const handleSave = async () => {
    try {
      // Get the current date
      const currentDate = new Date();

      // Extract the day of the week, day of the month, and the abbreviated month
      const dayOfWeek = currentDate.toLocaleString("default", {
        weekday: "long",
      });
      const day = currentDate.getDate();
      const month = currentDate.toLocaleString("default", { month: "short" });

      // Format the entry with the selected template, day of the week, day, month, and input value
      const newEntry = `${selectedTemplate} (${dayOfWeek}, ${day} ${month}):\n${inputValue}`;

      // Update the journal entries state and AsyncStorage
      const updatedEntries = [newEntry, ...journalEntries];
      setJournalEntries(updatedEntries);
      await AsyncStorage.setItem(
        "journalEntries",
        JSON.stringify(updatedEntries)
      );

      // const updatedEntryTemplates = `${entryTemplates ? entryTemplates : ""}${entryTemplates ? "\n\n" : ""}${selectedTemplate}`;
      // setEntryTemplates(updatedEntryTemplates);
      // await AsyncStorage.setItem(
      //   "entryTemplate",
      //   updatedEntryTemplates
      // )

      // Clear the input and close the modal
      setInputValue("");
      setModalVisible(false);

      // Save the data using the provided saveData function
      await saveData(newEntry, selectedTemplate);
      retrieveData();
    } catch (error) {
      console.error("Error saving data", error);
    }
  };

  const retrieveData = async () => {
    try {
      const storedTemplates = await AsyncStorage.getItem("recentTemplates");
      if (storedTemplates) {
        setRecentTemplates(JSON.parse(storedTemplates));
      }

      const storedEntries = await AsyncStorage.getItem("journalEntries");
      if (storedEntries) {
        setJournalEntries(JSON.parse(storedEntries));
      }

      const storedEntryTemplates = await AsyncStorage.getItem("entryTemplate");
      if(storedEntryTemplates){
        setEntryTemplates(storedEntryTemplates);
      }
    } catch (error) {
      console.error("Error retrieving data", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.categoryBar}>
      <Animated.View style={[styles.animatedRectangle, { transform: [{ translateX: categoryBarAnimation }] }]} />
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryItem,
              selectedCategory === category && styles.selectedCategoryItem,
            ]}
            onPress={() => handleCategoryChange(category)}
          >
            <Text
              style={[
                styles.categoryItemText,
                selectedCategory === category &&
                  styles.selectedCategoryItemText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedCategory === "Recommended" && (
        <View style={styles.textAlignIconContainer}>
          <Feather name="align-center" size={24} color="#393938" />
        </View>
      )}

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.optionsContainer}>
          {selectedCategory === "Recommended" &&
            recommendedTemplates.map((template) => (
              <TouchableOpacity
                key={template}
                style={[
                  styles.templateContainer,
                  { backgroundColor: templateColors[template] },
                ]}
                onPress={() => handleTemplateClick(template)}
              >
                <Text style={styles.templateText}>{template}</Text>
              </TouchableOpacity>
            ))}
          {selectedCategory === "Recent" &&
            recentTemplates.map((template) => (
              <TouchableOpacity
                key={template}
                style={[
                  styles.templateContainer,
                  { backgroundColor: templateColors[template] },
                ]}
                onPress={() => handleTemplateClick(template)}
              >
                <Text style={styles.templateText}>{template}</Text>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>

      <Modal
        transparent
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View
            style={[
              styles.modalContent,
              { backgroundColor: templateColors[selectedTemplate] },
            ]}
          >
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Feather name="x" size={24} color="#393938" />
              </TouchableOpacity>
              <Text style={styles.modalLabel}>{selectedTemplate}</Text>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your notes here"
              value={inputValue}
              onChangeText={setInputValue}
              multiline
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  templateContainer: {
    marginTop: 5,
    marginBottom: 45,
    borderRadius: 15,
    padding: 20,
    margin: 10,
    width: "90%",
    alignItems: "center",
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  categoryBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    padding: 5,
    marginTop: -5,
    marginBottom: 20,
    width: "100%",
    alignSelf: "center",
    zIndex: -2,
  },
  categoryItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 20,
  },
  selectedCategoryItem: {
    // backgroundColor: "#393938",
  },
  categoryItemText: {
    color: "#393938",
    fontWeight: "500",
    textAlign: "center",
  },
  selectedCategoryItemText: {
    color: "#fff",
  },
  textAlignIconContainer: {
    marginLeft: 280,
    marginBottom: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 30,
    padding: 10,
    elevation: 5,
    width: 45,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "90%",
    marginBottom: 45,
    marginLeft: 25,
    marginTop: -70,
  },
  templateText: {
    fontSize: 16,
    color: "#8B4513",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "85%",
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },

  modalLabel: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    flex: 1,
  },
  textInput: {
    borderRadius: 5,
    padding: 10,
    height: 300,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#393938",
    padding: 10,
    borderRadius: 13,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  animatedRectangle: {
    backgroundColor: "#393938",
    position: "absolute",
    height: 50,
    width: 50,
    zIndex: -1,
    borderRadius: 25,
    marginBottom: 20,
    width: (width / 2) - 5,
    alignSelf: "center",
  }
});

export default JournalPage;
