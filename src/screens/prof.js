import { StyleSheet, View } from 'react-native';
import React from 'react';
//Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
//Screens
import Home from './Home';
import Setting from './setting';
import Info from './info';
import Maps from './maps';
import Save from './save';
import Out from './out';
//Icons
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';


const Drawer = createDrawerNavigator();
const Prof = () => {
  const themeMode = useSelector(state => state.theme.mode);
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Setting') {
            iconName = 'gear';
          } else if (route.name === 'Location') {
            iconName = 'map-marker';
          } else if (route.name === 'Saved') {
            iconName = 'bookmark';
          } else if (route.name === 'Info') {
            iconName = 'user';
          } else if (route.name === 'Logout') {
            iconName = 'sign-out';
          }

          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>

              <Icon
                name={iconName}
                size={focused ? 30 : 23}
                color={themeMode.text}
              />

            </View>
          );
        },

        headerShown: false,
        drawerPosition: 'right',
        drawerType: 'front',
        drawerActiveBackgroundColor: themeMode.primary,
        drawerActiveTintColor: themeMode.text,
        drawerItemStyle: {
          borderRadius: 30,
          paddingLeft: 10,
          marginVertical: 10,
        },
        drawerContentStyle: {
          backgroundColor: themeMode.background,
        },
        drawerLabelStyle: {
          fontSize: 18,
          fontFamily: 'Nunito-Bold',
          color: themeMode.text,
          textAlign: 'center'
        },
        overlayColor: themeMode.primary,
      })}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Location" component={Maps} />
      <Drawer.Screen name="Saved" component={Save} />
      <Drawer.Screen name="Info" component={Info} />
      <Drawer.Screen name="Logout" component={Out} />
    </Drawer.Navigator>
  );
};

export default Prof;

const styles = StyleSheet.create({});
