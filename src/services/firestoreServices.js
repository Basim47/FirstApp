import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../store/actions/userAction';
import auth from '@react-native-firebase/auth'



export const AddDoc = (id, data) => {
    firestore()
        .collection('users')
        .doc(id)
        .set({ ...data }, { merge: true })
        .then((res) => {
            console.log('====================================');
            console.log({ res, id: res.id });
            console.log('====================================');
        })
        .catch((error) => {
            console.log({ error });
        })

}

export const usersCollection = () => {
    firestore()
        .collection('users')
        .get()
        .then((querySnapshot) => {
            const users = [];
            querySnapshot.forEach((documentSnapshot) => {
                users.push(documentSnapshot.data());
            });

            console.log('====================================');
            console.log('Fetched Data', users);
            console.log('====================================');
        })
        .catch((error) => {
            console.log({ error });
        })

}

useEffect(() => {
    const fetchUserData = async () => {

        try {
            const userId = auth().currentUser.uid;
            if (userId) {
                const userDocument = await firestore().collection('users').doc(userId).get();
                if (userDocument.exists) {
                    dispatch(setUserData({ ...userDocument.data(), documentId: userDocument.id }));
                } else {
                    Alert.alert('Error', 'User data not found in Firestore');
                }
            } else {
                Alert.alert('Error', 'No user identifier found');
            }
        } catch (error) {
            Alert.alert('Error', 'Error fetching user data:');
        }
    }
    fetchUserData();
}, [])
