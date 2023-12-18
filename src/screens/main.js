import { StyleSheet, Text, TouchableOpacity, View, StatusBar, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { logout } from '../services/firebaseServices';
import Colors from '../assets/colors/colors';
import { setUserData } from '../store/actions/userAction';
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const Main = ({ navigation }) => {
  const dispatch = useDispatch();



  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = auth().currentUser.uid;
        if (userId) {
          const userDocument = await firestore().collection('users').doc(userId).get();
          if (userDocument.exists) {
            dispatch(setUserData({ ...userDocument.data(), documentId: userDocument.id }));
          }
          else { }
        } else { }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <View>
      <StatusBar translucent
        backgroundColor={Colors.blue} />
      <View style={styles.headwrap}></View>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <View style={{ width: 70, height: 70, backgroundColor: '#000' }}>
          <Text style={{ color: 'white' }}>Settings</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  headwrap: {
    width: "100%",
    height: 40,
    marginTop: 20
  }
});
