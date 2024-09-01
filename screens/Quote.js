import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import FloatingActionButton from "../components/FloatingActionButton";
import Icon from "react-native-vector-icons/Feather";

const quotes = [
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

const Quote = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={localStyles.headerContainer}>
        <Text style={localStyles.headerTitle}>Quotes</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <ScrollView contentContainerStyle={{ gap: 10 }}>
          {quotes.map((item, index) => {
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
        </ScrollView>
      </View>

      {/* FAB in App.js */}
    </SafeAreaView>
  );
};

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
});
