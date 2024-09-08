import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function QuoteScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [newQuote, setNewQuote] = useState('');
  const [newSource, setNewSource] = useState('');
  const [quotes, setQuotes] = useState([
    { id: '1', text: "Pain plus reflection equals progress.", source: "Ray Dalio" },
    { id: '2', text: "The biggest mistake investors make is to believe that what happened in the recent past is likely to persist.", source: "Ray Dalio" },
    { id: '3', text: "The offer is the most important part of the sale.", source: "Alex Hormozi" },
    { id: '4', text: "The goal is to make your product so good, people would feel stupid saying no.", source: "Alex Hormozi" },
  ]);

  const addQuote = () => {
    if (newQuote && newSource) {
      setQuotes([...quotes, { id: Date.now().toString(), text: newQuote, source: newSource }]);
      setNewQuote('');
      setNewSource('');
      setModalVisible(false);
    }
  };

  const renderQuote = ({ item }) => (
    <View style={styles.quoteContainer}>
      <Text style={styles.quote}>{item.text}</Text>
      <View style={styles.sourceContainer}>
        <View style={styles.bullet} />
        <Text style={styles.source}>{item.source}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.searchTitle}>Search For Quotes</Text>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#ddd" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
      </View>
      
      <FlatList
        data={quotes.filter(quote => 
          quote.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
          quote.source.toLowerCase().includes(searchQuery.toLowerCase())
        )}
        renderItem={renderQuote}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
        <Ionicons name="add" size={24} color="#fff" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Ionicons name="close" size={24} color="#393838" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Add Quote</Text>
            <TouchableOpacity onPress={addQuote}>
              <Text style={styles.saveButton}>Save</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.inputLabel}>Quote</Text>
          <TextInput
            style={styles.quoteInput}
            placeholder="Enter quote"
            value={newQuote}
            onChangeText={setNewQuote}
            multiline
          />
          <Text style={styles.inputLabel}>Source</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter source"
            value={newSource}
            onChangeText={setNewSource}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fafafa"
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    marginLeft: 0,
    marginBottom: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: '#fff',
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#393838',
  },
  searchIcon: {
    paddingRight: 10,
  },
  searchTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: "#393838",
    marginLeft: 5,
  },
  quoteContainer: {
    marginBottom: 20,
  },
  quote: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '600',
    color: "#393838",
    marginLeft: 15,
  },
  sourceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#393838',
    marginRight: 8,
  },
  source: {
    fontSize: 16,
    color: '#393838',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#393838',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  modalView: {
    marginTop: 100,
    backgroundColor: "#fafafa",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '100%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "500",
    color:"#393838",
  },
  saveButton: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#393838',
  },
  quoteInput: {
    height: 100,
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    textAlignVertical: 'top',
    backgroundColor:"white",
  },
  input: {
    height: 40,
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    backgroundColor:"white",

},
});