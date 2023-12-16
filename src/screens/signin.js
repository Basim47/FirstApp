import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../assets/colors/colors';
import Fonts from '../assets/fonts/fonts';

const Signin = () => {
  return (
    <View style={styles.mainwrapper}>
      <View style={styles.headwrapper}>
        <Text style={styles.headtxt}>Daily Dose of Wisdom</Text>
      </View>
      <View style={styles.mainbody}>
        <Text style={styles.regtxt}>Register</Text>
        <Text style={styles.placeholdertxt}>Name</Text>
        <TextInput
          style={styles.placeholderinput}
          placeholder="Enter your full name"
          placeholderTextColor={Colors.white}
        />
        <Text style={styles.placeholdertxt}>Email</Text>
        <TextInput
          style={styles.placeholderinput}
          placeholder="Enter your email"
          placeholderTextColor={Colors.white}
        />
        <Text style={styles.placeholdertxt}>Password</Text>
        <TextInput
          style={styles.placeholderinput}
          placeholder="Enter your password"
          placeholderTextColor={Colors.white}
        />
        <Text style={styles.passcond}>
          The password must have at least one lowercase, one uppercase, one
          special and one numeric character.
        </Text>
        <Text style={styles.placeholdertxt}>Confirm Password</Text>
        <TextInput
          style={styles.placeholderinput}
          placeholder="Enter your password"
          placeholderTextColor={Colors.white}
        />
        <TouchableOpacity>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  mainwrapper: {
    flex: 1,
    backgroundColor: Colors.blue,
  },
  headwrapper: {
    width: '100%',
    marginTop: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headtxt: {
    fontSize: 13,
    color: Colors.skin,
    fontFamily: Fonts.regular,
  },
  mainbody: {
    paddingHorizontal: 20,
  },
  regtxt: {
    marginTop: 35,
    fontSize: 18,
    color: Colors.white,
    fontFamily: Fonts.bold,
  },
  placeholdertxt: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.regular,
    marginTop: 15,
  },
  placeholderinput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.white,
    color: Colors.white,
    paddingLeft: 20,
    marginTop: 7,
  },
  passcond: {
    color: Colors.skin,
    marginTop: 3,
    fontSize: 13,
  },
});
