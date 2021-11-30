import {Dimensions, StyleSheet} from 'react-native';

import radius from '../../../styles/radius';
import spacing from '../../../styles/spacing';
import color from '../../../styles/color';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    margin: spacing.normal,
    borderWidth: 1,
    borderColor: color.secondary,
    borderRadius: radius.sharp,
  },
  image: {
    backgroundColor: color.secondary,
    height: deviceSize.height / 6,
  },
  name_label: {
    fontWeight: 'bold',
    margin: spacing.tiny,
  },
  add_button_container: {
    bottom: spacing.large,
    right: spacing.tiny,
    borderRadius: radius.curved,
    position: 'absolute',
    backgroundColor: color.background,
  },
});
