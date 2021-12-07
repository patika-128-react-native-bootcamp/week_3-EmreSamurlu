import {StyleSheet} from 'react-native';

import color from '../../styles/color';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';

export default StyleSheet.create({
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
