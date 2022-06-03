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

const Products = props => {
  return (
    <View style={styles.scrollContainer}>
      <ScrollView style={styles.scroller}>
        <Text>Product Line Items Go Here</Text>
      </ScrollView>

      {/* <View styles={styles.square} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    height: '50%',
    backgroundColor: '#FCECA5',
    margin: 50,
    marginBottom: 15,
  },
  scroller: {},
});

export default Products;
