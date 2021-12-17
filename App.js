import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Game from './components/Game'

export default function App() {
  resetGame = () => {
    this.setState((prevState)=>{
      return { gameId : prevState.gameId + 1 }
    });
  }
 
  return (
    <View style={styles.container}>
      <Game key={this.state.gameId} onPlayAgain={this.resetGame}randomNumbersCount={6} initialSeconds={10} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingHorizontal: 50,
  },
});