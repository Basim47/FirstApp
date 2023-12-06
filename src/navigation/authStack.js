import { View, Text } from 'react-native';
import React from 'react';
//Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Homescr from '../screens/Homescr';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Homescr" component={Homescr} />
    </Stack.Navigator>
  );
};

export default AuthStack;
