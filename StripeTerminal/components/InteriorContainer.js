import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

// utilities
import Constants from '../utils/Constants';
import LeftHeader from './LeftHeader';
import Cart from './Cart';

const InteriorContainer = props => {
  return (
    <View style={styles.intCont}>
      {/* Place the icon logo */}
      {props.col === 'left' ? (
        <>
          <LeftHeader />
          <Cart />
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  intCont: {
    flex: 1,
    backgroundColor: Constants.BACKGROUND_COLOR,
    // justifyContent: 'center',
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'SourceCodePro-Bold',
  },
});

export default InteriorContainer;
