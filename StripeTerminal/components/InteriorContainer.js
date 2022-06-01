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

const InteriorContainer = props => {
  return (
    <View style={styles.intCont}>
      <Text style={styles.text}>{props.testText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  extCont: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  intCont: {
    flex: 1,
    backgroundColor: Constants.BACKGROUND_COLOR,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default InteriorContainer;
