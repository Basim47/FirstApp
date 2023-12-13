import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
//Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Screens
import App from '../../App';
import Upload from '../screens/upload';
import Prof from '../screens/prof';
import Search from '../screens/search';
import Reels from '../screens/reels';
//Icons
import Icons from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { useDispatch } from 'react-redux';
import { setUserData } from '../store/actions/userAction';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  const themeMode = useSelector(state => state.theme.mode);
  const dispatch = useDispatch();


  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'instagram';
          } else if (route.name === 'Upload') {
            iconName = 'plus-circle';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'Reels') {
            iconName = 'video';
          }

          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {themeMode.mode === 'dark' ?
                <>
                  <Icons
                    name={iconName}
                    size={focused ? 23 : 27}
                    color={focused ? '#333' : '#fff'}
                  />
                  {focused && (
                    <Text
                      style={{
                        color: focused ? '#333' : '#fff',
                        fontSize: 12,
                        textAlign: 'center',
                        fontFamily: 'Nunito-Regular',
                      }}>
                      {route.name}
                    </Text>
                  )}
                </>
                :
                <>
                  <Icons
                    name={iconName}
                    size={focused ? 23 : 27}
                    color={focused ? '#fff' : '#333'}
                  />
                  {focused && (
                    <Text
                      style={{
                        color: focused ? '#fff' : '#333',
                        fontSize: 12,
                        textAlign: 'center',
                        fontFamily: 'Nunito-Regular',
                      }}>
                      {route.name}
                    </Text>
                  )}
                </>
              }
            </View>
          );
        },
        tabBarActiveBackgroundColor: themeMode.text,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: themeMode.primary,
          position: 'absolute',
          marginHorizontal: 10,
          marginVertical: 5,
          height: 50,
          borderRadius: 22,
          elevation: 5,
          borderWidth: 1,
          borderColor: themeMode.primary
        },
        tabBarItemStyle: {
          borderRadius: 22,
        },
      })}>
      <Tab.Screen name="Home" component={App} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Upload" component={Upload} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Profile" component={Prof} />
    </Tab.Navigator>
  );
};

export default AppStack;
