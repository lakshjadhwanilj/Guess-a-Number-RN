import React from 'react';
// CORE COMPONENTS
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
// CONSTANTS
import Colors from '../constants/colors';

const PrimaryButton = props => {

    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.btnContainer}>
            <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        borderRadius: 25,
        overflow: 'hidden'
    },
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