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
import Products from './Products';
import Totals from './Totals';

// utilities
import Constants from '../utils/Constants';

const Cart = props => {
  return (
    <View style={styles.cart}>
      <Products />
      <Totals />
    </View>
  );
};

const styles = StyleSheet.create({
  cart: {
    height: '75%',
    // backgroundColor: '#FEC8A7',
    margin: 50,
    marginTop: 75,
  },
});

export default Cart;
