import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

// utilities

import Constants from '../utils/Constants';

const DeliverySelection = () => {
  return (
    <View style={styles.masterCont}>
      <Text style={styles.header}>
        How would you like to receive your swag?
      </Text>
      <View style={styles.selectionCont}>
        <Text style={styles.selectionTxt}>In-Store Pickup</Text>
        <Text style={styles.selectionTxt}>Conference Room Delivery</Text>
      </View>
      <View style={styles.checkoutBtn}>
        <Text style={styles.checkoutTxt}>Checkout</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  masterCont: {
    width: '80%',
    height: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    marginLeft: 50,
  },
  selectionCont: {
    // marginTop: 50,
    // marginLeft: 50,
  },
  selectionTxt: {
    fontFamily: 'SourceCodePro-Regular',
    fontSize: 20,
  },
  header: {
    fontFamily: 'SourceCodePro-Bold',
    fontSize: 35,
  },
  checkoutBtn: {
    backgroundColor: Constants.BLURPLE,
    padding: 10,
    alignItems: 'center',
    borderRadius: 9,
  },
  checkoutTxt: {
    fontSize: 25,
    color: '#fff',
    fontFamily: 'SourceCodePro-Regular',
  },
});
export default DeliverySelection;
