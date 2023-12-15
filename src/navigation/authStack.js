import { View, Text } from 'react-native';
import React from 'react';
//Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    </Stack.Navigator>
  );
};

export default AuthStack;
