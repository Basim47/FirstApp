import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
//Navigation
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//Screens
import Camera from './camera';
import Gallery from './gallery';
//Icons
import Entypo from 'react-native-vector-icons/Entypo';
import { useSelector } from 'react-redux';

const Top = createMaterialTopTabNavigator();
const Upload = () => {
  const themeMode = useSelector(state => state.theme.mode);
  return (
    <Top.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: themeMode.background,
          height: 60,
          elevation: 7,
        },
        tabBarIconStyle: {
          width: 60,
          height: 35,
        },
        tabBarPressColor: themeMode.input,
        tabBarIndicatorStyle: {
          backgroundColor: themeMode.text,
          width: 90,
          marginLeft: 47,
        },
        tabBarIndicatorContainerStyle: {
          justifyContent: 'center',
        },

        tabBarIcon: ({ focused }) => {
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
              {themeMode.mode === 'dark' ?
                <><Entypo
                  name={iconName}
                  size={focused ? 25 : 35}
                  color={focused ? '#fff' : 'grey'}
                />
                  {focused && (
                    <Text
                      style={{
                        color: focused ? '#fff' : 'grey',
                        fontSize: 16,
                        textAlign: 'center',
                        fontFamily: 'Nunito-Bold',
                      }}>
                      {route.name}
                    </Text>
                  )}</>
                :
                <><Entypo
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
                  )}</>}
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
