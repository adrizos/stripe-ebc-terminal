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
import InteriorContainer from '../components/InteriorContainer';

// utilities
import Constants from '../utils/Constants';

const MasterContainer = () => {
  return (
    <View style={styles.extCont}>
      <InteriorContainer testText="left" col="left" />
      <InteriorContainer testText="right" col="right" />
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
