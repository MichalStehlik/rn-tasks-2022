import React, { createContext, useContext, useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DataContext = createContext();
export const DataConsumer = DataContext.Consumer;

const storeData = async (data, key) => {
    const jsonValue = JSON.stringify(data)
    await AsyncStorage.setItem(key, jsonValue)
  }
  
  const loadData = async (key) => {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  }

export const DataProvider = (props) => {
    const [items, setItems] = useState([{id: 1, value: "A"}]);

    const addItem = () => {
        setItems(prev => [
            ...prev,
            { id: Math.random().toString(), value: goalTitle }
        ]);
    };

    const removeItem = (id) => {
        setItems(prev => {
            return prev.filter(item => item.id !== id);
        });
    };

    return (
        <DataContext.Provider value={{items, setItems, addItem, removeItem}}>
            {props.children}
        </DataContext.Provider>
    );
}

export const useDataContext = () => useContext(DataContext);