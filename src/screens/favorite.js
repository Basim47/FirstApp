import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import Colors from '../assets/colors/colors';

const Favorite = () => {
  return (
    <View>
      <StatusBar translucent
        backgroundColor={Colors.blue} />
      <Text>Favorite</Text>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
