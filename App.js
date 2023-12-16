import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
//Nav
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Firebase
import auth from '@react-native-firebase/auth';
//Redux
import { Provider } from 'react-redux';
import store from './src/store';
//Screens
import Onboard from './src/navigation/onboard';
import AppStack from './src/navigation/appStack';
import AuthStack from './src/navigation/authStack';

const Stack = createNativeStackNavigator();
const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  const onAuthStateChanged = (user) => {
    if (user) {
      setUser(user);
    } else setUser(null);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          {user ? (
            <>
              <Stack.Screen name='AppStack' component={AppStack} />
            </>
          ) : (
            <>
              <Stack.Screen name="Onboard" component={Onboard} />
              <Stack.Screen name="AuthStack" component={AuthStack} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
