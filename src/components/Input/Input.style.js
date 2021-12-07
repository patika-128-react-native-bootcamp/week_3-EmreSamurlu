import {StyleSheet} from 'react-native';

import color from '../../styles/color';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';

export default StyleSheet.create({
  container: {
    margin: spacing.large,
  },
  input_container: {
    backgroundColor: color.grey,
    padding: spacing.normal,
    borderRadius: radius.sharp,
    borderWidth: 1,
    borderColor: color.secondary,
  },
  label: {
    color: color.darkgrey,
  },
});
