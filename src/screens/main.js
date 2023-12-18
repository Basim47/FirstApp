import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Alert,
  ScrollView,
} from 'react-native';
import React, { useEffect } from 'react';
import Colors from '../assets/colors/colors';
import Fonts from '../assets/fonts/fonts';
// Redux
import { setUserData } from '../store/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

const Main = ({ navigation }) => {
  const dispatch = useDispatch();

  const themeMode = useSelector(state => state.theme.mode);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = auth().currentUser;
        if (userId) {
          const userDocument = await firestore()
            .collection('users')
            .doc(userId.uid)
            .get();
          if (userDocument.exists) {
            dispatch(
              setUserData({
                ...userDocument.data(),
                documentId: userDocument.id,
              }),
            );
          } else {
            Alert.alert('no data');
          }
        } else {
          Alert.alert('no user');
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <ScrollView style={[styles.mainwrapper, { backgroundColor: themeMode.background }]}>
      <StatusBar translucent
        backgroundColor={themeMode.background} />
      <View style={styles.headwrapper}>
        <TouchableOpacity style={styles.mainbody}
          onPress={() => navigation.navigate('Settings')}>
          {themeMode.mode === 'light' ?
            <>
              <Ionicons name='settings-sharp' size={30} color={'black'} />
            </>
            :
            <>
              <Ionicons name='settings-sharp' size={30} color={'white'} />
            </>
          }
        </TouchableOpacity>
        <Text style={[styles.headtxt, { color: themeMode.text }]}>Daily Dose of Wisdom</Text>
      </View>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  mainwrapper: {
    flex: 1,
  },
  headwrapper: {
    flexDirection: 'row',
    marginTop: 60,
    width: '100%',
    alignItems: 'center',
  },
  mainbody: {
    marginLeft: 20,
  },
  headtxt: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    marginHorizontal: 55,
  },
});
