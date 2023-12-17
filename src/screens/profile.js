import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import Colors from '../assets/colors/colors';

const Profile = () => {
  return (
    <View>
      <StatusBar translucent
        backgroundColor={Colors.blue} />
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
