import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
//Components
import Btn from '../assets/components/btn';
//Fonts
import Fonts from '../assets/fonts/fonts';
//Colors
import Colors from '../assets/colors/colors';
//Firebase
import { guestLogin } from '../services/firebaseServices';

const Onboard = ({ navigation }) => {
  return (
    <View style={styles.mainwrapper}>
      <StatusBar translucent backgroundColor={Colors.blue} />
      <View style={styles.headwrapper}>
        <Text style={styles.headtxt}>Daily Dose of Wisdom</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('AuthStack', { screen: 'Login' })}>
          <Btn>
            <Text style={styles.btntxt}>Log In</Text>
          </Btn>
        </TouchableOpacity>
        <TouchableOpacity onPress={guestLogin}>
          <Text style={styles.navtxt}>Continue as guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Onboard;

const styles = StyleSheet.create({
  mainwrapper: {
    flex: 1,
    backgroundColor: Colors.blue,
  },
  headwrapper: {
    width: '100%',
    height: 622,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headtxt: {
    fontSize: 13,
    color: Colors.skin,
    fontFamily: Fonts.regular,
  },
  btntxt: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: Colors.white,
  },
  navtxt: {
    color: Colors.skyblue,
    fontFamily: Fonts.bold,
    textAlign: 'center',
    fontSize: 13,
    marginTop: 8,
  },
});
