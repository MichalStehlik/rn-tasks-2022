import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import Input from './components/Input';
import {DataProvider} from "./providers/DataProvider"
import {List} from "./components/List"

export const App = () => {
  const [isAddMode, setIsAddMode] = useState(false);

  useEffect(async () => {

  },[]);

  return (
    <DataProvider>
      <View style={styles.screen}>
        <Text style={styles.text}>Item list</Text>
        <Button title="Add" onPress={() => setIsAddMode(true)} />
        <Input visible={isAddMode} changeVisible={setIsAddMode} />
        <List />
        <StatusBar style="auto" />
      </View>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    display: "flex",
    flexDirection: "column"
  },
  text: {
    padding: 10,
    textAlign: "center",
    fontSize: 24
  }
});

export default App;