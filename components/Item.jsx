import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export const Item = ({id, value, deleteAction}) => {
    return (
        <TouchableOpacity onPress={deleteAction} >
          <View style={styles.item}>
            <Text>{value}</Text>
          </View>
        </TouchableOpacity>
      );
}

const styles = StyleSheet.create({
    item: {
      padding: 5,
      marginVertical: 5,
      backgroundColor: '#eee',
      borderColor: '#bbb',
      borderWidth: 1,
      color: "#bbb"
    }
});

export default Item;