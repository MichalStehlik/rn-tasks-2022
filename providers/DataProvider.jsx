import React, { createContext, useContext, useState, useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

// https://reactnative.directory/?search=storage

const KEY = "stored_data";

export const DataContext = createContext();
export const DataConsumer = DataContext.Consumer;

export const DataProvider = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const loadData = async (key) => {
            try {
                const value = await AsyncStorage.getItem(key);
                if (value !== null) {
                    console.log(value);
                    setItems(JSON.parse(value));
                } else {
                    setItems([]);
                }
                
            } catch(e) {
                console.error(e);
                setItems([]);
            }   
        }
        loadData(KEY);
    },[]);

    useEffect(() => {
        const storeData = async (data, key) => {
            try {
                const jsonValue = JSON.stringify(data);
                await AsyncStorage.setItem(key, jsonValue)
            }
            catch (e) {
                console.error(e);
            }
        }
        storeData(items, KEY);
    },[items]);

    const addItem = (text) => {
        setItems(prev => [
            ...prev,
            { id: Math.random().toString(), value: text}
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