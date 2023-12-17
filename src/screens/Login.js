import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
//Redux
import {useDispatch} from 'react-redux';
import {setUserData} from '../store/actions/userAction';
//Components
import Btn from '../assets/components/btn';
//Fonts
import Fonts from '../assets/fonts/fonts';
//Colors
import Colors from '../assets/colors/colors';
// icons
import Icons from 'react-native-vector-icons/Entypo';
// Fire Base
import {loginWithEmail} from '../services/firebaseServices';
const Login = ({navigation}) => {
  // Login Handle
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const handleLogin = () => {
    loginWithEmail(email, pass);
  };

  // Eyebutton visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.mainwrapper}>
      <View style={styles.headwrapper}>
        <Text style={styles.headtxt}>Daily Dose of Wisdom</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.titletxt}>Login to your account</Text>
        <Text style={styles.placetxt}>Email</Text>
        <TextInput
          style={styles.placestyle}
          placeholder="Enter your email"
          placeholderTextColor={'white'}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.placetxt}>Password</Text>
        <TextInput
          style={styles.placestyle}
          placeholder="Enter your password"
          placeholderTextColor={'white'}
          value={pass}
          onChangeText={setPass}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={togglePasswordVisibility}>
          <Icons
            name={isPasswordVisible ? 'eye' : 'eye-with-line'}
            size={18}
            color={Colors.grey}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
          <Text style={styles.forgettxt}>Forget Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnview}>
        <TouchableOpacity onPress={handleLogin}>
          <Btn>
            <Text style={styles.btntxt}>Sign In</Text>
          </Btn>
        </TouchableOpacity>
        <View style={styles.navView}>
          <Text style={styles.navdes}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text style={styles.navtxt}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  mainwrapper: {
    flex: 1,
    backgroundColor: Colors.blue,
  },
  headwrapper: {
    width: '100%',
    height: 135,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    width: '92%',
    height: 130,
    marginTop: 70,
    marginLeft: 15,
  },
  titletxt: {
    fontSize: 17,
    color: Colors.white,
    fontFamily: Fonts.bold,
  },
  placestyle: {
    height: 45,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 7,
    paddingLeft: 20,
    borderColor: Colors.grey,
    backgroundColor: Colors.lightblue,
    fontFamily: Fonts.regular,
    justifyContent: 'space-evenly',
  },
  placetxt: {
    marginTop: 20,
    fontSize: 14,
    color: Colors.white,
    fontFamily: Fonts.regular,
  },
  eyeButton: {
    position: 'absolute',
    top: 180,
    right: 16,
  },
  headtxt: {
    fontSize: 13,
    color: Colors.skin,
    fontFamily: Fonts.regular,
  },
  forgettxt: {
    color: Colors.skyblue,
    fontFamily: Fonts.bold,
    marginLeft: 207,
    fontSize: 13,
    marginTop: 15,
  },
  btnview: {
    marginTop: 150,
  },
  btntxt: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: Colors.white,
  },

  navView: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  navdes: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: 13,
  },
  navtxt: {
    color: Colors.skyblue,
    fontFamily: Fonts.bold,
    fontSize: 13,
  },
});
