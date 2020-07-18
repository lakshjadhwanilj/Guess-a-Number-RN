import React, { useState, useEffect } from 'react';
// CORE COMPONENTS
import { View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native';
// CUSTOM COMPONENTS
import Card from '../components/Card.component';
import Input from '../components/Input.component';
import PrimaryButton from '../components/PrimaryButton.component';
import NumberContainer from '../components/NumberContainer.component';
import TitleText from '../components/TitleText.component';
import BodyText from '../components/BodyText.component';
// CONSTANTS
import Colors from '../constants/colors';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [btnWidth, setBtnWidth] = useState(Dimensions.get('window').width / 4);

    const numberInputHandler = inputText =>
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    useEffect(() => {
        const updateLayout = () => setBtnWidth(Dimensions.get('window').width / 4);
        Dimensions.addEventListener('change', updateLayout);
        return () => Dimensions.removeEventListener('change', updateLayout);
    })

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <BodyText>You Selected</BodyText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <PrimaryButton onPress={() => props.onStartGame(selectedNumber)}>
                    START GAME
                </PrimaryButton>
            </Card>
        )
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.screen}>
                        <TitleText style={styles.title}>Start a New Game!</TitleText>
                        <Card style={styles.inputContainer}>
                            <BodyText> Select a Number </BodyText>
                            <Input
                                blurOnSubmit
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='number-pad'
                                macLength={2}
                                style={styles.input}
                                onChangeText={numberInputHandler}
                                value={enteredValue}
                            />
                            <View style={styles.btnContainer}>
                                <View style={{ width: btnWidth }}>
                                    <Button color={Colors.secondary} title='Reset' onPress={resetInputHandler} />
                                </View>
                                <View style={{ width: btnWidth }}>
                                    <Button color={Colors.primary} title='Confirm' onPress={confirmInputHandler} />
                                </View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        alignItems: 'center',
    },
    input: {
        // width: 50,
        width: Dimensions.get('window').width / 4,
        textAlign: 'center'
    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    btn: {
        width: 100
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;