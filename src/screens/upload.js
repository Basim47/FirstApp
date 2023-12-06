import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
//Navigation
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
//Screens
import Camera from './camera';
import Gallery from './gallery';
//Icons
import Entypo from 'react-native-vector-icons/Entypo';

const Top = createMaterialTopTabNavigator();
const Upload = () => {
  return (
    <Top.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#e3e1e1',
          height: 60,
          elevation: 7,
        },
        tabBarIconStyle: {
          width: 60,
          height: 35,
        },
        tabBarPressColor: '#333333',
        tabBarIndicatorStyle: {
          backgroundColor: '#333333',
          width: 90,
          marginLeft: 47,
        },
        tabBarIndicatorContainerStyle: {
          justifyContent: 'center',
        },

        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Camera') {
            iconName = 'picasa';
          } else if (route.name === 'Gallery') {
            iconName = 'images';
          }

          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo
                name={iconName}
                size={focused ? 25 : 35}
                color={focused ? '#333333' : 'grey'}
              />
              {focused && (
                <Text
                  style={{
                    color: focused ? '#333333' : 'grey',
                    fontSize: 16,
                    textAlign: 'center',
                    fontFamily: 'Nunito-Bold',
                  }}>
                  {route.name}
                </Text>
              )}
            </View>
          );
        },
      })}>
      <Top.Screen name="Camera" component={Camera} />
      <Top.Screen name="Gallery" component={Gallery} />
    </Top.Navigator>
  );
};

export default Upload;

const styles = StyleSheet.create({});
