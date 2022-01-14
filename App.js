import React, {useState} from 'react';

import Game from './src/screens/Game';
import Header from './src/components/Header';
import Home from './src/screens/Home';
import {SafeAreaView} from 'react-native';

const App = () => {
  const [gameStart, setGameStart] = useState(false);
  const [number, setNumber] = useState('');

  const handleStart = num => {
    setGameStart(true);
    setNumber(num);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        title={'Adivina el número'}
        isStarted={gameStart}
        handleBack={() => setGameStart(false)}
      />
      {!gameStart ? (
        <Home startGame={num => handleStart(Number(num))} />
      ) : (
        <Game stopGame={() => setGameStart(false)} number={number} />
      )}
    </SafeAreaView>
  );
};
export default App;
