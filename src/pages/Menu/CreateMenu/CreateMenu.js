import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import {Alert, SafeAreaView, Text} from 'react-native';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import styles from './CreateMenu.styles';
import routes from '../../../navigation/routes';

const CreateMenu = () => {
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState();

  const route = useRoute();

  const foodDetail = {
    name,
    description,
    ingredients,
    price,
  };

  function handleNavigateDetail() {
    if (!name || !description || !ingredients || !price) {
      return Alert.alert('Error', 'Inputs Cannot Be Empty');
    } else {
      navigation.navigate(routes.MENU_DETAIL_PAGE, {foodDetail});
    }
  }

  return (
    <SafeAreaView>
      <Text style={styles.menu_name}>{route.params.menu.name}</Text>
      <Input label="Name" onChangeText={value => setName(value)} />
      <Input
        label="Description"
        onChangeText={value => setDescription(value)}
      />
      <Input
        label="Ingredients"
        onChangeText={value => setIngredients(value)}
      />
      <Input label="Price" onChangeText={value => setPrice(value)} />
      <Button title="Apply Food" onPress={handleNavigateDetail} />
    </SafeAreaView>
  );
};

export default CreateMenu;
