import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import Colors from '../assets/colors/colors';

const About = () => {
  return (
    <View>
      <StatusBar translucent
        backgroundColor={Colors.blue} />
      <Text>About</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
