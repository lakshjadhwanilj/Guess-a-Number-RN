import React from 'react';
// CORE COMPONENTS
import { View, StyleSheet, Platform } from 'react-native';
// CUSTOM COMPONENTS
import TitleText from './TitleText.component';
// CONSTANTS
import Colors from '../constants/colors';

const Header = props => {
    return (
        <View style={{
            ...styles.header,
            ...Platform.select({
                ios: styles.headerIOS,
                android: styles.headerAndroid
            })
        }}>
            <TitleText style={styles.headerTitle}>
                {props.title}
            </TitleText>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIOS: {
        backgroundColor: '#fff',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerAndroid: {
        backgroundColor: Colors.primary
    },
    headerTitle: {
        color: Platform.OS === 'ios' ? Colors.primary : '#fff',
    }
});

export default Header;