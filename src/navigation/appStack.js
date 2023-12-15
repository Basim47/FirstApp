import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//Nav
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import App from '../../App';

const Stack = createNativeStackNavigator();
const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='App' component={App} />
        </Stack.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})