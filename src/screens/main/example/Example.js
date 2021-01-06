import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity, Image, View, StatusBar, ScrollView } from "react-native";
import { Content, Input, Item } from "native-base";

import Button from "../../../components/button";

import Toast from "../../../utils/Toast";
import Validator from "../../../utils/ValidateUtil";

import { exampleService } from "../../../services";

import  { colors } from "../../../styles";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    borderRadius: 16,
    backgroundColor: colors.white,
    padding: 20,
    marginVertical: 10
  }
});

function Example({ navigation }) {
  const [isLoading, setIsLoading] = React.useState();

  const exampleData  = navigation.getParam('exampleData');
  const {} = exampleData || {}

  return (
      <View style={styles.root}>
          <StatusBar backgroundColor={colors.primaryPink } barStyle='light-content' />
          <View style={styles.container}>
            <Text>Name - {exampleData} </Text>
            <Text>- </Text>
            <Text>-</Text>
          </View>
      </View>
  );
}

Example.propTypes = {
  navigation: PropTypes.object,
};

Example.defaultProps = {
  navigation: {},
};

module.exports = Example;
