import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Item = ({ item }) => {
    const {
        img,
    } = item
    return (
        <View style={styles.item}>
            <Image
                style={styles.image}
                source={img} />
        </View>
    )
}

export default Item;

const styles = StyleSheet.create({
    item: {
        height: 100,
        width: 100,
    },
    image: {
        with: 50,
        height: 50,
    }
})