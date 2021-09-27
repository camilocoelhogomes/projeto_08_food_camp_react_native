import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Item = ({ item }) => {
    const {
        img,
    } = item
    const srcImg = require('../assets/img/food/comida-di-buteco-4.jpg');
    return (
        <View>
            <Image
                style={styles.image}
                source={srcImg} />
        </View>
    )
}

export default Item;

const styles = StyleSheet.create({
    image: {
        with: 50,
        height: 50,
    }
})