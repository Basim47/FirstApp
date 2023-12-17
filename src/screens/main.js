import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {logout} from '../services/firebaseServices';

const Main = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={logout}>
        <View style={{width: 70, height: 70, backgroundColor: '#000'}}>
          <Text style={{color: 'white'}}>logout</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <View style={{width: 70, height: 70, backgroundColor: '#000'}}>
          <Text style={{color: 'white'}}>Settings</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
