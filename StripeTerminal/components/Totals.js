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
import TotalsItem from './TotalsItem';

// utilities
import Constants from '../utils/Constants';

const Totals = props => {
  return (
    <View style={styles.totalsContainer}>
      <TotalsItem heading={'Subtotal'} value={'55.00'} hasLine={true} />
      <View style={styles.line} />
      <TotalsItem heading={'Tax'} value={'05.00'} hasLine={false} />
      <View style={styles.line} />
      <TotalsItem heading={'Total due'} value={'60.00'} hasLine={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  totalsContainer: {
    height: '30%',
    // backgroundColor: '#CBC7FC',
    marginLeft: 110,
    marginRight: 50,
    marginTop: 25,
    marginBottom: 50,
  },
  line: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
});

export default Totals;
