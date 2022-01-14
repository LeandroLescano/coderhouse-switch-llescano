import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

import StyledButton from '../components/StyledButton';
import styles from '../styles/Home.styles';
import {text} from '../styles/Global.styles';

function Home({startGame}) {
  const [number, setNumber] = useState('');

  const handleNumber = num => {
    if (num === '') {
      setNumber('');
      return;
    }
    const inputNumber = Number(num);
    if (inputNumber >= 1 && inputNumber <= 100) {
      setNumber(num);
    } else if (inputNumber < 1) {
      setNumber('1');
    } else {
      setNumber('100');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={text.normal}>Elija un número</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={number}
          onChangeText={txt => handleNumber(txt.replace(/[^0-9]/g, ''))}
        />
        <StyledButton
          title="LIMPIAR"
          pressAction={() => setNumber('')}
          type="secondary"
        />
      </View>
      <StyledButton
        pressAction={() => startGame(number)}
        title="INICIAR"
        disabled={number.length <= 0}
      />
    </View>
  );
}

export default Home;
