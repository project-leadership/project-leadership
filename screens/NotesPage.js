import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, Pressable, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NotesPage = ({ navigateTo, deleteEntry, savedEntry, setSavedEntry }) => {
  const [entryTemplate, setEntryTemplate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [moreOptionsVisible, setMoreOptionsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [sortOrder, setSortOrder] = useState('newest'); // New state for sorting

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      const template = await AsyncStorage.getItem('entryTemplate');
      if (template !== null) {
        setEntryTemplate(template);
      }
    } catch (error) {
      console.error('Error retrieving template', error);
    }
  };

  const saveData = async (entry) => {
    try {
      const existingEntry = await AsyncStorage.getItem('journalEntry');
      const newEntry = existingEntry ? existingEntry + '\n\n' + entry : entry;
      await AsyncStorage.setItem('journalEntry', newEntry);
      setSavedEntry(newEntry);
      console.log('Data appended successfully');
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  const handleDeleteEntry = (index) => {
    Alert.alert(
      'Delete Entry',
      'Are you sure you want to delete this entry?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK', onPress: async () => {
            try {
              let currentEntries = savedEntry.split('\n\n');
              currentEntries.splice(index, 1);
              const updatedEntries = currentEntries.join('\n\n');
              await AsyncStorage.setItem('journalEntry', updatedEntries);
              setSavedEntry(updatedEntries);
              console.log('Entry deleted successfully');
            } catch (error) {
              console.error('Error deleting entry', error);
            }
          }
        },
      ],
      { cancelable: false }
    );
  };

  const handlePress = (item) => {
    setSelectedItem(item);
  };

  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
  };

  const handleSettingsNavigation = () => {
    navigateTo('settings');
    setModalVisible(false);
  };

  const handleHomeworkNavigation = () => {
    navigateTo('homework');
    setModalVisible(false);
  };

  const handleYourPrincipleNavigation = () => {
    navigateTo('yourprinciple');
    setModalVisible(false);
  };

  const handleOurPrincipleNavigation = () => {
    navigateTo('ourprinciple');
    setModalVisible(false);
  };

  const toggleMoreOptions = (index) => {
    setMoreOptionsVisible((prev) => (prev === index ? null : index));
  };

  const filterEntries = () => {
    if (!searchQuery.trim()) {
      const entries = savedEntry ? savedEntry.split('\n\n') : [];
      if (sortOrder === 'newest') {
        return entries.reverse();
      }
      return entries;
    }

    let filteredEntries = (savedEntry ? savedEntry.split('\n\n') : [])
      .filter(entry => entry.toLowerCase().includes(searchQuery.toLowerCase()));

    if (sortOrder === 'newest') {
      return filteredEntries.reverse();
    }
    return filteredEntries;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.searchBarContainer}>
          <Feather name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for any note"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity style={styles.menuIconContainer} onPress={() => setModalVisible(true)}>
          <Feather name="chevrons-down" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.dateIconContainer}>
        <Text style={styles.dateText}>{getCurrentDate()}</Text>
        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
            <Feather name="plus" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
          >
            <Feather name="align-center" size={24} color="black" />
            <Text>{sortOrder === 'newest' ? 'Newest' : 'Oldest'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.entriesContainer}>
        {filterEntries().length > 0 ? (
          filterEntries().map((entry, index) => (
            <View key={index} style={localStyles.entryContainer}>
              <Text style={localStyles.entryTemplate}>{entryTemplate.split("\n\n")[index] || 'Journal Entry'}:</Text>
              <Text style={localStyles.entryText}>{entry}</Text>
              <View style={localStyles.hr} />
              <View style={localStyles.entryFooter}>
                <Text style={localStyles.entryDate}>{new Date().toLocaleDateString()}</Text>
                <TouchableOpacity onPress={() => toggleMoreOptions(index)}>
                  <Feather name="more-horizontal" size={16} color="#333" style={localStyles.moreIcon} />
                </TouchableOpacity>
              </View>
              {moreOptionsVisible === index && (
                <View style={localStyles.optionsContainer}>
                  <TouchableOpacity style={localStyles.optionButton} onPress={() => console.log('Edit')}>
                    <Text style={localStyles.optionText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={localStyles.optionButton} onPress={() => console.log('Bookmark')}>
                    <Text style={localStyles.optionText}>Bookmark</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={localStyles.optionButton} onPress={() => handleDeleteEntry(index)}>
                    <Text style={localStyles.optionText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))
        ) : (
          <Text style={localStyles.noEntryText}>No matching entries found.</Text>
        )}
        <View style={{ height: 60 }} />
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeIconContainer}>
              <Feather name="x" size={24} color="#393938" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Menu</Text>
            <Pressable style={styles.modalOption} onPress={handleSettingsNavigation}>
              <Feather name="settings" size={20} color="#393938" />
              <Text style={styles.modalOptionText}>Settings</Text>
            </Pressable>
            <Pressable style={styles.modalOption} onPress={handleHomeworkNavigation}>
              <Feather name="book" size={20} color="#393938" />
              <Text style={styles.modalOptionText}>Homework</Text>
            </Pressable>
            <Pressable style={styles.modalOption} onPress={handleYourPrincipleNavigation}>
              <Feather name="file" size={20} color="#393938" />
              <Text style={styles.modalOptionText}>Your Principles</Text>
            </Pressable>
            <Pressable style={styles.modalOption} onPress={handleOurPrincipleNavigation}>
              <Feather name="file" size={20} color="#393938" />
              <Text style={styles.modalOptionText}>Our Principles</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const localStyles = StyleSheet.create({
  entryContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  entryTemplate: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  entryText: {
    fontSize: 16,
    color: '#333',
  },
  hr: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  entryFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  entryDate: {
    fontSize: 14,
    color: '#999',
  },
  moreIcon: {
    marginLeft: 10,
  },
  optionsContainer: {
    marginTop: 10,
  },
  optionButton: {
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  noEntryText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 10,
    flex: 1,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  menuIconContainer: {
    marginLeft: 10,
    marginRight: 0,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 6,
  },
  iconContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 6,
    marginRight: -7,
    marginLeft: 17,
  },
  dateIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateText: {
    fontSize: 25,
    color: '#393838',
    marginLeft: 3,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  entriesContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    height: '45%',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  closeIconContainer: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    width: '100%',
    justifyContent: 'flex-start',
  },
  modalOptionText: {
    fontSize: 20,
    color: '#333',
    marginLeft: 10,
  },
});

export default NotesPage;