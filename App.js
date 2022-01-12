import React, {useState} from 'react';

import Game from './src/screens/Game';
import Home from './src/screens/Home';
import {SafeAreaView} from 'react-native';

const App = () => {
  const [gameStart, setGameStart] = useState(false);

  return (
    <SafeAreaView>
      {!gameStart ? (
        <Home startGame={() => setGameStart(true)} />
      ) : (
        <Game stopGame={() => setGameStart(false)} />
      )}
    </SafeAreaView>
  );
};
export default App;
