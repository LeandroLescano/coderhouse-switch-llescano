import {Pressable, Text, View} from 'react-native';

import React from 'react';
import {buttons} from '../styles/Global.styles';
import styles from '../styles/Home.styles';

function Home({startGame}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Pressable style={buttons.primary} onPress={startGame}>
        <Text style={buttons.primaryText}>Iniciar</Text>
      </Pressable>
    </View>
  );
}

export default Home;
