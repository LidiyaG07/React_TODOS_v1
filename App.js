import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import ListItems from './components/listItems';
import Form from './components/form';

export default function App() {
  const [listItems, setListOfItems] = useState([
    {text: 'Test 1', key: '1'},
    {text: 'Test 2', key: '2'},
    {text: 'Test 3', key: '3'},
    {text: 'Test 4', key: '4'},
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return[
        {text: text, key: Math.random().toString(36).substring(7)},
        ...list
      ]
    })
  }

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listItems => listItems.key != key )
    });
  }

  return (
    <View >
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={setListOfItems} renderItem={({item}) => (
          <ListItems el={item} deleteHandler={deleteHandler}/>
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
