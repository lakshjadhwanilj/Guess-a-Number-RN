import React from 'react';
// CORE COMPONENTS
import { View, StyleSheet } from 'react-native';

const Card = props => (
    <View style={{ ...styles.card, ...props.style }}>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: '#fff',
        elevation: 8,
        padding: 20,
        borderRadius: 10
    }
});

export default Card;