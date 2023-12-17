import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import Colors from '../assets/colors/colors';

const Suggestion = () => {
  return (
    <View>
      <StatusBar translucent
        backgroundColor={Colors.blue} />
      <Text>Suggestion</Text>
    </View>
  );
};

export default Suggestion;

const styles = StyleSheet.create({});
