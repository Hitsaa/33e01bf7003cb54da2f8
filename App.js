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
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Root } from "native-base";

import Router from "./src/routes";

const App: () => React$Node = () => {
  return (
    <Root>
      <Router />
    </Root>
  );
};

export default App;
