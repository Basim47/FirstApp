import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const Info = () => {
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
      }}>Info</Text>
    </View>
  )
}

export default Info

const styles = StyleSheet.create({})