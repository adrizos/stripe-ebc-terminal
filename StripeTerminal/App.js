/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import {StripeProvider} from '@stripe/stripe-react-native';

// custom components
import MasterContainer from './screens/MasterContainer';

const publishableKey =
  'pk_test_51KsUBoGdIdD8WrxUPJd3l79ZP3gCBDqLaZ5wPtccsLTZELsSYKfK1Pl7EZi0stTOydU4fkdtt65QlQmROgNMmzwM00btSieFau';

const App = () => {
  return (
    <StripeProvider
      publishableKey={publishableKey}
      merchantIdentifier="merchant.identifier">
      <MasterContainer />
    </StripeProvider>
  );
};

export default App;
