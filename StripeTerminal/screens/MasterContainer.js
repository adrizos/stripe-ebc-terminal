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
import HalfScrCont from '../components/HalfScrCont';

// utilities
import Constants from '../utils/Constants';

const MasterContainer = () => {
  return (
    <View style={styles.extCont}>
      <HalfScrCont testText="left" col="left" />
      <HalfScrCont testText="right" col="right" />
    </View>
  );
};

const styles = StyleSheet.create({
  extCont: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  text: {
    textAlign: 'center',
  },
});

export default MasterContainer;
