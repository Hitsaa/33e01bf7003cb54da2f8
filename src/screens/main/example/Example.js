import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity, Image, View, StatusBar, ScrollView } from "react-native";
import { Content, Input, Item } from "native-base";

import Button from "../../../components/button";

import Toast from "../../../utils/Toast";
import Validator from "../../../utils/ValidateUtil";

import { exampleService } from "../../../services";
import { DataTable } from 'react-native-paper';
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
            <DataTable>
            <DataTable.Header>
              <DataTable.Title>Title</DataTable.Title>
              <DataTable.Title>URL</DataTable.Title>
              <DataTable.Title>Created AT</DataTable.Title>
              <DataTable.Title>Author</DataTable.Title>
            </DataTable.Header>
            {exampleData.map(key => {
              <DataTable.Row>
              <DataTable.Cell>{key.title}</DataTable.Cell>
              <DataTable.Cell>{key.url}</DataTable.Cell>
              <DataTable.Cell>{key.created_at}</DataTable.Cell>
              <DataTable.Cell>{key.author}</DataTable.Cell>
            </DataTable.Row>
            })}
            
            <DataTable.Pagination
              page={1}
              numberOfPages={exampleData.pageSize}
              onPageChange={page => {
                console.log(page);
              }}
              label={page + "of " + numberOfPages}
            />
          </DataTable>          
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
