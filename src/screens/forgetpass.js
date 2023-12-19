import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  StatusBar,
  ScrollView
} from 'react-native';
import React, { useState } from 'react';
import Fonts from '../assets/fonts/fonts';
import Colors from '../assets/colors/colors';
import Btn from '../assets/components/btn';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Entypo';

const Forgetpass = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [stage, setStage] = useState('email'); // 'email', 'otp', 'new_password'
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleEmailInput = email => setEmail(email);
  const handleOtpInput = otp => setOtp(otp);
  const handleNewPasswordInput = password => setNewPassword(password);

  const handleNext = async () => {
    switch (stage) {
      case 'email':
        // Send email with OTP link using Firebase
        try {
          await auth().sendPasswordResetEmail(email);
          setStage('otp');
        } catch (error) {
          Alert.alert('Error', error.message);
        }
        break;
      case 'otp':
        // Verify OTP and allow entering new password
        try {
          await auth().confirmPasswordReset(email, otp);
          await auth().currentUser.updatePassword(newPassword);
          Alert.alert('Success', 'Password reset successfully!');
          navigation.navigate('Login'); // Navigate to login screen
        } catch (error) {
          Alert.alert('Error', error.message);
        }
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.mainwrapper}>
      <StatusBar translucent
        backgroundColor={Colors.blue} />
      <View style={styles.headwrap}>
        <Text style={styles.headtxt}>Daily Dose of Wisdom</Text>
      </View>
      <ScrollView style={styles.contextwrap}>
        {stage === 'email' && (
          <>
            <Text style={styles.heading}>Forget Password</Text>
            <View style={styles.box}>
              <Text style={styles.boxtxt}>
                Please fill email and we,ll send you a link to get back into
                your account
              </Text>
            </View>
          </>
        )}
        {stage === 'otp' && (
          <>
            <Text style={styles.heading}>Reset Password</Text>
          </>
        )}

        <View style={styles.inputbox}>
          <Text style={styles.placeholder}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor={Colors.white}
            keyboardType="email-address"
            style={styles.inputtxt}
            value={email}
            onChangeText={handleEmailInput}
          />

          {stage === 'otp' && (
            <>
              <View style={{ marginTop: 5 }}>
                <Text style={styles.placeholder}>Otp Code</Text>
                <TextInput
                  style={styles.inputtxt}
                  placeholderTextColor={Colors.white}
                  keyboardType="number-pad"
                  placeholder="Enter the Otp Code"
                  value={otp}
                  onChangeText={handleOtpInput}
                />
              </View>
              <View style={{ marginTop: 5 }}>
                <Text style={styles.placeholder}>New Password</Text>
                <TextInput
                  style={styles.inputtxt}
                  placeholder="Enter your password"
                  placeholderTextColor={Colors.white}
                  secureTextEntry={!isPasswordVisible}
                  value={newPassword}
                  onChangeText={handleNewPasswordInput}
                />
                <View style={styles.eye}>
                  <TouchableOpacity onPress={togglePassword}>
                    <Icon
                      name={isPasswordVisible ? 'eye' : 'eye-with-line'}
                      size={18}
                      color={Colors.grey}
                    />
                  </TouchableOpacity>
                </View>
                <Text style={styles.passcond}>
                  The password must have at least one lowercase, one uppercase,
                  one special and one numeric character.
                </Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>
      <View style={styles.btn}>
        <View>
          <TouchableOpacity onPress={handleNext}>
            {stage === 'email' && (
              <>
                <Btn>
                  <Text style={styles.btntxt}>Send</Text>
                </Btn>
              </>
            )}
            {stage === 'otp' && (
              <>
                <Btn>
                  <Text style={styles.btntxt}>Reset Password</Text>
                </Btn>
              </>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.navtxt}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.btntxt}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Forgetpass;

const styles = StyleSheet.create({
  mainwrapper: {
    flex: 1,
    backgroundColor: Colors.blue,
  },
  headwrap: {
    width: '100%',
    height: 185,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headtxt: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: Colors.skin,
  },
  contextwrap: {
    width: '100%',
    height: 300,
    marginTop: 5,
  },
  heading: {
    fontSize: 16,
    fontFamily: Fonts.bold,
    color: Colors.white,
    marginLeft: 15,
    marginVertical: 18,
  },
  box: {
    width: '92%',
    height: 60,
    backgroundColor: Colors.skyblue,
    alignSelf: 'center',
    borderRadius: 8,
    marginVertical: 7,
    padding: 15,
  },
  boxtxt: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: Colors.white,
  },
  inputbox: {
    width: '100%',
    height: 300,
  },
  placeholder: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.white,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 5,
  },
  inputtxt: {
    width: '92%',
    height: 45,
    borderWidth: 1,
    borderColor: Colors.grey,
    marginLeft: 15,
    paddingLeft: 15,
    fontSize: 14,
    fontFamily: Fonts.regular,
    borderRadius: 8,
    backgroundColor: Colors.lightblue,
    color: Colors.white,
  },

  passcond: {
    color: Colors.skin,
    marginTop: 3,
    fontSize: 12,
    fontFamily: Fonts.regular,
    marginHorizontal: 15,
  },
  btntxt: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: Colors.white,
  },
  navtxt: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  btn: {
    position: 'absolute',
    width: '100%',
    top: 650
  },
  eye: {
    position: 'absolute',
    top: 48,
    right: 30,
  },
});
