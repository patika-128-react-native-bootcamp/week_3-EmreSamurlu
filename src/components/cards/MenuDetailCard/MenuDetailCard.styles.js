import {StyleSheet} from 'react-native';

import color from '../../../styles/color';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    borderColor: color.secondary,
    borderWidth: 1,
    margin: spacing.normal,
    padding: spacing.normal,
  },
  label: {
    color: color.darkgrey,
    fontSize: 12,
    marginVertical: spacing.tiny,
  },
  ingredients: {
    flexDirection: 'row',
  },
});
