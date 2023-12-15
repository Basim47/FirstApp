import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
//Firebase
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
//Redux
import { Provider } from 'react-redux';
import store from './src/store';

const Main = () => {
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

    </Provider>
  );
};

export default Main;
