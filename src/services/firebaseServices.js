import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';

const registerUserWithEmail = (email, pass) => {
  auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(user => {
      Alert.alert('Success', JSON.stringify(user));
    })
    .catch(error => {
      Alert.alert('Falied', JSON.stringify(error.message));
    });
};

const loginWithEmail = (email, pass) => {
  auth()
    .signInWithEmailAndPassword(email, pass)
    .then(user => {
      Alert.alert('Success', JSON.stringify(user));
    })
    .catch(error => {
      Alert.alert('Falied', JSON.stringify(error.message));
    });
};

const guestLogin = () => {
  auth()
    .signInAnonymously()
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      if (error.code === 'auth/operation-not-allowed') {
        console.log('Enable anonymous in your firebase console.');
      }

      console.error(error);
    });
};

const resetPassword = email => {
  auth()
    .sendPasswordResetEmail(email)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
};

const logout = () => {
  auth()
    .signOut()
    .then(() => {})
    .catch(() => {});
};

const signInWithGoogle = async (callback = () => {}) => {
  try {
    await GoogleSignin.hasPlayServices();

    const isSignediN = await GoogleSignin.isSignedIn();
    if (isSignediN) {
      await GoogleSignin.revokeAccess();
    }
    const {idToken, user} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const Fullname = user.name;
    const Email = user.email;
    auth()
      .signInWithCredential(googleCredential)
      .then(async user => {
        if (user.user.uid) {
          const exists = await firestore()
            .collection('users')
            .doc(user.user.uid)
            .get();
          if (exists.exists) {
          } else {
            storedata(Fullname, Email, user.user.uid);
            callback({
              Fullname,
              Email,
              userId: user.user.uid,
            });
          }
        }
      });
  } catch (error) {
    Alert.alert('Failed', JSON.stringify(error.message));
  }
};

const storedata = async (Fullname, Email, userId) => {
  await firestore().collection('users').doc(userId).set({
    Fullname,
    Email,
    userId,
  });
};

export {
  registerUserWithEmail,
  logout,
  loginWithEmail,
  resetPassword,
  signInWithGoogle,
  guestLogin,
};
