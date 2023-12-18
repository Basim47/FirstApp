import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity, TextInput, FlatList, } from 'react-native';
import React from 'react';
import { SearchBar } from 'react-native-elements';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/actions/themeSlice';
// Components
import Colors from '../assets/colors/colors';
import Fonts from '../assets/fonts/fonts';
import Btn from '../assets/components/btn';
// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';

const Search = ({ navigation }) => {
  const themeMode = useSelector(state => state.theme.mode);
  return (
    <View style={[styles.mainwrapper, { backgroundColor: themeMode.background }]}>
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
      <View style={styles.searchview}>
        <TextInput style={[styles.placestyle, { color: themeMode.text }]}
          placeholder="Search here..."
          placeholderTextColor={themeMode.text}
        />
      </View>
      <FlatList></FlatList>
    </View>
  );
};

export default Search;

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
    height: 45,
    alignSelf: 'center',
    width: '90%',
    marginTop: 43,
    borderWidth: 1,
    borderRadius: 7,
    paddingLeft: 20,
    borderColor: Colors.grey,
    fontFamily: Fonts.medium,
    textAlignVertical: 'top'
  },
});
