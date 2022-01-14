import {Text, View} from 'react-native';
import {header, text} from '../styles/Global.styles';

import React from 'react';
import SecondaryButton from './SecondaryButton';

function Header({title, isStarted, handleBack}) {
  return (
    <View style={header.container}>
      {isStarted ? (
        <SecondaryButton title="Salir" pressAction={() => handleBack()} />
      ) : null}
      <Text style={[text.title, {flex: 1}]}>{title}</Text>
    </View>
  );
}

export default Header;
