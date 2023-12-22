import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from "@react-native-firebase/firestore"
import Snackbar from 'react-native-snackbar';

const registerUserWithEmail = async (name, email, pass, callback = () => { }) => {
  const Fullname = name;
  const Email = email;
  auth()
    .createUserWithEmailAndPassword(email, pass)
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
      Snackbar.show({
        text: 'Registered successfully!',
        fontFamily: Fonts.medium,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.skin,
        marginBottom: 680
      })
    })
    .catch(error => {
      Snackbar.show({
        text: 'Error registering user!',
        fontFamily: Fonts.medium,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.skin,
        marginBottom: 680
      })
    });
};

const loginWithEmail = (email, pass) => {
  auth()
    .signInWithEmailAndPassword(email, pass)
    .then(user => {
      Snackbar.show({
        text: 'Logged-in sccessfully!',
        fontFamily: Fonts.medium,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.skin,
        marginBottom: 680
      });
    })
    .catch(error => {
      Snackbar.show({
        text: 'Error fetching user!',
        fontFamily: Fonts.medium,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.skin,
        marginBottom: 680
      });
    });
};

const guestLogin = () => {
  auth()
    .signInAnonymously()
    .then(data => {
      Snackbar.show({
        text: 'Guest loggrd-in successfully!',
        fontFamily: Fonts.medium,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.skin,
        marginBottom: 680
      })
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
      Snackbar.show({
        text: 'Reset mail sent!',
        fontFamily: Fonts.medium,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.skin,
        marginBottom: 680
      })
    })
    .catch(error => {
      Snackbar.show({
        text: 'Enter correct email!',
        fontFamily: Fonts.medium,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.skin,
        marginBottom: 680
      });
    });
};

const logout = () => {
  auth()
    .signOut()
    .then(() => {
      Snackbar.show({
        text: 'Logged-out successfully!',
        fontFamily: Fonts.medium,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.skin,
        marginBottom: 680
      })
    })
    .catch(() => { });
};

const delAcc = async () => {
  const user = auth().currentUser;
  user
    .delete()
    .then(async () => {
      await firestore().collection('users').doc(user.uid).delete();
      Snackbar.show({
        text: 'Account deleted!',
        fontFamily: Fonts.medium,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.skin,
        marginBottom: 680
      })
    })
    .catch((error) => console.log(error));
}

const UpdateData = async (Fullname, Currentpass, Newpass) => {
  try {
    if (!Fullname || !Currentpass || !Newpass) {
      Alert.alert('Field Empty');
    } else {
      const user = auth().currentUser;
      await firestore().collection('users').doc(user.uid).update({
        Fullname
      });
      const credential = auth.EmailAuthProvider.credential(user.email, Currentpass);
      await user.reauthenticateWithCredential(credential);
      await user.updatePassword(Newpass);
      logout()
      Snackbar.show({
        text: 'Updated! Please login with new password',
        fontFamily: Fonts.medium,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.skin,
        marginBottom: 680
      })
    }
  } catch (err) {
    Snackbar.show({
      text: 'Error updating password!',
      fontFamily: Fonts.medium,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: Colors.skin,
      marginBottom: 680
    })
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
  guestLogin,
  delAcc,
  UpdateData
};
