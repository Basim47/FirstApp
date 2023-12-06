import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import * as Progress from 'react-native-progress';

const Gallery = () => {
  const [imageRes, setimageRes] = useState('');
  const [uploadProgress, setuploadProgress] = useState(0);
  const [isLoading, setisLoading] = useState(false);

  const handleGallery = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      mediaType: 'any',
    })
      .then(res => {
        setimageRes(res.path);
        upload(res.path);
      })
      .catch(err => { });
  };

  const upload = async uri => {
    try {
      setisLoading(true);
      const strPart = uri.split('/');
      const fileName = strPart[strPart.length - 1];
      const reference = storage().ref(`Uploads/${fileName}`);

      const task = reference.putFile(uri);
      task.on('state_changed', snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setuploadProgress(progress);
      });

      task.then(async () => {
        setisLoading(false);
        Alert.alert('Uploaded');
        const url = await reference.getDownloadURL();
        console.log({ url });
      });
    } catch (error) {
      setisLoading(false);
      Alert.alert('Failed', JSON.stringify(error));
    }
  };

  return (
    <View style={styles.mainwrapper}>
      <Image
        source={
          imageRes ? { uri: imageRes } : require('../assets/images/alt.png')
        }
        style={styles.imgcont}
        resizeMode="cover"
      />
      <View>
        {isLoading ? (
          <View style={styles.progwrap}>
            <Text style={styles.progtitle}>Uploading..</Text>
            <Progress.Bar
              progress={uploadProgress}
              width={300}
              height={10}
              color="#343148FF"
              borderColor="#343148FF"
            />
          </View>
        ) : (
          <TouchableOpacity style={styles.btn} onPress={handleGallery}>
            <Text style={styles.btntxt}>Upload</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  mainwrapper: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  imgcont: {
    width: '100%',
    height: 350,
  },
  btn: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#FAF9F6',
    width: 150,
    marginVertical: 30,
    elevation: 7,
    alignSelf: 'center',
  },
  btntxt: {
    color: '#343148FF',
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
  progwrap: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progtitle: {
    color: '#343148FF',
    fontFamily: 'Nunito-Medium',
    fontSize: 18,
  },
});
