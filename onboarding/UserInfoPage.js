import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const UserInfoPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [referral, setReferral] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    // Basic validation
    const newErrors = {};
    if (!firstName) newErrors.firstName = 'First Name is required';
    if (!lastName) newErrors.lastName = 'Last Name is required';
    if (!email || !email.includes('@')) newErrors.email = 'A valid email is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Add form submission logic here
    Alert.alert('Form Submitted', `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nReferral: ${referral}`);
    // Reset form
    setFirstName('');
    setLastName('');
    setEmail('');
    setReferral('');
    setErrors({});
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          value={firstName}
          onChangeText={setFirstName}
          placeholder="First Name"
          style={[styles.input, errors.firstName && styles.errorInput]}
        />
        {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}
        
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          value={lastName}
          onChangeText={setLastName}
          placeholder="Last Name"
          style={[styles.input, errors.lastName && styles.errorInput]}
        />
        {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
        
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          style={[styles.input, errors.email && styles.errorInput]}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        
        <Text style={styles.label}>How did you hear about us?</Text>
        <TextInput
          value={referral}
          onChangeText={setReferral}
          placeholder="How did you hear about us?"
          style={styles.input}
        />
        
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393838',
    padding: 20,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "#393838",
    width: '100%',
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: 'white',
    fontWeight: "bold",
    marginLeft:-35,
  },
  input: {
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#404040',
    borderRadius: 4,
    color: 'white',
    width:325,
    marginLeft:-35,
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default UserInfoPage;
