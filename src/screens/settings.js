import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../assets/colors/colors';
import Fonts from '../assets/fonts/fonts';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {useSelector, useDispatch} from 'react-redux';
import {toggleTheme} from '../store/actions/themeSlice';
import {logout} from '../services/firebaseServices';
import Icon from 'react-native-vector-icons/Feather';

const Settings = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch = () => setIsEnabled1(previousState1 => !previousState1);
  const themeMode = useSelector(state => state.theme.mode);
  const userData = useSelector(state => state.user.Fullname);
  const dispatch = useDispatch();
  const handletheme = () =>
    dispatch(toggleTheme(setIsEnabled(previousState => !previousState)));

  return (
    <View style={[styles.mainwrapper, {backgroundColor: themeMode.background}]}>
      <StatusBar translucent backgroundColor={themeMode.background} />
      <View style={styles.headwrapper}>
        <TouchableOpacity
          style={styles.mainbody}
          onPress={() => navigation.goBack()}>
          <AntDesign name={'arrowleft'} size={20} color={themeMode.text} />
        </TouchableOpacity>
        <Text style={[styles.headtxt, {color: themeMode.text}]}>Settings</Text>
      </View>
      <Text style={[styles.acc, {color: themeMode.text}]}>Account</Text>
      <View style={styles.prfdet}>
        <View style={[styles.Pfp, {borderColor: themeMode.accent}]}>
          <Image
            source={
              userData.url
                ? {uri: userData.url}
                : require('../assets/images/user.png')
            }
            style={{
              width: 78,
              height: 78,
              borderRadius: 60,
            }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.prfvtxt}>
          <Text style={[styles.prftxt, {color: themeMode.text}]}>
            {userData ? (
              <>
                <Text>{userData.Fullname}</Text>
              </>
            ) : (
              <>
                <Text>Guest</Text>
              </>
            )}
          </Text>
          <Text style={[styles.prfemail, {color: themeMode.accent}]}>
            {userData ? (
              <>
                <Text>{userData.Email}</Text>
              </>
            ) : (
              <>
                <Text>Guest@horizons.com</Text>
              </>
            )}
          </Text>
          <View>
            <TouchableOpacity
              style={styles.prfbtn}
              onPress={() => navigation.navigate('Profile')}>
              <FontAwesome name={'pencil'} size={10} color={Colors.white} />
              <Text style={styles.prfbtntxt}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={[styles.gentxt, {color: themeMode.text}]}>General</Text>
      <View>
        <TouchableOpacity
          style={styles.abtus}
          onPress={() => navigation.navigate('About')}>
          <AntDesign name={'infocirlce'} size={17} color={Colors.icon} />
          <Text style={[styles.bodytxt, {color: themeMode.icon}]}>
            About Us
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.abtus}>
          <FontAwesome name={'trash'} size={17} color={Colors.icon} />
          <Text style={[styles.bodytxt2, {color: themeMode.icon}]}>
            Delete Account
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.abtus}
          onPress={() => navigation.navigate('Favorite')}>
          <MaterialCommunityIcons
            name={'bookmark-multiple-outline'}
            size={17}
            color={Colors.icon}
          />
          <Text style={[styles.bodytxt, {color: themeMode.icon}]}>
            Favorite / Library
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.abtus}
          onPress={() => navigation.navigate('Suggestion')}>
          <FontAwesome name={'pencil-square-o'} size={17} color={Colors.icon} />
          <Text style={[styles.bodytxt, {color: themeMode.icon}]}>
            Suggestion Box
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.abtus}
          onPress={() => navigation.navigate('Search')}>
          <AntDesign name={'search1'} size={17} color={Colors.icon} />
          <Text style={[styles.bodytxt, {color: themeMode.icon}]}>
            Search Horizons
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.abtus1}>
        <Octicons name={'arrow-switch'} size={17} color={Colors.icon} />
        <TouchableOpacity>
          <Text style={[styles.bodytxt2, {color: themeMode.icon}]}>
            Change Theme
          </Text>
        </TouchableOpacity>
        <View style={styles.switch1}>
          <Switch
            trackColor={{false: '#767577', true: '#dfdfdf'}}
            thumbColor={isEnabled ? '#6b6bee' : '#f4f3f4'}
            onValueChange={handletheme}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.abtus1}>
        <FontAwesome name={'bell'} size={17} color={Colors.icon} />
        <TouchableOpacity>
          <Text style={[styles.bodytxt, {color: themeMode.icon}]}>
            Notifications
          </Text>
        </TouchableOpacity>
        <View style={styles.switch2}>
          <Switch
            trackColor={{false: '#767577', true: '#dfdfdf'}}
            thumbColor={isEnabled1 ? '#6b6bee' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled1}
          />
        </View>
      </View>
      <Text style={styles.nottxt}>
        By activating notifications you will recieve a daily suggestion.
      </Text>
      <View style={styles.logbtn}>
        <TouchableOpacity onPress={logout}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Icon name={'log-out'} size={16} color={Colors.white} />
            <Text style={styles.logtxt}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

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
  headtxt: {
    fontFamily: Fonts.bold,
    fontSize: 15,
    color: Colors.white,
    marginHorizontal: 110,
  },
  mainbody: {
    marginLeft: 20,
  },
  Pfp: {
    width: 80,
    height: 80,
    marginLeft: 20,
    marginTop: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  pfpbtn: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  prfdet: {
    flexDirection: 'row',
  },
  acc: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: 14,
    marginLeft: 20,
    marginTop: 20,
  },
  prfvtxt: {
    marginTop: 15,
  },
  prftxt: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: 12,
    marginLeft: 20,
  },
  prfemail: {
    marginLeft: 20,
    marginTop: 5,
    color: Colors.grey,
    fontFamily: Fonts.regular,
    fontSize: 12,
  },
  prfbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    backgroundColor: Colors.skin,
    borderWidth: 2,
    borderColor: Colors.skin,
    borderRadius: 35,
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10,
  },
  prfbtntxt: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: Fonts.regular,
    marginLeft: 5,
  },
  gentxt: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: 14,
    marginLeft: 20,
    marginTop: 30,
  },
  abtus: {
    width: 170,
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
  },
  abtus1: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
  },
  bodytxt: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: 13,
    marginLeft: 20,
  },
  nottxt: {
    color: Colors.skin,
    fontFamily: Fonts.regular,
    fontSize: 12,
    marginLeft: 20,
    marginTop: 15,
  },
  bodytxt2: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: 13,
    marginLeft: 22,
  },
  switch1: {
    marginLeft: 140,
  },
  switch2: {
    marginLeft: 155,
  },
  logbtn: {
    width: 110,
    height: 35,
    backgroundColor: Colors.skyblue,
    justifyContent: 'center',
    borderRadius: 8,
    margin: 20,
    padding: 8,
    elevation: 5,
  },
  logtxt: {
    fontFamily: Fonts.medium,
    fontSize: 12,
    color: Colors.white,
  },
});
