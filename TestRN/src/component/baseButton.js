import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
function ButtonBase({ title, onPress, style }) {
    return (
        <View style={styles.ctn}>
            <TouchableOpacity onPress={onPress} style={[styles.button, { ...style }]}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    ctn: {
        flexDirection: 'row',
        // margin: 10,
        // paddingHorizontal: 52

    },
    button: {
        paddingHorizontal: 50,
        borderRadius: 10,
        backgroundColor: 'green'
    },
    text: {
        fontSize: 24,
        fontWeight: '500',
        color: "white",
        textAlign: 'center',
        marginVertical: 5,

    }
})

export default ButtonBase