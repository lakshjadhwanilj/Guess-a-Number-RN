import React from 'react';
// CORE COMPONENTS
import { View, StyleSheet, Image, Text, Dimensions, ScrollView } from 'react-native';
// CUSTOM COMPONENTS
import TitleText from '../components/TitleText.component';
import BodyText from '../components/BodyText.component';
import PrimaryButton from '../components/PrimaryButton.component';
// CONSTANTS
import Colors from '../constants/colors';

const GameOverScreen = props => {

    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>GAME OVER</TitleText>
                <View style={styles.imgContainer}>
                    <Image
                        source={require('../assets/success.png')}
                        style={styles.img}
                        resizeMode='cover'
                    />
                </View>
                <View style={styles.resultContainer}>
                    <BodyText style={styles.resultText}>
                        Your phone needed <Text style={styles.higlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.higlight}>{props.userNumber}.</Text>
                    </BodyText>
                </View>
                <PrimaryButton onPress={props.onRestart}>
                    NEW GAME
            </PrimaryButton>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    imgContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderColor: '#000',
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    img: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    },
    higlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    }
});

export default GameOverScreen;