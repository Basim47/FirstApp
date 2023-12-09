import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
//Icons
import Icon from 'react-native-vector-icons/Entypo'
import { useSelector, useDispatch } from 'react-redux'
import { setImageUrl } from '../store/dpactions'
import ImageCropPicker from 'react-native-image-crop-picker'
import storage from '@react-native-firebase/storage'
import auth from '@react-native-firebase/auth'
import * as Progress from 'react-native-progress';

const Home = ({ navigation }) => {
  const [isLoading, setisLoading] = useState(false);
  const themeMode = useSelector(state => state.theme.mode);
  const dispatch = useDispatch();
  const imageUrl = useSelector((state) => state.image.imageUrl);
  const [uploadProgress, setuploadProgress] = useState(0);

  const handleGallery = () => {
    ImageCropPicker.openPicker({
      width: 500,
      height: 500,
      mediaType: 'photo',
      cropping: true,
      cropperCircleOverlay: true
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
      const reference = storage().ref(`${user.uid}/Profile_pic/${new Date().getTime()}.jpg`)

      const task = reference.putFile(uri);
      task.on('state_changed', snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setuploadProgress(progress);
      });

      task.then(async () => {
        setisLoading(false);
        const url = await reference.getDownloadURL();
        dispatch(setImageUrl(url));
      });
    } catch (error) {
      setisLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: themeMode.background
    }}>
      <View style={{
        width: '100%',
        height: 50,
        backgroundColor: themeMode.primary,
        elevation: 7,
        paddingVertical: 10,
        paddingLeft: 25

      }}>
        <Text style={{
          fontSize: 20,
          fontFamily: 'Nunito-Bold',
          color: themeMode.text
        }}>
          Profile
        </Text>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            marginLeft: 295,
            marginTop: 7,
            position: 'absolute'
          }}
          onPress={() => navigation.openDrawer()}>
          <Icon name={'menu'} size={35} color={themeMode.text} />
        </TouchableOpacity>
      </View>
      <View style={{
        width: '100%',
        height: 120,
        padding: 20,
        alignItems: 'center',
        flexDirection: 'row'
      }}>
        <View
          style={{
            width: 95,
            height: 95,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: themeMode.input,
            justifyContent: 'center',
            alignItems: "center"
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
                imageUrl ? { uri: imageUrl } : require('../assets/images/user.jpeg')
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
        <View style={{
          backgroundColor: themeMode.input,
          width: 200,
          height: 40,
          borderRadius: 20,
          marginLeft: 20,
        }}>
          <TouchableOpacity onPress={handleGallery} >
            <Text style={{
              color: themeMode.primary,
              fontSize: 20,
              fontFamily: 'Nunito-Medium',
              marginTop: 5,
              alignSelf: 'center',
            }}>Change Picture</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})