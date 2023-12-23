import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
// Firestore
import firestore from '@react-native-firebase/firestore';
// Redux
import { useSelector } from 'react-redux';
// Components
import Colors from '../assets/colors/colors';
import Fonts from '../assets/fonts/fonts';
import Btn from '../assets/components/btn';
// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Snackbar from 'react-native-snackbar';

const Suggestion = ({ navigation }) => {
  const themeMode = useSelector(state => state.theme.mode);
  const [AddSuggestion, setNewSuggestion] = useState('');

  const handleSuggestion = () => {
    if (AddSuggestion === '') return;
    firestore()
      .collection('Suggestions')
      .add({ Description: AddSuggestion });
    setNewSuggestion('');
    Snackbar.show({
      text: 'Suggestion posted!',
      textColor: Colors.white,
      fontFamily: Fonts.medium,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: Colors.skin,
      marginBottom: 680
    })
  };
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
          Suggestion Box
        </Text>
      </View>
      <TextInput
        style={[
          styles.placestyle,
          {
            color: themeMode.text,
            backgroundColor: themeMode.input,
          },

        ]}
        placeholder="Write your Suggestions here..."
        placeholderTextColor={Colors.grey}
        value={AddSuggestion}
        onChangeText={setNewSuggestion}
      />
      <View style={styles.btnview}>
        <TouchableOpacity onPress={handleSuggestion}>
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
    marginHorizontal: 80,
  },
  placestyle: {
    height: 375,
    alignSelf: 'center',
    width: '90%',
    marginTop: 43,
    borderWidth: 2,
    borderRadius: 7,
    paddingLeft: 20,
    borderColor: Colors.grey,
    fontFamily: Fonts.medium,
    textAlignVertical: 'top',
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
