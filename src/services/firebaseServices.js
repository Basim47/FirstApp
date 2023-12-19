import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from "@react-native-firebase/firestore"

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
      console.log(user);
    })
    .catch(error => {
      console.log(error);;
    });
};

const loginWithEmail = (email, pass) => {
  auth()
    .signInWithEmailAndPassword(email, pass)
    .then(user => {
      console.log(user);
    })
    .catch(error => {
      console.log(error);
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
    .then(() => { })
    .catch(() => { });
};

const delAcc = async () => {
  const user = auth().currentUser;
  user
    .delete()
    .then(async () => {
      await firestore().collection('users').doc(user.uid).delete();
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
      Alert.alert("Profile Updated!", "Please Login with New credentials");
      logout()
    }
  } catch (err) {
    Alert.alert('Error', 'Data not Updated');
  }
};


const signInWithGoogle = async (callback = () => { }) => {
  try {
    await GoogleSignin.hasPlayServices();

    const isSignediN = await GoogleSignin.isSignedIn();
    if (isSignediN) {
      await GoogleSignin.revokeAccess();
    }
    const { idToken, user } = await GoogleSignin.signIn();
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
  delAcc,
  UpdateData
};
