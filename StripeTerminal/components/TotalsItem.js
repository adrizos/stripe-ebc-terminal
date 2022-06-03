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

const TotalsItem = ({heading, value, hasLine}) => {
  return (
    <View style={styles.totalsItemCont}>
      <Text style={styles.headingTxt}>{heading}</Text>
      <Text style={styles.value}>${value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  totalsItemCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingTxt: {
    fontFamily: 'SourceCodePro-Bold',
    marginBottom: 25,
    marginTop: 15,
  },
  value: {
    fontFamily: 'SourceCodePro-Bold',
    marginBottom: 25,
    marginTop: 15,
  },
});

export default TotalsItem;
