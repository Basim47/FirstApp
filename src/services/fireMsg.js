import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

export const requestUserPermission = async () => {
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

    try {
        const fcmToken = await messaging().getToken();

        console.log("User FCM TOKEN..", fcmToken);

    } catch (error) {
        console.log("Error", error);
    }
};

export const notificationListener = async () => {
    try {
        messaging().onNotificationOpenedApp((remoteMessage) => {
            console.log(
                "Notification caused app to open from background state:",
                remoteMessage.notification
            );
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
