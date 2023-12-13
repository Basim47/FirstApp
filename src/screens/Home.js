import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
//Icons
import Icon from 'react-native-vector-icons/Entypo';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../store/actions/userAction';
import ImageCropPicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import * as Progress from 'react-native-progress';
import { setImageUrl } from '../store/dpactions';

const Home = ({ navigation }) => {
  const [isLoading, setisLoading] = useState(false);
  const [Fullname, setfullname] = useState('');
  const [Email, setemail] = useState('');
  const themeMode = useSelector(state => state.theme.mode);
  const dispatch = useDispatch();
  // const imageUrl = useSelector((state) => state.user.url);
  const userData = useSelector(state => state.user.Fullname);
  const [uploadProgress, setuploadProgress] = useState(0);

  const handleGallery = () => {
    ImageCropPicker.openPicker({
      width: 500,
      height: 500,
      mediaType: 'photo',
      cropping: true,
      cropperCircleOverlay: true,
    })
      .then(res => {
        upload(res.path);
      })
      .catch(err => { });
  };

  const upload = async uri => {
    try {
      setisLoading(true);
      const user = auth().currentUser;
      const reference = storage().ref(`${user.uid}/Profile_pic/${new Date().getTime()}.jpg`,
      );

      const task = reference.putFile(uri);
      task.on('state_changed', snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setuploadProgress(progress);
      });

      task.then(async () => {
        setisLoading(false);
        const url = await reference.getDownloadURL();
        await firestore().collection('users').doc(user.uid).update({ url });
        const imageUrl = await firestore().collection('users').doc(user.uid).get();
        if (imageUrl.exists) {
          dispatch(setUserData({ ...imageUrl.data() }));
        } else {
          Alert.alert('ImageUrl not Found');
        }
      });
    } catch (error) {
      setisLoading(false);
      console.log(error);
    }
  };

  const handleUpdateName = async () => {
    try {
      if (!Fullname) {
        console.log('Field Empty');
      } else {
        const userId = auth().currentUser.uid;
        await firestore().collection('users').doc(userId).update({
          Fullname,
        });
      }
    } catch (err) {
      Alert.alert('Error', 'Data not Updated');
    }
  };

  const handleUpdateEmail = async () => {
    try {
      if (!Email) {
        console.log('Field Empty');
      } else {
        const userId = auth().currentUser.uid;
        await firestore().collection('users').doc(userId).update({
          Email,
        });
      }
    } catch (err) {
      Alert.alert('Error', 'Data not Updated');
    }
  };


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: themeMode.background,
      }}>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: themeMode.primary,
          elevation: 7,
          paddingVertical: 10,
          paddingLeft: 25,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Nunito-Bold',
            color: themeMode.text,
          }}>
          {userData.Fullname}
        </Text>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            marginLeft: 295,
            marginTop: 7,
            position: 'absolute',
          }}
          onPress={() => navigation.openDrawer()}>
          <Icon name={'menu'} size={35} color={themeMode.text} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 120,
          padding: 20,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: 95,
            height: 95,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: themeMode.input,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {isLoading ? (
            <Progress.CircleSnail
              progress={uploadProgress}
              size={40}
              color={themeMode.input}
              thickness={5}
            />
          ) : (
            <Image
              source={
                userData.url
                  ? { uri: userData.url }
                  : require('../assets/images/user.jpeg')
              }
              style={{
                width: 90,
                height: 90,
                borderRadius: 50,
              }}
              resizeMode="cover"
            />
          )}
        </View>
        <View
          style={{
            backgroundColor: themeMode.input,
            width: 200,
            height: 40,
            borderRadius: 20,
            marginLeft: 20,
          }}>
          <TouchableOpacity onPress={handleGallery}>
            <Text
              style={{
                color: themeMode.primary,
                fontSize: 20,
                fontFamily: 'Nunito-Medium',
                marginTop: 5,
                alignSelf: 'center',
              }}>
              Change Picture
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {userData ? (
          <>
            <View>
              <Text style={styles.placeholder}>Full Name :</Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <TextInput
                  style={styles.inputs}
                  placeholder={userData.Fullname}
                  placeholderTextColor={'#343148FF'}
                  onChangeText={text => setfullname(text)}
                  value={Fullname}
                />
                <TouchableOpacity
                  onPress={handleUpdateName}
                  style={styles.touchable}>
                  <Text style={styles.btntxt}>Update</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.placeholder}>Email :</Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <TextInput
                  style={styles.inputs}
                  placeholder={userData.Email}
                  placeholderTextColor={'#343148FF'}
                  keyboardType="email-address"
                  onChangeText={text => setemail(text)}
                  value={Email}
                />
                <TouchableOpacity
                  onPress={handleUpdateEmail}
                  style={styles.touchable}>
                  <Text style={styles.btntxt}>Update</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <Text style={styles.loadingtxt}>Loading User Data...</Text>
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  placeholder: {
    color: '#D7C49EFF',
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    marginLeft: 10,
    marginTop: 5,
  },
  inputs: {
    width: 220,
    height: 40,
    margin: 10,
    backgroundColor: '#FAF9F6',
    paddingLeft: 14,
    borderRadius: 10,
    color: '#343148FF',
    elevation: 7,
  },
  touchable: {
    width: 90,
    height: 40,
    backgroundColor: '#D7C49EFF',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 4,
    elevation: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntxt: {
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    color: '#343148FF',
  },
  loadingtxt: {
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'Grandista',
    color: '#D7C49EFF',
    letterSpacing: 1,
  },
});
