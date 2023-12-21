import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Components
import Colors from '../assets/colors/colors';
import Fonts from '../assets/fonts/fonts';
// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
const Favorite = ({ navigation }) => {
  const themeMode = useSelector(state => state.theme.mode);
  // profile picture
  const userData = useSelector(state => state.user.Fullname);
  return (
    <ScrollView
      style={[styles.mainwrapper, { backgroundColor: themeMode.background }]}>
      <StatusBar translucent backgroundColor={themeMode.background} />
      <View style={styles.headwrapper}>
        <TouchableOpacity
          style={styles.mainbody}
          onPress={() => navigation.goBack()}>
          <AntDesign name={'arrowleft'} size={20} color={themeMode.text} />
        </TouchableOpacity>
        <Text style={[styles.headtxt, { color: themeMode.text }]}>
          Favourites
        </Text>
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

    </ScrollView>
  );
};

export default Favorite;

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
    fontSize: 15,
    color: Colors.white,
    marginLeft: 100
  },
  Pfp: {
    width: 35,
    height: 35,
    marginLeft: 75,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
