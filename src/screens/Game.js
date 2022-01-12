import {Pressable, Text, View} from 'react-native';

import React from 'react';
import {buttons} from '../styles/Global.styles';
import styles from '../styles/Game.styles';

function Game({stopGame}) {
  return (
    <View style={styles.container}>
      <Text>Game Screen</Text>
      <Pressable onPress={stopGame} style={buttons.primary}>
        <Text style={buttons.primaryText}>Reiniciar</Text>
      </Pressable>
    </View>
  );
}

export default Game;
