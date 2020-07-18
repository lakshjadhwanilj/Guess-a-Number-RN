import React from 'react';
// CORE COMPONENTS
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// CONSTANTS
import Colors from '../constants/colors';

const PrimaryButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    btnText: {
        color: '#fff',
        fontFamily: 'open-sans',
        fontSize: 18
    }
});

export default PrimaryButton;