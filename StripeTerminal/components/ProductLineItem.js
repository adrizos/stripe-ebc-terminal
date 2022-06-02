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

const ProductLineItem = props => {
  return (
    <ScrollView style={styles.cart}>
      <Text>This is product</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cart: {
    height: '60%',
    backgroundColor: 'white',
    margin: 50,
  },
});

export default ProductLineItem;
