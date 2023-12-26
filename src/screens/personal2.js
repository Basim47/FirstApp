import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import PagerView from 'react-native-pager-view';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Colors from '../assets/colors/colors';
import Fonts from '../assets/fonts/fonts';
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';

const Personal2 = () => {
  const [screens, setScreens] = useState([]);
  const themeMode = useSelector(state => state.theme.mode);
  const [isLoading, setisLoading] = useState(false);
  const [uploadProgress, setuploadProgress] = useState(0);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isLiked, setIsLiked] = useState(false);


  const handleLike = async () => {
    setIsLiked(!isLiked);
    const user = auth().currentUser;
    await firestore().collection('users').doc(user.uid).collection('liked').add({ data: screens[index] });
  };

  useEffect(() => {
    const fetchLike = async () => {
      try {
        const user = auth().currentUser;
        if (user) {
          await firestore().collection('users').doc(user.uid).collection('liked').doc().get();
          setIsLiked(!isLiked)
        } else {

        }

      } catch (error) {
        console.log(error);
      }
      // Make a call to your API to update the like status
    };
    fetchLike();
  }, []);

  const handleSave = async () => {
    const user = auth().currentUser
    await firestore().collection('users').doc(user.uid).collection('Saved').add({ data: screens[index] })
  };

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      try {
        const data = firestore().collection('stories').onSnapshot(snapshot => {
          const screendata = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setScreens(screendata);
        })
        const progress = screens;
        setuploadProgress(progress);
        setisLoading(false);
      } catch (error) {
        console.error('Error');
      }
    };

    fetchData();
  }, []);

  const handleShare = async () => {
    try {
      await Share.open({
        message: text, // Optional
        // Add other options as needed, e.g., for images, files, etc.
      });
      Snackbar.show({
        text: 'Story shared!',
        textColor: Colors.white,
        fontFamily: Fonts.medium,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.skin,
        marginBottom: 680,
      }); // Handle success/failure
    } catch (error) {
      Snackbar.show({
        text: 'Error sharing Story!',
        textColor: Colors.white,
        fontFamily: Fonts.medium,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.skin,
        marginBottom: 680,
      });
    }
  };

  const handleCopy = async () => {
    Clipboard.setString(text);
    try {
      // Success: Display a success message or provide feedback
      Snackbar.show({
        text: 'Text is copied!',
        textColor: Colors.white,
        fontFamily: Fonts.medium,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.skin,
        marginBottom: 680,
      });
    } catch (error) {
      // Error handling: Handle any errors that may occur
      Snackbar.show({
        text: 'Error copying text!',
        textColor: Colors.white,
        fontFamily: Fonts.medium,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.skin,
        marginBottom: 680,
      });
    }
  };

  const handleNext = () => {
    setIndex(index => index + 1);
  };

  const handlePrev = () => {
    setIndex(index => index - 1);
  };

  return (
    <View style={[styles.container, { backgroundColor: themeMode.background }]}>
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
        <>
          <View>
            <FlatList
              data={screens}
              horizontal
              pagingEnabled
              renderItem={({ item, index }) => (
                <View>
                  <PagerView
                    style={styles.pgView}
                    initialPage={0}
                    onPageSelected={e => setIndex(e.nativeEvent.position)}>
                    <View style={{ flex: 1 }}>
                      <View style={[styles.page, { backgroundColor: themeMode.input }]}>
                        <View style={styles.titlev}>
                          <Text style={[styles.stryttl, { color: themeMode.text }]}>
                            {item.title}
                          </Text>
                          <View style={styles.hicon}>
                            <AntDesign
                              name={'heart'}
                              size={17}
                              color={!isLiked ? Colors.icon : Colors.skin}
                            />
                          </View>
                        </View>
                        <Text style={[styles.strytxt, { color: themeMode.text }]}>
                          {item.story}
                        </Text>
                        <View style={styles.iconsbar}>
                          <TouchableOpacity onPress={handleSave}>
                            <MaterialCommunityIcons
                              name={'bookmark-multiple-outline'}
                              size={17}
                              color={Colors.icon}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.like} onPress={handleLike}>
                            <AntDesign
                              name={'hearto'}
                              size={17}
                              color={!isLiked ? Colors.icon : Colors.skin}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.like} onPress={() => handleShare(setText(item.story))}>
                            <AntDesign
                              name={'sharealt'}
                              size={17}
                              color={Colors.icon}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.like} onPress={() => handleCopy(setText(item.story))}>
                            <MaterialCommunityIcons
                              name={'content-save-all'}
                              size={17}
                              color={Colors.icon}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </PagerView>
                </View>
              )} />
            <View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handlePrev}>
                  <View
                    style={[styles.prvbtn, { backgroundColor: themeMode.btn }]}>
                    <Text style={styles.txt}>Previous</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNext}>
                  <View
                    style={[styles.prvbtn, { backgroundColor: themeMode.btn }]}>
                    <Text style={styles.txt}>Next</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default Personal2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pgView: {
    height: 505,
    width: 360
  },
  barview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {
    width: '90%',
    height: 470,
    margin: 18,
    elevation: 7,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 330,
    height: 90,
    marginHorizontal: 15
  },
  stryttl: {
    fontFamily: Fonts.bold,
    fontSize: 15,
    marginTop: 20,
    marginLeft: 20,
  },
  strytxt: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    marginLeft: 20,
    marginTop: 10,
  },
  prvbtn: {
    width: 160,
    height: 47,
    borderRadius: 8,
    elevation: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  txt: {
    fontFamily: Fonts.regular,
    color: Colors.white,
  },
  titlev: {
    flexDirection: 'row',
  },
  hicon: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: 290,
  },
  iconsbar: {
    flexDirection: 'row',
    marginTop: 370,
    marginLeft: 225,
  },
  like: {
    marginLeft: 5,
  },
});
