import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/Data/Local/Store/redux';
import Splash from './src/screens/Splash';
import { AuthProvider } from './src/Contexts/AuthContext';
import { AppProvider } from './src/Contexts/AppContext';
import Geocoder from 'react-native-geocoding';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import messaging from '@react-native-firebase/messaging';
import NotificationController from './src/utils/NotificaionController';
import { StripeProvider } from '@stripe/stripe-react-native';
import { STRIPE_PK_KEY } from '@constants/apiKeys';
import PushNotification from 'react-native-push-notification';
import { setJSExceptionHandler, getJSExceptionHandler } from 'react-native-exception-handler';
import { setNativeExceptionHandler } from "react-native-exception-handler";
import auth from '@react-native-firebase/auth';
import { saveData } from './src/services/firebaseServices';

const store = configureStore();
const App = () => {
    const [permissions, setPermissions] = useState({});

    // const checkPermission = async () => {
    //   try {
    //     const enabled = await messaging().hasPermission();
    //   console.log('enabled ******* ', enabled);
    //   if (enabled) {
    //     getFcmToken();
    //   } else {
    //     requestPermission();
    //   }
    //   } catch (error) {

    //   }
    // };

    // const getFcmToken = async () => {
    //   try {
    //     const fcmToken = await messaging().getToken();
    //   if (fcmToken) {
    //     console.log('Your Firebase Token is:', fcmToken);
    //     // Must be outside of any component LifeCycle (such as componentDidMount).
    //     PushNotification.configure({
    //       // let token 
    //       // (optional) Called when Token is generated (iOS and Android)
    //       onRegister: function (token) {
    //         console.log("TOKEN:", token);
    //       },

    //       // (required) Called when a remote is received or opened, or local notification is opened
    //       onNotification: function (notification) {
    //         console.log("NOTIFICATION:", notification);

    //         // process the notification

    //         // (required) Called when a remote is received or opened, or local notification is opened
    //         notification.finish(PushNotificationIOS.FetchResult.NoData);
    //       },

    //       // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    //       onAction: function (notification) {
    //         console.log("ACTION:", notification.action);
    //         console.log("NOTIFICATION:", notification);

    //         // process the action
    //       },

    //       // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    //       onRegistrationError: function (err) {
    //         console.error(err.message, err);
    //       },

    //       // IOS ONLY (optional): default: all - Permissions to register.
    //       permissions: {
    //         alert: true,
    //         badge: true,
    //         sound: true,
    //       },

    //       // Should the initial notification be popped automatically
    //       // default: true
    //       popInitialNotification: true,

    //       /**
    //        * (optional) default: true
    //        * - Specified if permissions (ios) and token (android and ios) will requested or not,
    //        * - if not, you must call PushNotificationsHandler.requestPermissions() later
    //        * - if you are not using remote notification or do not have Firebase installed, use this:
    //        *     requestPermissions: Platform.OS === 'ios'
    //        */
    //       requestPermissions: true,
    //     });


    //   } else {
    //     console.log('Failed', 'No token received');
    //   }
    //   } catch (error) {

    //   }
    // };

    // const requestPermission = async () => {
    //   try {
    //     await messaging().requestPermission();
    //     // User has authorised
    //   } catch (error) {
    //     // User has rejected permissions
    //   }
    // };

    // const messageListener = async () => {
    //   try {
    //     messaging().onMessage(async remoteMessage => { });
    //   } catch (error) {

    //   }
    // };

    // DISABLE LOGGER WHENIN PRODUCTION
    if (!_DEV_) {
        console.log = () => { };
    }

    const requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log("Authorization status:", authStatus);
            getFcmToken();
        }
    };

    const getFcmToken = async () => {
        // let fcmToken = await AsyncStorage.getItem("fcmToken");
        // console.log("The old Token", fcmToken);
        // if (!fcmToken) {
        try {
            const fcmToken = await messaging().getToken();

            console.log("User updated..", fcmToken);
            if (fcmToken && auth()?.currentUser) {
                console.log("The new token", fcmToken);
                await saveData('users', auth()?.currentUser?.uid, { fcmToken });
            }
        } catch (error) {
            console.log("Error", error);
        }
        // }
    };




    const notificationListener = async () => {
        try {
            messaging().onNotificationOpenedApp((remoteMessage) => {
                console.log(
                    "Notification caused app to open from background state:",
                    remoteMessage.notification
                );
                //navigation.navigate(remoteMessage.data.type);
            });
            messaging().onMessage(async (remoteMessage) => {
                console.log("Received in Foreground", remoteMessage);
                PushNotification.createChannel({
                    channelId: "channel-id", // (required)
                    channelName: "My channel", // (required)
                });
                PushNotification.localNotification({
                    channelId: "channel-id",
                    title: remoteMessage.notification.title,
                    message: remoteMessage.notification.body, // (required)
                    showWhen: true,
                    color: "red",
                });
            });
            messaging()
                .getInitialNotification()
                .then((remoteMessage) => {
                    if (remoteMessage) {
                        console.log(
                            "Notification caused app to open from quit state:",
                            remoteMessage.notification
                        );
                    }
                });
        } catch (error) {
            console.log("Error", error);
        }
    };


    useEffect(() => {
        try {
            requestUserPermission();
            notificationListener();
            //   checkPermission();
            // messageListener();
            Geocoder.init('AIzaSyCLdgKIuMkc2j14XoRzzcn_JovSt4MQe8U');

            GoogleSignin.configure({
                webClientId:
                    '39734361022-1jrp4jt1temul3f73kg5kjebtq1d1pq3.apps.googleusercontent.com',
            });
        } catch (error) {

        }
    }, []);

    return (
        <StripeProvider
            publishableKey={STRIPE_PK_KEY}
            merchantIdentifier="merchant.com.mangiaapp">
            <Provider store={store}>
                <AuthProvider>
                    <AppProvider>
                        <Splash />
                        {/* <NotificationController /> */}
                    </AppProvider>
                </AuthProvider>
            </Provider>
        </StripeProvider>
    );
};

export default App;


import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();//Ignore all log notifications