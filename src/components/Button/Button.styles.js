import {StyleSheet} from 'react-native';

import spacing from '../../styles/spacing';
import radius from '../../styles/radius';
import color from '../../styles/color';

const base_styles = StyleSheet.create({
  container: {
    margin: spacing.large,
    padding: spacing.normal,
    borderRadius: radius.smooth,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default {
  default: StyleSheet.create({
    container: {
      ...base_styles.container,
      backgroundColor: color.primary,
    },
    text: {
      ...base_styles.text,
      color: 'white',
    },
  }),

  outline: StyleSheet.create({
    container: {
      ...base_styles.container,
      borderWidth: 1,
      borderRadius: color.primary,
    },
    text: {
      ...base_styles.text,
      color: color.primary,
    },
  }),
};
