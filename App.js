import { StatusBar } from 'expo-status-bar';
import React from 'react';
// CORE COMPONENTS
import { StyleSheet, View } from 'react-native';
// CUSTOM COMPONENTS
import Header from './components/Header.component';
import StartGameScreen from './screens/StartGameScreen.screen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});