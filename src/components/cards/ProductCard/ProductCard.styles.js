import {Dimensions, StyleSheet} from 'react-native';

import color from '../../../styles/color';
import spacing from '../../../styles/spacing';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  image: {
    backgroundColor: color.secondary,
    height: deviceSize.height / 5,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  name_label: {
    margin: spacing.tiny,
    fontSize: 25,
    color: 'white',
    fontWeight: '200',
  },
  name_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
