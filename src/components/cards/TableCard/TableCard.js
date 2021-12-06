import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import styles from './TableCard.styles';
import color from '../../../styles/color';

export default function MenuCard({item, onSelect}) {
  const tableColor = item.isActive ? 'green' : color.secondary;

  return (
    <TouchableWithoutFeedback onPress={onSelect} disabled={!item.isActive}>
      <View style={[styles.container, {borderColor: tableColor}]}>
        <View style={styles.image}>
          {item.orders.map((order, i) => (
            <Text key={i} style={styles.order}>
              ⏺ {order.name}
            </Text>
          ))}
        </View>
        <View style={styles.name_container}>
          <Text style={styles.name_label}>{item.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
