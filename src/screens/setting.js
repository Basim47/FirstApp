import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';


const Setting = () => {
  const themeMode = useSelector(state => state.theme.mode);
  return (
    <View style={{
      flex: 1,
      backgroundColor: themeMode.background,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        color: themeMode.text,
        fontSize: 30
      }}>Setting</Text>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({})