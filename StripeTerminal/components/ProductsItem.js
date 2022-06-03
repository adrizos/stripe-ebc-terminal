import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

// utilities
import Constants from '../utils/Constants';

const ProductsItem = ({product, price, qty}) => {
  return (
    <View style={styles.prodItemCont}>
      <View style={styles.leftCont}>
        <View style={styles.box} />
        <View>
          <Text style={styles.productTxt}>{product}</Text>
          <Text style={styles.qtyLabel}>Qty</Text>
          <Text style={styles.qtyVal}>{qty}</Text>
        </View>
      </View>

      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  prodItemCont: {
    flexDirection: 'row',
    fontFamily: 'SourceCodePro-Medium',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  leftCont: {
    flexDirection: 'row',
  },
  productTxt: {},
  price: {},
  box: {
    height: 45,
    width: 45,
    backgroundColor: Constants.BLURPLE,
    borderRadius: 9,
    marginRight: 15,
  },
  qtyLabel: {
    fontFamily: 'SourceCodePro-Regular',
  },
});
export default ProductsItem;
