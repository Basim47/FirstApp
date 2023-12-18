import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity, TextInput, } from 'react-native';
import React from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/actions/themeSlice';
// Components
import Colors from '../assets/colors/colors';
import Fonts from '../assets/fonts/fonts';
import Btn from '../assets/components/btn';
// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';


const Suggestion = ({ navigation }) => {
  const themeMode = useSelector(state => state.theme.mode);
  return (
    <ScrollView style={[styles.mainwrapper, { backgroundColor: themeMode.background }]}>
      <StatusBar translucent
        backgroundColor={Colors.blue} />
      <View style={styles.headwrapper}>
        <TouchableOpacity
          style={styles.mainbody}
          onPress={() => navigation.goBack()}>
          <AntDesign name={'arrowleft'} size={20} color={themeMode.text} />
        </TouchableOpacity>
        <Text style={[styles.headtxt, { color: themeMode.text }]}>Suggestion Box</Text>
      </View>
      <TextInput style={styles.placestyle}
        placeholder="Write your Suggestions here..."
        placeholderTextColor={Colors.grey} />
      <View style={styles.btnview}>
        <TouchableOpacity >
          <Btn>
            <Text style={styles.btntxt}>Send</Text>
          </Btn>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Suggestion;

const styles = StyleSheet.create({
  mainwrapper: {
    flex: 1,
    backgroundColor: Colors.blue,
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
    marginHorizontal: 80,
  },
  placestyle: {
    height: 375,
    alignSelf: 'center',
    width: '90%',
    marginTop: 43,
    borderWidth: 1,
    borderRadius: 7,
    paddingLeft: 20,
    borderColor: Colors.grey,
    fontFamily: Fonts.medium,
    color: Colors.white,
    textAlignVertical: 'top'
  },
  btnview: {
    marginTop: 35,
  },
  btntxt: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: Colors.white,
  },
});
