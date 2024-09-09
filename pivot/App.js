import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, ScrollView, Animated, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProfilePlaceholder from './ProfilePlaceholder.js';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [activeTab, setActiveTab] = useState('principles');
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const heartScale = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(-Dimensions.get('window').width)).current;

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const handleHeartPress = () => {
    setIsHeartFilled(!isHeartFilled);
    Animated.sequence([
      Animated.timing(heartScale, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(heartScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);

    // Animate the menu in or out
    Animated.timing(slideAnim, {
      toValue: isMenuVisible ? -Dimensions.get('window').width : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Side Menu */}
      <Animated.View style={[styles.sideMenu, { transform: [{ translateX: slideAnim }] }]}>
        <TouchableOpacity onPress={toggleMenu} style={styles.closeMenuIcon}>
          <Ionicons name="close" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.menuContent}>
          <Text style={styles.menuText}>Menu Option 1</Text>
          <Text style={styles.menuText}>Menu Option 2</Text>
          <Text style={styles.menuText}>Menu Option 3</Text>
        </View>
      </Animated.View>

      <View style={styles.header}>
        <ProfilePlaceholder />
        <View style={styles.searchBar}>
          <Text style={styles.searchText}>Search</Text>
          <Ionicons
            name="search"
            size={24}
            color="white"
            style={styles.searchIcon}
          />
        </View>
        <View style={styles.rightIcons}>
          <TouchableOpacity onPress={handleHeartPress}>
            <Animated.View style={{ transform: [{ scale: heartScale }] }}>
              <Ionicons
                name={isHeartFilled ? "heart" : "heart-outline"}
                size={24}
                color={isHeartFilled ? "red" : "#2C3134"}
                style={styles.icon}
              />
            </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleMenu}>
            <Ionicons
              name="menu"
              size={30}
              color="white"
              style={styles.menuIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider} />
      <View style={styles.tabContainer}>
        <View style={styles.spacer} />
        <View style={styles.tabWrapper}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'principles' && styles.activeTab]}
            onPress={() => handleTabPress('principles')}
          >
            <Text style={[styles.tabText, activeTab === 'principles' && styles.activeTabText]}>
              Principles
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'templates' && styles.activeTab]}
            onPress={() => handleTabPress('templates')}
          >
            <Text style={[styles.tabText, activeTab === 'templates' && styles.activeTabText]}>
              Templates
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.mainContent}>
          <Text style={styles.mainContentText}></Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <LinearGradient
          colors={['#1a5f7a', '#1a4375']}
          style={styles.fabGradient}
        >
          <Ionicons name="add" size={24} color="white" />
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1113',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "rgba(14, 17, 19, 0.5)",
  },
  menuIcon: {
    marginLeft: 15,
  },
  sideMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '80%',
    backgroundColor: '#1a1a1a',
    zIndex: 1000,
    paddingTop: 60,
    paddingLeft: 20,
  },
  closeMenuIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  menuContent: {
    marginTop: 40,
  },
  menuText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0E1113',
    borderRadius: 20,
    paddingHorizontal: 15,
    borderColor: '#2C3134',
    borderWidth: 1,
    marginHorizontal: 10,
    height: 35,
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#2C3134',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  spacer: {
    flex: 1,
  },
  tabWrapper: {
    flexDirection: 'row',
    backgroundColor: '#0E1113',
    borderRadius: 20,
    borderColor: '#2C3134',
    borderWidth: 1,
    overflow: 'hidden',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  activeTab: {
    backgroundColor: '#FFFFFF',
  },
  tabText: {
    color: '#FFFFFF',
    fontSize: 13,
  },
  activeTabText: {
    color: '#000000',
    fontWeight: "600",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  mainContent: {
    flex: 1,
    padding: 20,
  },
  mainContentText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    borderRadius: 30,
    overflow: 'hidden',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});
