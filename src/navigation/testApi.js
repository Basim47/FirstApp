import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Catg from '../screens/catg';
import CatDtl from '../screens/catDtl';
import Prod from '../screens/prod';

const Stack = createNativeStackNavigator();
const TestApi = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='Category' component={Catg} />
            <Stack.Screen name='Details' component={CatDtl} />
            <Stack.Screen name='Products' component={Prod} />
        </Stack.Navigator>
    )
}

export default TestApi

const styles = StyleSheet.create({})