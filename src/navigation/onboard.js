import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
//Redux
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

        <TouchableOpacity
          style={styles.mailtouchable}>

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
        <TouchableOpacity>
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
