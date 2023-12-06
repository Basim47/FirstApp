import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { loginWithEmail, resetPassword } from '../services/firebaseServices';
import firestore from '@react-native-firebase/firestore';

const Login = ({ navigation }) => {
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');

  // const CheckData = async () => {
  //   try {
  //     if (!Email || !Pass) {
  //       Alert.alert('Error', 'Please enter Data to check');
  //     }
  //     const user = await firestore()
  //       .collection('user')
  //       .where('email', '==', Email)
  //       .where('password', '==', Pass)
  //       .get();

  //     if (user.empty) {
  //       Alert.alert('Data Not Found');
  //     } else {
  //       navigation.navigate('Homescr');
  //     }
  //   } catch (error) {
  //     Alert.alert("Failed", JSON.stringify(error.message))
  //   }
  // };

  const handleLogin = () => {
    loginWithEmail(Email, Pass);
  };

  const handleReset = () => {
    resetPassword(Email);
  };

  return (
    <KeyboardAvoidingView style={styles.mainwrapper}>
      <View
        style={{
          width: '100%',
          height: 150,
        }}>
        <Text style={styles.headtxt}>Login Account !</Text>
      </View>
      <View>
        <TextInput
          style={styles.inputs}
          placeholder="Email Address"
          placeholderTextColor={'#343148FF'}
          value={Email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          value={Pass}
          onChangeText={setPass}
          placeholderTextColor={'#343148FF'}
          secureTextEntry
        />
        <TouchableOpacity onPress={handleLogin} style={styles.touchable}>
          <Text style={styles.btntxt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleReset}
          style={{
            width: 130,
            height: 30,
            alignSelf: 'center',
          }}>
          <Text style={styles.navtxt}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainwrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#343148FF',
  },
  headtxt: {
    color: '#D7C49EFF',
    fontSize: 35,
    fontFamily: 'Grandista',
    textAlign: 'center',
  },
  inputs: {
    width: 300,
    height: 40,
    margin: 16,
    backgroundColor: '#FAF9F6',
    paddingLeft: 14,
    borderRadius: 10,
    color: '#343148FF',
    elevation: 7,
  },
  touchable: {
    width: 160,
    height: 40,
    backgroundColor: '#D7C49EFF',
    borderRadius: 30,
    marginVertical: 20,
    marginLeft: 80,
    justifyContent: 'center',
  },
  btntxt: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    color: '#343148FF',
  },
  navtxt: {
    textAlign: 'center',
    fontSize: 13,
    color: '#D7C49EFF',
    fontStyle: 'italic',
  },
});