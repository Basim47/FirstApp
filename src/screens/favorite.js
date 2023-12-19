import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
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
    marginHorizontal: 110,
  },
});
