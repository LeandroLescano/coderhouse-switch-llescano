import {Pressable, Text} from 'react-native';
import React, {useState} from 'react';
import {buttons, theme} from '../styles/Global.styles';

function MainButton({pressAction, title, disabled = false}) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      disabled={disabled}
      style={[
        buttons.primary,
        {
          backgroundColor: disabled
            ? '#CCC'
            : isPressed
            ? theme.ACCENT_COLOR
            : theme.PRIMARY_COLOR,
        },
      ]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={() => pressAction()}>
      <Text style={buttons.primaryText}>{title}</Text>
    </Pressable>
  );
}

export default MainButton;
