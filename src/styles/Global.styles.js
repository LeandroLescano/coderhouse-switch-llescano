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
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
  primaryText: {
    color: theme.SECONDARY_COLOR,
    fontSize: 25,
    fontFamily: 'Oswald-SemiBold',
    lineHeight: 35,
    letterSpacing: 3,
  },
  secondary: {
    backgroundColor: theme.PRIMARY_COLOR,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  secondaryText: {
    color: theme.SECONDARY_COLOR,
    fontSize: 20,
    fontFamily: 'Oswald-Regular',
    letterSpacing: 3,
    lineHeight: 25,
    margin: 0,
  },
});

const text = StyleSheet.create({
  title: {
    fontFamily: 'Oswald-SemiBold',
    fontSize: 30,
    textAlign: 'center',
    lineHeight: 40,
  },
  normal: {
    fontFamily: 'Oswald-Regular',
    fontSize: 25,
  },
});

const header = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    marginHorizontal: 20,
    paddingVertical: 10,
  },
});

export {theme, buttons, text, header};
