import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from '../../pages/Product/Products';
import ProductDetail from '../../pages/Product/ProductDetail';
import routes from '../routes';

const Stack = createNativeStackNavigator();

export default function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.PRODUCTS_PAGE}
        component={Products}
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
          headerTitle: 'Products',
        }}
      />
      <Stack.Screen
        name={routes.PRODUCT_DETAIL_PAGE}
        component={ProductDetail}
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
          headerTitle: 'Product Detail',
        }}
      />
    </Stack.Navigator>
  );
}
