import { StyleSheet, View, Button, FlatList, Text } from 'react-native'
import {useDataContext} from "../providers/DataProvider"
import {Item} from "./Item"

export const List = () => {
    const {items, removeItem} = useDataContext();
    return (
        <FlatList
        keyExtractor={(item, index) => item.id}
        data={items}
        renderItem={data => (<Item id={data.item.id} value={data.item.value} deleteAction={e => removeItem(data.item.id)} />)}
        />
    );
}

export default List;