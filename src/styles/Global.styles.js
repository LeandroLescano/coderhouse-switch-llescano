import {StyleSheet} from 'react-native';

const theme = {
  PRIMARY_COLOR: '#81b29a',
  SECONDARY_COLOR: '#f4f1de',
  ACCENT_COLOR: '#e07a5f',
  DARK_COLOR: '#3d405b',
  LIGHT_COLOR: '#f2cc8f',
};

const buttons = StyleSheet.create({
  primary: {
    backgroundColor: theme.PRIMARY_COLOR,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  primaryText: {
    color: theme.SECONDARY_COLOR,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export {theme, buttons};
