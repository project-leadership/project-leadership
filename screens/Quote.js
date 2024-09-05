import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const QUOTES = [
  {
    author: "Ray Dalio",
    content: "Pain + Reflection = Progress",
  },
  {
    author: "Oscar Wild",
    content: "Be yourself; everyone else is already taken",
  },
  {
    author: "Albert Einstein",
    content:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
  },
  {
    author: "Frank Zappa",
    content: "So many books, so little time",
  },
];

const Quote = forwardRef(({}, ref) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const [formAuthor, setFormAuthor] = useState();
  const [formContent, setFormContent] = useState();

  const [quotes, setQuotes] = useState([]);

  ref.current = {
    isFormVisible,
    setIsFormVisible,
  };

  const closeModal = () => {
    setIsFormVisible(false);
    setFormAuthor(undefined);
    setFormContent(undefined);
  }

  const retrieveData = async () => {
    setQuotes(
      JSON.parse((await AsyncStorage.getItem("quotes")) ?? JSON.stringify([]))
    );
  };

  useEffect(() => {
    retrieveData();
  }, []);

  const handleSave = async () => {
    retrieveData();

    const newQuote = {
      author: formAuthor,
      content: formContent,
    };

    const newQuotes = [newQuote, ...quotes];

    await AsyncStorage.setItem("quotes", JSON.stringify(newQuotes));

    setIsFormVisible(false);

    retrieveData();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={localStyles.headerContainer}>
        <Text style={localStyles.headerTitle}>Quotes</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ gap: 10 }}>
          {[...QUOTES, ...quotes].map((item, index) => {
            return (
              <View style={localStyles.quoteContainer} key={index}>
                <Text style={localStyles.quoteTitle}>{item.author}</Text>
                <Text style={localStyles.quoteText}>"{item.content}"</Text>
              </View>
            );
          })}
          {/*Bottom nav margin , so can scroll a little bit more to see full quote*/}
          <View
            style={{
              width: styles.bottomNav.width,
              height: styles.bottomNav.height + 2,
            }}
          />
        </View>
      </View>

      {/* FAB in App.js */}

      {/* New Quote form Modal */}
      <Modal
        animationType="slide"
        visible={isFormVisible}
        onRequestClose={closeModal}
        transparent
      >
        <View style={localStyles.modalContainer}>
          <View style={localStyles.modalContentContainer}>
            <View style={localStyles.modalHeader}>
              <Feather
                name="x"
                onPress={closeModal}
                size={24}
                color="#393938"
              />
              <Text style={localStyles.modalTitle}>Add your quote</Text>
              <TouchableOpacity
                style={localStyles.saveButton}
                onPress={handleSave}
              >
                <Text style={localStyles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
            <View style={localStyles.modalQuoteContainerContainer}>
              <View style={localStyles.quoteContainer}>
                <TextInput
                  style={localStyles.quoteTitle}
                  placeholder="Enter author"
                  placeholderTextColor={localStyles.quoteTitle.color}
                  value={formAuthor}
                  onChangeText={setFormAuthor}
                />
                <TextInput
                  style={localStyles.quoteText}
                  placeholder="Enter content"
                  placeholderTextColor={localStyles.quoteText.color}
                  value={formContent}
                  onChangeText={setFormContent}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
});

export default Quote;

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#393838",
    textAlign: "left",
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#fafafa",
    marginTop: 20,
  },
  quoteSection: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 16,
  },
  quoteContainer: {
    backgroundColor: "#393838",
    padding: 16,
    height: 150,
    width: 340,
    borderRadius: 8,
  },
  quoteTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "white",
  },
  quoteText: {
    fontSize: 16,
    fontStyle: "italic",
    color: "white",
  },
  quoteSection: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalContentContainer: {
    marginTop: 30,
    backgroundColor: "#fafafa",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    width: "100%",
    height: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  modalQuoteContainerContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 15,
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
  modalTitle: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    flex: 1,
  },
});
