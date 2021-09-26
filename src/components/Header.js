import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {

    return (
        <View style={StyledHeader.main}>
            <Text style={StyledHeader.title}>
                DrivenEats
            </Text>
            <Text style={StyledHeader.subTitle}>
                Sua comida em 6 minutos
            </Text>
        </View>
    )
}

const StyledHeader = StyleSheet.create({
    main: {
        backgroundColor: '#CF2B2B',
        height: 92,
        paddingLeft: 20,
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    title: {
        fontFamily: 'Righteous',
        fontSize: 44,
        color: '#ffffff'
    },
    subTitle: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#ffffff'
    }
})

export default Header;