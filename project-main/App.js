import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfilePlaceholder from './components/ProfilePlaceholder'; 
import HomePage from './Homepage.js';
import Template from './template.js';
import Course from './courses.js';
import QuoteScreen from './QuoteScreen.js';  
import ModalComponent from './ModalComponent.js';
import SettingsScreen from './SettingsScreen.js';  
import HomeworkScreen from './HomeworkScreen.js';  
import NotesScreen from './NotesScreen.js';  
import IntroScreen from './IntroScreen.js';  
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Default Header Component
function Header() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <ProfilePlaceholder />
          <View style={styles.profileText}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.profileTitle}>
                Richards Workplace <Ionicons name="chevron-down" size={16} color="#393838" />
              </Text>
            </TouchableOpacity>
            <Text style={styles.profileEmail}>richard@gmail.com</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.menuIcon}>
          <Ionicons name="ellipsis-horizontal" size={24} color="#393838" />
        </TouchableOpacity>
      </View>

      {/* Modal Component */}
      <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
}

// Custom Header for QuoteScreen
function QuoteHeader({ navigation }) {
  return (
    <View style={quoteHeaderStyles.container}>
      <View style={quoteHeaderStyles.header}>
        {/* Arrow Back Icon */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={quoteHeaderStyles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={quoteHeaderStyles.title}>Quotes</Text>

        {/* Share Icon */}
        <TouchableOpacity style={quoteHeaderStyles.iconButton}>
          <Ionicons name="share-outline" size={24} color="#333" />
        </TouchableOpacity>

        {/* Ellipsis Icon */}
        <TouchableOpacity style={quoteHeaderStyles.iconButton}>
          <Ionicons name="ellipsis-horizontal" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Grey Horizontal Line */}
      <View style={quoteHeaderStyles.hr} />
    </View>
  );
}

function HomeworkHeader({ navigation }) {
  return (
    <View style={quoteHeaderStyles.container}>
      <View style={quoteHeaderStyles.header}>
        {/* Arrow Back Icon */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={quoteHeaderStyles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        
        {/* Title */}
        <Text style={quoteHeaderStyles.title}>Homework</Text>

        {/* Ellipsis Icon */}
        <TouchableOpacity style={quoteHeaderStyles.iconButton}>
          <Ionicons name="ellipsis-horizontal" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Grey Horizontal Line */}
      <View style={quoteHeaderStyles.hr} />
    </View>
  );
}

function NotesHeader({ navigation }) {
  return (
    <View style={NotesHeaderStyles.container}>
      <View style={quoteHeaderStyles.header}>
        {/* Arrow Back Icon */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={quoteHeaderStyles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        
        {/* Title */}
        <Text style={NotesHeaderStyles.title}>Notes</Text>

        {/* Ellipsis Icon */}
        
      </View>

   
    </View>
  );
}




function SettingsHeader({ navigation }) {
  return (
    <View style={quoteHeaderStyles.container}>
      <View style={quoteHeaderStyles.header}>
        {/* Arrow Back Icon */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={quoteHeaderStyles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        
        {/* Title */}
        <Text style={quoteHeaderStyles.title}>Settings</Text>

        {/* Ellipsis Icon */}
        <TouchableOpacity style={quoteHeaderStyles.iconButton}>
          <Ionicons name="ellipsis-horizontal" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Grey Horizontal Line */}
      <View style={quoteHeaderStyles.hr} />
    </View>
  );
}
function IntroHeader({ navigation }) {
  return (
    <View style={quoteHeaderStyles.container}>
      <View style={quoteHeaderStyles.header}>
        {/* Arrow Back Icon */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={quoteHeaderStyles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        
        {/* Title */}
        <Text style={quoteHeaderStyles.title}>Intro</Text>

        {/* Ellipsis Icon */}
        <TouchableOpacity style={quoteHeaderStyles.iconButton}>
          <Ionicons name="ellipsis-horizontal" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Grey Horizontal Line */}
      <View style={quoteHeaderStyles.hr} />
    </View>
  );
}

// Home Stack with custom header for QuoteScreen
function HomeStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          header: () => <Header />, // Default header for other screens
        }}
      />
      
      <Stack.Screen
        name="QuoteScreen"
        component={QuoteScreen}
        options={({ navigation }) => ({
          header: () => <QuoteHeader navigation={navigation} />, // Custom header for QuoteScreen
        })}
      />
       <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={({ navigation }) => ({
          header: () => <SettingsHeader navigation={navigation} />, // Custom header for QuoteScreen
        })}
      />
     <Stack.Screen
        name="HomeworkScreen"
        component={HomeworkScreen}
        options={({ navigation }) => ({
          header: () => <HomeworkHeader navigation={navigation} />, 
        })}
      />
      <Stack.Screen
        name="NotesScreen"
        component={NotesScreen}
        options={({ navigation }) => ({
          header: () => <NotesHeader navigation={navigation} />, 
        })}
      />
    </Stack.Navigator>
  );
}

// Template Stack
function TemplateStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header />, // Default header for Template screen
      }}
    >
      <Stack.Screen name="Template" component={Template} />
  
    </Stack.Navigator>
  );
}

// Course Stack
function CourseStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header />, // Default header for Course screen
      }}
    >
      <Stack.Screen name="Course" component={Course} />
      <Stack.Screen
        name="IntroScreen"
        component={IntroScreen}
        options={({ navigation }) => ({
          header: () => <IntroHeader navigation={navigation} />, 
        })}
      />
   
    </Stack.Navigator>
  );
}

// Bottom tab navigator
function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Template') {
            iconName = focused ? 'create' : 'create-outline';
          } else if (route.name === 'Course') {
            iconName = focused ? 'albums' : 'albums-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#393838',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0, // Removes the top border
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Template" component={TemplateStack} />
      <Tab.Screen name="Course" component={CourseStack} />
    </Tab.Navigator>
  );
}

// Main App
export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

// Styles for the default Header
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fafafa',
    marginTop: 15,
  },
  profileContainer: {  
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileText: {
    marginLeft: 12, 
  },
  profileTitle: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '600',
  },
  profileEmail: {
    fontSize: 14,
    color: '#666666',
  },
  menuIcon: {
    padding: 4,
  },
});

// Styles for the custom QuoteScreen Header
const quoteHeaderStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333333',
    flex: 1,
    textAlign: 'center',
   
  },
  iconButton: {
    padding: 8,
  },
  hr: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 8,
  },
});

const NotesHeaderStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333333',
    flex: 1,
    marginRight:10,
    marginLeft:10,
   
  },
  iconButton: {
    padding: 8,
  },
  hr: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 8,
  },
});

