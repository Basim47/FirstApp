import { View, Text } from 'react-native';
import React from 'react';
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

const Tab = createBottomTabNavigator();

const AppStack = () => {
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
              <Icons
                name={iconName}
                size={focused ? 23 : 27}
                color={focused ? '#fff' : 'grey'}
              />
              {focused && (
                <Text
                  style={{
                    color: focused ? '#fff' : 'grey',
                    fontSize: 12,
                    textAlign: 'center',
                    fontFamily: 'Nunito-Regular',
                  }}>
                  {route.name}
                </Text>
              )}
            </View>
          );
        },
        tabBarActiveBackgroundColor: '#333333',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#e3e1e1',
          position: 'absolute',
          marginHorizontal: 10,
          marginVertical: 5,
          height: 50,
          borderRadius: 22,
          elevation: 5,
        },
        tabBarItemStyle: {
          borderRadius: 20,
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
