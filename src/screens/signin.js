import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../assets/colors/colors';
import Fonts from '../assets/fonts/fonts';
import Btn from '../assets/components/btn';
import Icon from 'react-native-vector-icons/FontAwesome';

const Signin = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password1, setPassword1] = useState('');
  const [showPassword1, setShowPassword1] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  return (
    <View style={styles.mainwrapper}>
      <View style={styles.headwrapper}>
        <Text style={styles.headtxt}>Daily Dose of Wisdom</Text>
      </View>
      <View>
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
        <View style={styles.container}>
          <TextInput
            style={styles.passinput}
            placeholder="Enter your password"
            placeholderTextColor={Colors.white}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <View style={styles.eyeIconContainer}>
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Icon
                name={showPassword ? 'eye' : 'eye-slash'}
                size={20}
                color={Colors.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.passcond}>
          The password must have at least one lowercase, one uppercase, one
          special and one numeric character.
        </Text>
        <Text style={styles.placeholdertxt}>Confirm Password</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.passinput}
            placeholder="Enter your password"
            placeholderTextColor={Colors.white}
            secureTextEntry={!showPassword1}
            value={password1}
            onChangeText={text => setPassword1(text)}
          />
          <View style={styles.eyeIconContainer}>
            <TouchableOpacity onPress={togglePasswordVisibility1}>
              <Icon
                name={showPassword1 ? 'eye' : 'eye-slash'}
                size={20}
                color={Colors.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.reg}>
          <Btn>
            <Text style={styles.btntxt}>Register</Text>
          </Btn>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottxt}>Already have an account?</Text>
        <TouchableOpacity
          style={styles.botbtn}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.botbtntxt}>Sign In</Text>
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
  regtxt: {
    width: '92%',
    paddingLeft: 15,
    marginTop: 35,
    fontSize: 18,
    color: Colors.white,
    fontFamily: Fonts.bold,
  },
  placeholdertxt: {
    width: '92%',
    paddingLeft: 15,
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.regular,
    marginTop: 15,
  },
  placeholderinput: {
    width: '92%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.white,
    color: Colors.white,
    paddingLeft: 20,
    marginTop: 7,
  },
  passinput: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.white,
    color: Colors.white,
    paddingLeft: 20,
    marginTop: 7,
  },
  container: {
    width: '92%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  passcond: {
    paddingLeft: 15,
    color: Colors.skin,
    marginTop: 3,
    fontSize: 13,
    fontFamily: Fonts.regular
  },
  btntxt: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: Colors.white,
  },
  reg: {
    marginTop: 50,
  },
  bottom: {
    flexDirection: 'row',
    width: '92%',
    marginTop: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  bottxt: {
    color: Colors.white,
    fontSize: 13,
    fontFamily: Fonts.regular,
  },
  botbtn: {
    marginLeft: 4,
  },
  botbtntxt: {
    fontFamily: Fonts.bold,
    fontSize: 13,
    color: Colors.skyblue,
  },
  eyeIconContainer: {
    marginLeft: 285,
    position: 'absolute',
  },
});
