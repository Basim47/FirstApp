import firestore from '@react-native-firebase/firestore'
import { useEffect } from 'react'

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


export const getDoc = () => {

}