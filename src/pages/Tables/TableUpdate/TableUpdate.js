import {useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import Button from '../../../components/Button';

import styles from './TableUpdate.styles';
import routes from '../../../navigation/routes';
import MapOrders from '../../../components/Order';

export default function TableUpdate() {
  const navigation = useNavigation();
  const route = useRoute();
  const {table} = route.params;

  const total = table.orders.reduce((prev, cur) => prev + cur.price, 0);

  function handleCloseTable() {
    navigation.navigate(routes.TABLES_PAGE, {
      updatedTable: {...table, isActive: false},
    });
  }

  const renderOrders = ({item}) => (
    <MapOrders name={item.name} price={item.price} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.name_label}>{table.name}</Text>
        <FlatList data={table.orders} renderItem={renderOrders} />
        <Text style={styles.total}>Total {total} TL</Text>
      </View>
      {table.isActive && (
        <Button title="Close Table" onPress={handleCloseTable} />
      )}
    </SafeAreaView>
  );
}
