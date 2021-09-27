import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Menu from './Menu';
const Menus = ({ menus }) => {
    return (
        <View style={styles.container}>
            {
                menus.map((menu, index) => <Menu key={index} menu={menu} />)
            }
        </View>
    )
}

export default Menus;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE',
        paddingLeft: 20,
        paddingTop: 30,
        gap: 20,
        width: '100%',
        flexGrow: 1,
    },
});