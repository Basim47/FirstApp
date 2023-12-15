import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
//Nav
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Firebase
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
//Redux
import { Provider } from 'react-redux';
import store from './src/store';

const Stack = createNativeStackNavigator();
const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);



  function onAuthStateChanged(user) {
    if (user) {
      setUser(user);

    } else setUser(null);
    if (initializing) setInitializing(false);
  }



  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  GoogleSignin.configure({
    webClientId: '733727862588-u07pmisio3p0k4sjqem12314b762146b.apps.googleusercontent.com',
  });



  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <>

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
