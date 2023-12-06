import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
//Icons
import Icon from 'react-native-vector-icons/Entypo'

const Home = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
    }}>
      <View style={{
        width: '91%',
        height: 50,
        backgroundColor: '#e3e1e1',
        margin: 15,
        borderRadius: 30,
        elevation: 5,
      }}>
        <Text style={{
          fontSize: 20,
          fontFamily:'Nunito-Bold',
          paddingLeft: 20,
          marginTop:10,
          color: '#000'
        }}>
          Home
        </Text>
          <TouchableOpacity 
          style={{
          width: 50,
          height: 50,
          marginLeft: 275,
          marginTop:7,
          position: 'absolute'
        }}
           onPress={() => navigation.openDrawer()}>
            <Icon name={'menu'} size={35} color={'#000'} />
          </TouchableOpacity>
      </View>
      <View style={{
        width: '100%',
        height: 400,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 40,
          fontWeight: '800',
          color: 'black'
        }}>WELCOME</Text>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})