import {StyleSheet} from 'react-native';
import {theme} from './Global.styles';

export default StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    backgroundColor: theme.SECONDARY_COLOR,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: theme.PRIMARY_COLOR,
    fontWeight: 'bold',
    fontSize: 20,
  },
  numberContainer: {
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  randomNumber: {
    fontSize: 60,
    fontFamily: 'Oswald-SemiBold',
    textAlign: 'center',
  },
});
