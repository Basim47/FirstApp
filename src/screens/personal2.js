import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import PagerView from 'react-native-pager-view';
import firestore from '@react-native-firebase/firestore';
import Colors from '../assets/colors/colors';
import Fonts from '../assets/fonts/fonts';
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';
import Clipboard from '@react-native-clipboard/clipboard';
import CustomAlert from '../assets/components/customAlert';


const Personal2 = () => {
  const [screens, setScreens] = useState('');
  const themeMode = useSelector(state => state.theme.mode);
  const [isLoading, setisLoading] = useState(false);
  const [uploadProgress, setuploadProgress] = useState(0);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('')
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    // Make a call to your API to update the like status
  };

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      try {
        const data = await firestore().collection('stories').get();
        setScreens(data.docs.map(doc => ({ key: doc.id, ...doc.data() })));
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
      const result = await Share.open({
        message: 'Check out this awesome app!',
        url: 'https://your-app-link.com', // Optional
        // Add other options as needed, e.g., for images, files, etc.
      });
      console.log('Share result:', result); // Handle success/failure
    } catch (error) {

    }
  };

  const handleCopy = async () => {
    Clipboard.setString(text)
    try {
      // Success: Display a success message or provide feedback
      console.log('done');

      <CustomAlert message='Text copied' />

    }
    catch (error) {
      // Error handling: Handle any errors that may occur
      console.error('Error copying text:', error);
    };
  }


  const handleNext = () => {
    setIndex(prevIndex => prevIndex + 1);
  };

  const handlePrev = () => {
    setIndex(prevIndex => prevIndex - 1);
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
            <PagerView
              style={styles.pgView}
              initialPage={0}
              onPageSelected={event => setIndex(event.nativeEvent.position)}>
              <View style={{ flex: 1 }}>
                <View style={[styles.page, { backgroundColor: themeMode.input }]}>
                  <View style={styles.titlev}>
                    <Text style={[styles.stryttl, { color: themeMode.text }]}>
                      {screens.items}
                    </Text>
                    <View style={styles.hicon}>
                      <AntDesign name={'heart'} size={17} color={!isLiked ? themeMode.icon : Colors.skin} />
                    </View>
                  </View>
                  <Text style={[styles.strytxt, { color: themeMode.text }]}>
                    {screens.items}
                  </Text>
                  <View style={styles.iconsbar}>
                    <TouchableOpacity>
                      <MaterialCommunityIcons
                        name={'bookmark-multiple-outline'}
                        size={17}
                        color={Colors.icon}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.like} onPress={handleLike}>
                      <AntDesign name={'hearto'} size={17} color={!isLiked ? themeMode.icon : Colors.skin} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.like} onPress={handleShare}>
                      <AntDesign
                        name={'sharealt'}
                        size={17}
                        color={Colors.icon}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.like} onPress={handleCopy}>
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
    width: '100%',
    height: 500,
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
    width: 100,
    height: 70,
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
    borderColor: 'red',
    width: 140,
    height: 47,
    borderRadius: 8,
    elevation: 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
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
