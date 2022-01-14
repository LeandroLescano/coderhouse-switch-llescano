import {Alert, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import MainButton from '../components/MainButton';
import SecondaryButton from '../components/SecondaryButton';
import styles from '../styles/Game.styles';
import {text} from '../styles/Global.styles';

function Game({stopGame, number}) {
  const [generatedNumber, setGeneratedNumber] = useState(0);
  const [numbers, setNumbers] = useState({max: 100, min: 0});
  const [excludedNumbers, setExcludedNumbers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [rounds, setRounds] = useState(0);

  const randomNumberBetween = (min, max) => {
    let num = Math.floor(Math.random() * (max - min)) + min;
    if (excludedNumbers.includes(num)) {
      return randomNumberBetween(min, max);
    }
    return num;
  };

  useEffect(() => {
    const generateNumber = () => {
      setGeneratedNumber(randomNumberBetween(numbers.min, numbers.max));
    };
    generateNumber();
  }, [numbers]);

  useEffect(() => {
    if (generatedNumber === number) {
      setIsCorrect(true);
    }
  }, [generatedNumber]);

  const handleMaxMin = type => {
    if (type === 'max' && number > generatedNumber) {
      Alert.alert(
        'Error',
        'El número generado es menor que el número que buscas',
      );
      return;
    } else if (type === 'min' && number < generatedNumber) {
      Alert.alert(
        'Error',
        'El número generado es mayor que el número que buscas',
      );
      return;
    }
    setNumbers({...numbers, [type]: generatedNumber});
    setExcludedNumbers([...excludedNumbers, generatedNumber]);
    setRounds(current => ++current);
  };

  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        <Text style={text.normal}>Suposición</Text>
        <Text style={styles.randomNumber}>{generatedNumber}</Text>
      </View>
      {!isCorrect ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              justifyContent: 'space-evenly',
              width: '100%',
            }}>
            <SecondaryButton
              title="MENOR"
              pressAction={() => handleMaxMin('max')}
            />
            <SecondaryButton
              title="MAYOR"
              pressAction={() => handleMaxMin('min')}
            />
          </View>
          <Text>Tu número: {number}</Text>
          <Text>Rondas: {rounds}/10</Text>
        </>
      ) : (
        <>
          <Text style={text.title}>NÚMERO CORRECTO</Text>
          <MainButton pressAction={stopGame} title="REINICIAR" />
        </>
      )}
    </View>
  );
}

export default Game;
