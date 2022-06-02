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

// custom components
import ProductLineItem from './ProductLineItem';

// utilities
import Constants from '../utils/Constants';

const Cart = props => {
  return (
    <View style={styles.cart}>
      <Text>This is a cart.</Text>
      <ProductLineItem />
    </View>
  );
};

const styles = StyleSheet.create({
  cart: {
    height: '75%',
    backgroundColor: 'pink',
    margin: 50,
  },
});

export default Cart;
