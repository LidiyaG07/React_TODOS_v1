import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ListItems({ el, deleteHandler }) {
  return (
    <TouchableOpacity onPress={() => deleteHandler(el.key)}>
        <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create ({
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: '#fafafa',
    borderWidth: 2,
    borderRadius: 10,
    width: '70%',
    marginTop: 10,
    marginLeft: '15%',
  }
});