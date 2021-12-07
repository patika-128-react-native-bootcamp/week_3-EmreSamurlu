import React from 'react';
import {View, Text} from 'react-native';

import styles from './Badge.styles';

const Badge = ({title}) => {
  return (
    <View style={styles.badge_container}>
      <Text style={styles.badge_label}>{title}</Text>
    </View>
  );
};

export default Badge;
