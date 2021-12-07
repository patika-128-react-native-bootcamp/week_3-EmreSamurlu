import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './Button.styles';

const Button = ({title, variant = 'default', ...rest}) => {
  return (
    <TouchableOpacity style={styles[variant].container} {...rest}>
      <Text style={styles[variant].text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
