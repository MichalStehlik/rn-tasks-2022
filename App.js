import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import {useDataContext, DataProvider} from "./providers/DataProvider"
import {List} from "./components/List"

const STORAGE_KEY = "firstApplicationStorage"

const storeData = async (data, key) => {
  const jsonValue = JSON.stringify(data)
  await AsyncStorage.setItem(key, jsonValue)
}

const loadData = async (key) => {
  const jsonValue = await AsyncStorage.getItem(key)
  return jsonValue != null ? JSON.parse(jsonValue) : null;
}

export const App = () => {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  useEffect(async () => {
    let data = await loadData(STORAGE_KEY);
    console.log(data);
    setGoals(data);
  }, []);

  return (
    <DataProvider>
      <View style={styles.screen}>
        <Text style={styles.text}>Best Goals checklist application EVER!</Text>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancelGoalAdditionHandler}
        />
        <List />
        <StatusBar style="auto" />
      </View>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10
  },
  text: {
    padding: 10,
    textAlign: "center",
    fontSize: 24
  }
});

export default App;