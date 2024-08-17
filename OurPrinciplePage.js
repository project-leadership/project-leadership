import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const OurPrinciplePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Our Principles</Text>
      <Feather name="x" size={40} color="black" marginRight={-300} marginTop={-35}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    width:"100%",
  },
  text: {
    fontSize: 30,
    color: '#393838',
    marginTop:-555,
    marginLeft:-160,
    fontWeight:"500",
  },
});

export default OurPrinciplePage;
