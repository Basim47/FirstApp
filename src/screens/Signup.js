import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { registerUserWithEmail } from '../services/firebaseServices';
import firestore from '@react-native-firebase/firestore';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({ navigation }) => {
  const [fullname, setfullname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleRegister = () => {
    registerUserWithEmail(email, password)
  }

  // const handleValidation = async () => {
  //   try {
  //     if (!fullname || !email || !password) {
  //       Alert.alert('Error', 'Please fill all Fields');
  //     } else {
  //       const userId = uuidv4();
  //       await AsyncStorage.setItem('userId', userId);
  //       await firestore().collection('user').doc(userId).set({
  //         fullname,
  //         email,
  //         password,
  //       });
  //       navigation.navigate('Login');
  //     }
  //   } catch (error) {
  //     Alert.alert("Failed", JSON.stringify(error.message));
  //   }
  // };

  return (
    <View style={styles.mainwrapper}>
      <View
        style={{
          width: '100%',
          height: 150,
        }}>
        <Text style={styles.headtxt}>Create New Account !</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={styles.inputs}
          placeholder="Full Name"
          placeholderTextColor={'#343148FF'}
          value={fullname}
          onChangeText={txt => setfullname(txt)}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Email Address"
          placeholderTextColor={'#343148FF'}
          keyboardType="email-address"
          value={email}
          onChangeText={txt => setemail(txt)}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          placeholderTextColor={'#343148FF'}
          value={password}
          onChangeText={txt => setpassword(txt)}
          secureTextEntry
        />
        <TouchableOpacity onPress={handleRegister}>
          <View style={styles.touchable}>
            <Text style={styles.btntxt}>Create</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navtxt}>
            Already have an account?{' '}
            <Text
              style={{
                color: '#D7C49EFF',
                fontSize: 16,
                fontFamily: 'Grandista',
              }}>
              Login !
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  mainwrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#343148FF',
  },
  headtxt: {
    color: '#D7C49EFF',
    fontSize: 28,
    fontFamily: 'Grandista',
    textAlign: 'center',
  },
  inputs: {
    width: 270,
    height: 40,
    marginVertical: 13,
    backgroundColor: '#FAF9F6',
    borderRadius: 10,
    color: '#343148FF',
    paddingLeft: 20,
    elevation: 7,
  },
  touchable: {
    width: 150,
    height: 40,
    backgroundColor: '#D7C49EFF',
    borderRadius: 30,
    marginTop: 20,
    justifyContent: 'center',
  },
  btntxt: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    color: '#343148FF',
  },
  navtxt: {
    color: '#fff',
    fontFamily: 'Nunito-Italic',
    textAlign: 'center',
    fontSize: 13,
    marginTop: 25,
  },
});