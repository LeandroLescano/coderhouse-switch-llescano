import {Alert, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import StyledButton from '../components/StyledButton';
import styles from '../styles/Game.styles';
import {text} from '../styles/Global.styles';

function Game({stopGame, number}) {
  const [generatedNumber, setGeneratedNumber] = useState(0);
  const [numbers, setNumbers] = useState({max: 100, min: 0});
  const [excludedNumbers, setExcludedNumbers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [loading, setLoading] = useState(false);

  const randomNumberBetween = (min, max) => {
    setLoading(true);
    let num = Math.floor(Math.random() * (max - min)) + min;
    if (excludedNumbers.includes(num)) {
      return randomNumberBetween(min, max);
    }
    setTimeout(() => {
      setLoading(false);
    }, 200);
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
  };

  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        {!isCorrect && <Text style={text.normal}>Suposición</Text>}
        <Text style={styles.randomNumber}>
          {loading ? '...' : generatedNumber}
        </Text>
      </View>
      {!isCorrect ? (
        <>
          <View style={styles.buttonsContainer}>
            <StyledButton
              title="MENOR"
              pressAction={() => handleMaxMin('max')}
            />
            <StyledButton
              title="MAYOR"
              pressAction={() => handleMaxMin('min')}
            />
          </View>
          <Text>Tu número: {number}</Text>
        </>
      ) : (
        !loading && (
          <>
            <Text style={text.title}>NÚMERO CORRECTO</Text>
            <StyledButton pressAction={stopGame} title="REINICIAR" />
          </>
        )
      )}
    </View>
  );
}

export default Game;
