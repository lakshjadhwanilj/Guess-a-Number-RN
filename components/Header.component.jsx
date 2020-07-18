import React from 'react';
// CORE COMPONENTS
import { View, StyleSheet } from 'react-native';
// CUSTOM COMPONENTS
import TitleText from './TitleText.component';
// CONSTANTS
import Colors from '../constants/colors';

const Header = props => {
    return (
        <View style={styles.header}>
            <TitleText style={styles.headerTitle}>{props.title}</TitleText>
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
        color: '#fff',
    }
});

export default Header;