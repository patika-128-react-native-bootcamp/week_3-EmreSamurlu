import {StyleSheet} from 'react-native';

import color from '../../../styles/color';
import spacing from '../../../styles/spacing';
import radius from '../../../styles/radius';

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
  badge_container: {
    backgroundColor: color.primary,
    margin: spacing.micro,
    borderRadius: radius.soft,
    padding: spacing.tiny,
  },
  badge_label: {
    fontSize: 10,
    color: color.grey,
    fontWeight: 'bold',
  },
});
