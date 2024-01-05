import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, Text, Button, View, TextInput } from 'react-native';

export default function Form({addHandler}) {
    const [text, setValue] = useState('');
    const onchange = (text) => {
        setValue(text);
    };
    return (
        <View>
            <TextInput style={styles.input} onChangeText={onchange} placeholder='Write task'/>
            <Button onPress={() => addHandler(text)} title='Add task'/>
        </View>
  );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        padding: 10,
        borderRadius: 10,
        borderBottomWidth: 2,
        borderColor: '#000',
        width: '70%',
        marginTop: 10,
        marginLeft: '15%',
        marginVertical: 30,

    }
});