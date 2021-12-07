import {StyleSheet, Dimensions} from 'react-native';
import color from '../../../styles/color';
import spacing from '../../../styles/spacing';
import radius from '../../../styles/radius';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: spacing.normal,
    borderWidth: 2,
    borderRadius: radius.soft,
  },
  image: {
    height: deviceSize.height / 6,
  },
  name_label: {
    fontWeight: 'bold',
    margin: spacing.tiny,
    textAlign: 'center',
    color: color.primary,
  },
  name_container: {
    backgroundColor: '#a5d6a7',
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomLeftRadius: radius.medium,
    borderBottomRightRadius: radius.medium,
  },
  order: {
    fontWeight: 'bold',
    margin: spacing.tiny,
    fontSize: 10,
  },
});
