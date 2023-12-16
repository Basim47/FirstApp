import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//Nav
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from '../screens/main';

const Stack = createNativeStackNavigator();
const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Main' component={Main} />
        </Stack.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})