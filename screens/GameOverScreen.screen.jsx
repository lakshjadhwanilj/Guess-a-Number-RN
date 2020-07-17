import React, { useState, useRef, useEffect } from 'react';
// CORE COMPONENTS
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
// CUSTOM COMPONENTS

const GameOverScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>GAME OVER</Text>
            <Text>Number of Rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title='NEW GAME' onPress={props.onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;