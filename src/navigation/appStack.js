import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
//Nav
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../screens/main';
import Settings from '../screens/settings';
import Profile from '../screens/profile';
import About from '../screens/about';
import Favorite from '../screens/favorite';
import Suggestion from '../screens/suggestion';
import Search from '../screens/search';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Suggestion" component={Suggestion} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
