import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Components
import Colors from '../assets/colors/colors';
import Fonts from '../assets/fonts/fonts';
import Btn from '../assets/components/btn';
// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Story = ({ navigation }) => {
  const themeMode = useSelector(state => state.theme.mode);
  return (
    <View
      style={[styles.mainwrapper, { backgroundColor: themeMode.background }]}>
      <StatusBar translucent backgroundColor={themeMode.background} />
      <View style={[styles.storymain, { backgroundColor: themeMode.input }]}>
        <Text style={[styles.titletxt, { color: themeMode.text }]}>
          Add title
        </Text>
        <TextInput
          style={[styles.titleinputstyle, { color: themeMode.text }]}
          placeholder="Enter here..."
          placeholderTextColor={themeMode.text}
        />
        <Text style={[styles.titletxt2, { color: themeMode.text }]}>
          Add Content
        </Text>
        <TextInput
          style={[styles.titleinputstyle2, { color: themeMode.text }]}
          placeholder="Enter here..."
          placeholderTextColor={themeMode.text}
          multiline
          numberOfLines={20}
        />
      </View>
      <View style={styles.btnwrap}>
        <TouchableOpacity>
          <View style={[styles.btn, { backgroundColor: themeMode.btn }]}>
            <Text style={[styles.btntxt]}>Post story</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  mainwrapper: {
    flex: 1,
  },
  headtxt: {
    fontFamily: Fonts.bold,
    fontSize: 15,
    color: Colors.white,
    marginHorizontal: 1,
  },
  storymain: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 15,
    width: 320,
    height: 460,
    elevation: 7,
    borderRadius: 10,
  },
  titletxt: {
    marginLeft: 23,
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  titletxt2: {
    marginLeft: 23,
    marginTop: 15,
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  titleinputstyle: {
    alignSelf: 'center',
    height: 45,
    width: 280,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 7,
    paddingLeft: 20,
    borderColor: Colors.grey,
    fontFamily: Fonts.regular,
    verticalAlign: 'middle',
  },
  titleinputstyle2: {
    alignSelf: 'center',
    width: 280,
    height: 280,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 15,
    borderColor: Colors.grey,
    fontFamily: Fonts.regular,
    verticalAlign: 'top',
  },
  touch: {
    marginTop: 40,
    elevation: 7,
  },
  btntxt: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: Colors.white,
  },
  btn: {
    width: '92%',
    height: 47,
    borderRadius: 8,
    elevation: 7,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnwrap: {
    width: '100%',
    height: 70,
    marginTop: 20,
  },
});
