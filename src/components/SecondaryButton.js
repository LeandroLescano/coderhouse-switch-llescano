import {Pressable, Text} from 'react-native';
import React, {useState} from 'react';
import {buttons, theme} from '../styles/Global.styles';

function SecondaryButton({pressAction, title}) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      style={[
        buttons.secondary,
        {backgroundColor: isPressed ? theme.ACCENT_COLOR : theme.PRIMARY_COLOR},
      ]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={() => pressAction()}>
      <Text style={buttons.secondaryText}>{title}</Text>
    </Pressable>
  );
}

export default SecondaryButton;
