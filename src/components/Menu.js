import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Item from './Item';
const Menu = ({ menu }) => {
    const {
        title,
        itens
    } = menu
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.itens}>
                {itens.map(item => <Item item={item} />)}

            </View>
        </View>
    )
}

export default Menu;

const styles = StyleSheet.create({
    container: {
    },
    title: {
        color: '#333333',
        fontSize: 26,
        fontFamily: 'Righteous'
    },
    itens: {

    }
});