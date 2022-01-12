import {StyleSheet} from 'react-native';
import {theme} from './Global.styles';

export default StyleSheet.create({
  container: {
    padding: 10,
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
});
