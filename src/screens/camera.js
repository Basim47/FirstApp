import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

import ImagePicker from 'react-native-image-crop-picker';

const Camera = () => {
  const [imageRes, setimageRes] = useState('');

  const handleCamera = () => {
    ImagePicker.openCamera({
      width: 500,
      height: 500,
      mediaType: 'any',
    })
      .then(res => {
        setimageRes(res.path);
      })
      .catch(err => {
        Alert.alert('Canceled', 'Image not captured');
      });
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image
        source={
          imageRes ? {uri: imageRes} : require('../assets/images/alt.png')
        }
        style={{
          width: '100%',
          height: 280,
        }}
        resizeMode="cover"
      />
      <TouchableOpacity
        style={{
          padding: 10,
          borderWidth: 2,
          borderRadius: 30,
          backgroundColor: '#d42408',
          width: 150,
          marginVertical: 30,
        }}
        onPress={handleCamera}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontFamily: 'Nunito-Bold',
          }}>
          TAKE PICTURE
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({});
