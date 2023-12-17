import {View, Text} from 'react-native';
import React from 'react';
//Nav
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Screens
import Login from '../screens/Login';
import Signin from '../screens/signin';
import Forgetpass from '../screens/forgetpass';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Forget" component={Forgetpass} />
    </Stack.Navigator>
  );
};

export default AuthStack;
