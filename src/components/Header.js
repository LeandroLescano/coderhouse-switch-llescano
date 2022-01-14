import {Text, View} from 'react-native';
import {header, text} from '../styles/Global.styles';

import React from 'react';
import StyledButton from './StyledButton';

function Header({title, isStarted, handleBack}) {
  return (
    <View style={header.container}>
      {isStarted ? (
        <StyledButton
          title="Salir"
          pressAction={() => handleBack()}
          type="secondary"
        />
      ) : null}
      <Text style={[text.title, {flex: 1}]}>{title}</Text>
    </View>
  );
}

export default Header;
