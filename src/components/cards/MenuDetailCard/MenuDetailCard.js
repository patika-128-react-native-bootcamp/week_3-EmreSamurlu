import React from 'react';
import {useRoute} from '@react-navigation/core';
import {Text, View} from 'react-native';

import styles from './MenuDetailCard.styles';
import Badge from '../../Badge';

const MenuDetailCard = () => {
  const route = useRoute();
  const {foodDetail} = route.params;

  const renderIngredients = (item, index) => <Badge title={item} key={index} />;

  const singleIngredient = foodDetail.ingredients
    .split(',')
    .map(renderIngredients);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name: {foodDetail.name}</Text>
      <Text style={styles.label}>Description: {foodDetail.description}</Text>
      <Text style={styles.label}>Price: {foodDetail.price}</Text>
      <Text style={styles.label}>Ingredients:</Text>
      <View style={styles.ingredients}>{singleIngredient}</View>
    </View>
  );
};

export default MenuDetailCard;
