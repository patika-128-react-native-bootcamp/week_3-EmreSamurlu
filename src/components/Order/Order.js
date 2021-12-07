import React from 'react';
import {View, Text} from 'react-native';

import styles from './Order.styles';

const MapOrders = (order, i) => (
  <View key={i} style={styles.order_container}>
    <Text style={styles.order_name}>⏺ {order.name}</Text>
    <Text key={i} style={styles.order_price}>
      {order.price} TL
    </Text>
  </View>
);

export default MapOrders;
