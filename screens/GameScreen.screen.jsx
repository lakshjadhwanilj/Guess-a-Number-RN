import React, { useState, useRef, useEffect } from 'react';
// ICONS
import { Ionicons } from '@expo/vector-icons'
// CORE COMPONENTS
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
// CUSTOM COMPONENTS
import NumberContainer from '../components/NumberContainer.component';
import Card from '../components/Card.component';
import TitleText from '../components/TitleText.component';
import BodyText from '../components/BodyText.component';
import PrimaryButton from '../components/PrimaryButton.component';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    if (randomNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNum;
    }
};

const renderListItem = (value, numOfRound) => (
    <View key={value} style={styles.listItem}>
        <BodyText>#{numOfRound}</BodyText>
        <BodyText>{value}</BodyText>
    </View>
);

const GameScreen = props => {

    const initialGuess = generateRandomBetween(1, 100, props.userChoice);

    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length)
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice)) {
            Alert.alert("Don't Lie!", 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        // setRounds(currentRounds => currentRounds + 1);
        setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
    };

    return (
        <View style={styles.screen}>
            <TitleText>Computer's Guess</TitleText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.btnContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name='md-remove' size={24} color='white' />
                </PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name='md-add' size={24} color='white' />
                </PrimaryButton>
            </Card>
            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 400,
        maxWidth: '90%'
    },
    listContainer: {
        width: '80%',
        flex: 1
    },
    list: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        flexDirection: 'row',
        marginVertical: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        width: '60%'
    }
});

export default GameScreen;