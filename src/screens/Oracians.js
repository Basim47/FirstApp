import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Oracians = ({ navigation }) => {
  return (
    <View style={{
      flex: 1
    }}>
      <View
        style={{
          width: '100%',
          height: 250,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 50,
            fontWeight: '800'
          }}>Oracians<Text style={{
            color: 'darkred'
          }}>.inc</Text></Text>
      </View>
      <View style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{
          width: 200,
          marginVertical: 10
        }}>
          <Button
            title='Sign-up'
            onPress={() => navigation.navigate('Signup', {
              routeParam: {
                firstName: "HAmza", lastName: "Zafar", tech: "JS"
              }
            })} />
        </View>
        <View style={{
          width: 200
        }}>
          <Button
            title='Log-in'
            onPress={() => navigation.navigate('Login', {
              routeParam: "HAMZA"
            })} />
        </View>
      </View>
    </View>
  )
}

export default Oracians

const styles = StyleSheet.create({})