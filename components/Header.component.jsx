import React from 'react';
// CORE COMPONENTS
import { View, Text, StyleSheet } from 'react-native';
// CONSTANTS
import Colors from '../constants/colors';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 30,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: '#000',
        fontSize: 18
    }
});

export default Header;