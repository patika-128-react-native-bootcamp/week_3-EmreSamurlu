import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import styles from './Tables.styles';
import TableCard from '../../../components/cards/TableCard';
import routes from '../../../navigation/routes';
import mock_data from '../../../MOCK_DATA.json';

const Table = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [tables, setTables] = useState(mock_data.tables);

  function handleNavigateTableDetail(selectedTable) {
    navigation.navigate(routes.TABLE_UPDATE_PAGE, {table: selectedTable});
  }

  const renderTables = ({item}) => (
    <TableCard item={item} onSelect={() => handleNavigateTableDetail(item)} />
  );

  useEffect(() => {
    if (!route.params) {
      return;
    }
    const {updatedTable} = route.params;
    const updatedTableIndex = tables.findIndex(t => t.id === updatedTable.id);
    const newTables = [...tables];
    newTables[updatedTableIndex] = updatedTable;
    setTables(newTables);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={tables} renderItem={renderTables} numColumns={2} />
    </SafeAreaView>
  );
};

export default Table;
