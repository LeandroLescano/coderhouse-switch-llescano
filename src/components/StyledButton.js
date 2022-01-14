import {Pressable, Text} from 'react-native';
import React, {useState} from 'react';
import {buttons, theme} from '../styles/Global.styles';

function StyledButton({
  pressAction,
  title,
  disabled = false,
  type = 'primary',
}) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      disabled={disabled}
      style={[
        type === 'primary' ? buttons.primary : buttons.secondary,
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
      <Text
        style={
          type === 'primary' ? buttons.primaryText : buttons.secondaryText
        }>
        {title}
      </Text>
    </Pressable>
  );
}

export default StyledButton;
