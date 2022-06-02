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

const LeftHeader = props => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.images}
        source={require('../assets/logos/mediumicon.png')}
      />
      <Text style={styles.text}>Stripe Swag Store</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    rowGap: 50,
    backgroundColor: 'gray',
    height: '10%',
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
  },
  text: {
    marginLeft: 10,
    fontFamily: 'SourceCodePro-Regular',
    fontSize: 20,
  },
  images: {
    width: 65,
    height: 65,
    verticalAlign: 'middle',
  },
});

export default LeftHeader;
