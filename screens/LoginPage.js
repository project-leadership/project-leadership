import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log(`${isLogin ? 'Login' : 'Sign Up'} button pressed`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</Text>
          <TouchableOpacity onPress={() => console.log('Close pressed')}>
            <Feather name="x" size={24} color="#333" />
          </TouchableOpacity>
        </View>
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          placeholderTextColor="#888"
        />
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          placeholderTextColor="#888" 
          secureTextEntry
        />
        {!isLogin && (
          <TextInput 
            style={styles.input} 
            placeholder="Confirm Password" 
            placeholderTextColor="#888" 
            secureTextEntry
          />
        )}
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={toggleForm}
        >
          <Text style={styles.switchText}>
            {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  formContainer: {
    width: '100%',
   height:"100%",
   
    padding: 20,
   
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center', // Centered horizontally
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 29,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'normal',
    flex: 1,
  },
  input: {
    width: 280,
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 15,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: 280,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    
  },
  switchText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
  },
});
