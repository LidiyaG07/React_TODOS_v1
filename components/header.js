import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
        <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '5%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    padding: '10%',
    backgroundColor: '#ccc', 
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});