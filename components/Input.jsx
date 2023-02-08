import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'
import {useDataContext} from "../providers/DataProvider"

export const Input = ({visible, changeVisible}) => {
    const [enteredItem, setEnteredItem] = useState('');
    const {addItem} = useDataContext();

    return (
        <Modal visible={visible} animationType="slide" style={styles.window}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Some item"
                    style={styles.input}
                    onChangeText={(text) => {setEnteredItem(text)}}
                    value={enteredItem}
                />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Cancel" color="red" onPress={() => { changeVisible(false) }} />
              </View>
              <View style={styles.button}>
                <Button title="Add" onPress={e => { addItem(enteredItem); changeVisible(false); setEnteredItem("");}} />
              </View>
            </View>
          </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    window: {
        backgroundColor: "silver"
    },
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      marginBottom: 10
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '60%'
    },
    button: {
      width: '40%'
    }
  });

export default Input;