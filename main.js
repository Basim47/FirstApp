import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens
import Onboard from './src/navigation/onboard';
import AuthStack from './src/navigation/authStack';
import AppStack from './src/navigation/appStack';
import Others from './src/navigation/others';
import Todo from './src/screens/todo';
import Maps from './src/screens/maps';
import { LogLevel, OneSignal } from 'react-native-onesignal';
//Firebase
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator();
const Main = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);


  function onAuthStateChanged(user) {
    console.log('====================================');
    console.log({ user: user });
    console.log('====================================');
    if (user) {
      setUser(user);
    } else setUser(null);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    // Remove this method to stop OneSignal Debugging
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);

    // OneSignal Initialization
    OneSignal.initialize("f2a7ff24-0ccc-4207-b6b5-9d1a3f717611");

    // requestPermission will show the native iOS or Android notification permission prompt.
    // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
    OneSignal.Notifications.requestPermission(true);

    // Method for listening for notification clicks
    OneSignal.Notifications.addEventListener('click', (event) => {
      console.log('OneSignal: notification clicked:', event);
    });
  }, [])


  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  GoogleSignin.configure({
    webClientId: '733727862588-u07pmisio3p0k4sjqem12314b762146b.apps.googleusercontent.com',
  });



  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user ? (
          <>
            <Stack.Screen name="AppStack" component={AppStack} />
            <Stack.Screen name="Maps" component={Maps} />

            <Stack.Screen name='Others' component={Others} />
          </>
        ) : (
          <>

            <Stack.Screen name="Onboard" component={Onboard} />
            <Stack.Screen name="Todo" component={Todo} />
            <Stack.Screen name="AuthStack" component={AuthStack} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
