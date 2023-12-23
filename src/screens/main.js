import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  FlatList,
  Image
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../assets/colors/colors';
import Fonts from '../assets/fonts/fonts';
// Redux
import { setUserData } from '../store/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
import Snackbar from 'react-native-snackbar';

const Main = ({ navigation }) => {
  const userData = useSelector(state => state.user.Fullname);
  const dispatch = useDispatch();
  const themeMode = useSelector(state => state.theme.mode);
  const [categories, setCategories] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [uploadProgress, setuploadProgress] = useState(0);

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

          }
        } else {

        }
      } catch (error) {

        Snackbar.show({
          text: 'Error fetching userdata!',
          textColor: Colors.white,
          fontFamily: Fonts.medium,
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: Colors.skin,
          marginBottom: 680
        })
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      try {
        const snapshot = await firestore().collection('mainCat').get();
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const progress = data;
        setuploadProgress(progress);
        setCategories(data);
        setisLoading(false);
      } catch (error) {
        Snackbar.show({
          text: 'Error fetching categories!',
          textColor: Colors.white,
          fontFamily: Fonts.medium,
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: Colors.skin,
          marginBottom: 680
        })
      }
    };

    fetchData();
  }, []);

  return (
    <View style={[styles.mainwrapper, { backgroundColor: themeMode.background }]}>
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

      {isLoading ? (
        <View style={styles.barview}>
          <Progress.CircleSnail
            progress={uploadProgress}
            size={50}
            color={Colors.skin}
            thickness={3}
          />
        </View>
      ) : (
        <View style={styles.listview}>

          <View>
            <FlatList
              data={categories}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View>
                  <View style={styles.catrow}>
                    <View style={[styles.categoryItem, { backgroundColor: themeMode.input }]}>
                      <TouchableOpacity onPress={() => navigation.navigate("Preference")}>
                        <View style={styles.catiner}>
                          <Text style={[styles.title, { color: themeMode.text }]}>{item.item[0]}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.categoryItem, { backgroundColor: themeMode.input }]}>
                      <TouchableOpacity onPress={() => navigation.navigate("Preference")}>
                        <View style={styles.catiner}>
                          <Text style={[styles.title, { color: themeMode.text }]}>{item.item[1]}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.catrow}>
                    <View style={[styles.categoryItem, { backgroundColor: themeMode.input }]}>
                      <TouchableOpacity onPress={() => navigation.navigate("Preference")}>
                        <View style={styles.catiner}>
                          <Text style={[styles.title, { color: themeMode.text }]}>{item.item[2]}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.categoryItem, { backgroundColor: themeMode.input }]}>
                      <TouchableOpacity onPress={() => navigation.navigate("Preference")}>
                        <View style={styles.catiner}>
                          <Text style={[styles.title, { color: themeMode.text }]}>{item.item[3]}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.catrow}>
                    <View style={[styles.categoryItem, { backgroundColor: themeMode.input }]}>
                      <TouchableOpacity onPress={() => navigation.navigate("Preference")}>
                        <View style={styles.catiner}>
                          <Text style={[styles.title, { color: themeMode.text }]}>{item.item[4]}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.categoryItem, { backgroundColor: themeMode.input }]}>
                      <TouchableOpacity onPress={() => navigation.navigate("Preference")}>
                        <View style={styles.catiner}>
                          <Text style={[styles.title, { color: themeMode.text }]}>{item.item[5]}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.catrow}>
                    <View style={[styles.categoryItem, { backgroundColor: themeMode.input }]}>
                      <TouchableOpacity onPress={() => navigation.navigate("Preference")}>
                        <View style={styles.catiner}>
                          <Text style={[styles.title, { color: themeMode.text }]}>{item.item[6]}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.categoryItem, { backgroundColor: themeMode.input }]}>
                      <TouchableOpacity onPress={() => navigation.navigate("Preference")}>
                        <View style={styles.catiner}>
                          <Text style={[styles.title, { color: themeMode.text }]}>{item.item[7]}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

              )}
            />
          </View>
        </View>
      )}

    </View>
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
  barview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#333',
    justifyContent: 'center',
  },
  headtext: {
    fontSize: 28,
    color: '#fff',
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
  },
  listview: {
    width: '100%',
    height: 600,
    marginTop: 20,
    paddingHorizontal: 10
  },
  categoryItem: {
    width: 145,
    height: 135,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 13,
    borderRadius: 10,
    elevation: 7
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts.bold,
    textAlign: 'center',
    marginTop: 40
  },
  catiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  catrow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});
