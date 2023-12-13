import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { signInWithGoogle } from '../services/firebaseServices';
//Icons
import Icons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { setUserData } from '../store/actions/userAction';

const Onboard = ({ navigation }) => {
  const dispatch = useDispatch()
  return (
    <View style={styles.mainwrapper}>
      <View
        style={{
          width: '100%',
          height: 150,
        }}>
        <Text style={styles.headtxt}>Online Food</Text>
      </View>
      <View style={styles.contxtwrapper}>
        <Text style={styles.txt}>Continue as...</Text>
        <TouchableOpacity
          onPress={() => signInWithGoogle((data) => dispatch(setUserData(data)))}
          style={styles.touchable}>
          <View
            style={{
              marginLeft: 40,
            }}>
            <Icons name={'sc-google-plus'} size={28} color={'#343148FF'} />
          </View>
          <Text
            style={{
              fontFamily: 'Nunito-Bold',
              fontSize: 16,
              color: '#343148FF',
              marginLeft: 35,
            }}>
            GOOGLE
          </Text>
        </TouchableOpacity>
        <View style={styles.seperater}></View>
        <Text style={styles.txt}>Create new account!</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('AuthStack', { screen: 'Signup' })}
          style={styles.mailtouchable}>
          <View
            style={{
              marginLeft: 40,
            }}>
            <Icon name={'gmail'} size={26} color={'#FAF9F6'} />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Nunito-Bold',
              color: '#FAF9F6',
              marginLeft: 40,
            }}>
            EMAIL
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AuthStack', { screen: 'Login' })}>
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
export default Onboard;

const styles = StyleSheet.create({
  mainwrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#343148FF',
  },
  headtxt: {
    fontSize: 46,
    color: '#D7C49EFF',
    fontFamily: 'Grandista',
    textAlign: 'center',
  },
  contxtwrapper: {
    width: '90%',
    height: 320,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: '#D7C49EFF',
    fontSize: 14,
    marginVertical: 5,
    fontFamily: 'Nunito-Regular',
  },
  touchable: {
    width: 260,
    height: 45,
    backgroundColor: '#D7C49EFF',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 50,
    elevation: 7,
    marginVertical: 10,
  },
  mailtouchable: {
    width: 260,
    height: 45,
    backgroundColor: '#8c180f',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 50,
    elevation: 7,
    marginVertical: 10,
  },
  seperater: {
    width: '95%',
    height: 1,
    backgroundColor: '#858282',
    opacity: 0.2,
    marginVertical: 15,
  },
  navtxt: {
    color: '#fff',
    fontFamily: 'Nunito-Italic',
    textAlign: 'center',
    fontSize: 13,
    marginTop: 15,
  },
});
