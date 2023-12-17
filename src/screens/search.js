import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../assets/colors/colors';

const Search = () => {
  return (
    <View>
      <StatusBar translucent
        backgroundColor={Colors.blue} />
      <Text>Search</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
