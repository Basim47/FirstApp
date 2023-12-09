import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const Reels = () => {
  const themeMode = useSelector(state => state.theme.mode);
  return (
    <View style={[styles.mainwrapper, { backgroundColor: themeMode.background }]}>
      <Text style={[styles.headtxt, { color: themeMode.text }]}>Reels</Text>
    </View>
  )
}

export default Reels

const styles = StyleSheet.create({
  mainwrapper: {
    flex: 1,
  },
  headtxt: {
    fontSize: 20,
    fontFamily: "Nunito-Bold"
  }
})