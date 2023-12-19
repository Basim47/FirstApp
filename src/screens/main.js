import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Alert,
  ScrollView,
  Image
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
  const userData = useSelector(state => state.user.Fullname);
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
          <Ionicons name='settings-sharp' size={30} color={themeMode.text} />
        </TouchableOpacity>
        <Text style={[styles.headtxt, { color: themeMode.text }]}>Daily Dose of Wisdom</Text>
        <View style={[styles.Pfp, { borderColor: themeMode.accent }]}>
          <Image
            source={
              userData.url
                ? { uri: userData.url }
                : require('../assets/images/user.png')
            }
            style={{
              width: 33,
              height: 33,
              borderRadius: 40,
            }}
            resizeMode="cover"
          />
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Preference')}>
        <Text style={{ color: themeMode.text, marginTop: 110, alignSelf: 'center' }}>Preference</Text>
      </TouchableOpacity>

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
    fontSize: 14,
    marginLeft: 50
  },
  Pfp: {
    width: 35,
    height: 35,
    marginLeft: 45,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
