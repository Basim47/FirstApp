import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const registerUserWithEmail = (email, pass) => {
    auth()
        .createUserWithEmailAndPassword(email, pass)
        .then((user) => {
            Alert.alert('Success', JSON.stringify(user))
        })
        .catch((error) => {
            Alert.alert('Falied', JSON.stringify(error.message))
        })
}

const loginWithEmail = (email, pass) => {
    auth()
        .signInWithEmailAndPassword(email, pass)
        .then((user) => {
            Alert.alert('Success', JSON.stringify(user))
        })
        .catch((error) => {
            Alert.alert('Falied', JSON.stringify(error.message))
        })
}

const resetPassword = (email) => {
    auth()
        .sendPasswordResetEmail(email)
        .then((data) => {
            Alert.alert('Success', JSON.stringify(data))
        })
        .catch((error) => {
            Alert.alert('Falied', JSON.stringify(error.message))
        })
}

const logout = () => {
    auth()
        .signOut()
        .then(() => {
        })
        .catch(() => {
        })
}

const signInWithGoogle = async () => {
    try {
        await GoogleSignin.hasPlayServices();

        const isSignediN = await GoogleSignin.isSignedIn()
        if (isSignediN) {
            await GoogleSignin.revokeAccess();
        }
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        await auth().signInWithCredential(googleCredential);
    }
    catch (error) {
        Alert.alert('Failed', JSON.stringify(error.message))
    }
}


export {
    registerUserWithEmail,
    logout,
    loginWithEmail,
    resetPassword,
    signInWithGoogle
}