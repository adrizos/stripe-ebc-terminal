import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// utilities
import Constants from '../utils/Constants';
import ProductsItem from './ProductsItem';

const Products = props => {
  // test data
  const testData = [
    {
      product: 'Stripe Graphic Tee',
      price: '$5.00',
      qty: '1',
    },
    {
      product: 'Stripe Water Bottle',
      price: '$5.00',
      qty: '2',
    },
    {
      product: 'Stripe Mug',
      price: '$5.00',
      qty: '1',
    },
    {
      product: 'Stripe Hat',
      price: '$5.00',
      qty: '2',
    },
    {
      product: 'Stripe Cooler',
      price: '$5.00',
      qty: '1',
    },
    {
      product: 'Stripe Beanie',
      price: '$5.00',
      qty: '3',
    },
    {
      product: 'Stripe Stickers',
      price: '$5.00',
      qty: '1',
    },
    {
      product: 'Stripe Patch',
      price: '$5.00',
      qty: '1',
    },
    {
      product: 'Stripe Hoodie',
      price: '$5.00',
      qty: '2',
    },
    {
      product: 'Stripe Notebook',
      price: '$5.00',
      qty: '3',
    },
    {
      product: 'Stripe Thumb Drive',
      price: '$5.00',
      qty: '1',
    },
    {
      product: 'Stripe Energy Drink',
      price: '$5.00',
      qty: '2',
    },
  ];
  const products = testData.map(product => {
    return (
      <ProductsItem
        product={product.product}
        price={product.price}
        qty={product.qty}
        key={product.product}
      />
    );
  });

  return (
    <View style={styles.scrollContainer}>
      <ScrollView style={styles.scroller}>{products}</ScrollView>

      {/* <View styles={styles.square} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    height: '50%',
    // backgroundColor: '#FCECA5',
    margin: 50,
    marginBottom: 15,
  },
  scroller: {},
});

export default Products;
