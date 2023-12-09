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
import { useDispatch, useSelector } from 'react-redux';
import { AddAction, ResetrAction, SubAction } from '../store/action';

const Camera = () => {
  const [imageRes, setimageRes] = useState('');
  const globalVal = useSelector((state) => state.muReducer)
  const dispatch = useDispatch()
  const themeMode = useSelector(state => state.theme.mode);


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
    <View style={{
      flex: 1,
      alignItems: 'center',
      backgroundColor: themeMode.background
    }}>
      <Image
        source={
          imageRes ? { uri: imageRes } : require('../assets/images/alt.png')
        }
        style={{
          width: '100%',
          height: 280,
        }}
        resizeMode="cover"
      />
      <Text
        style={{
          color: themeMode.text,
          textAlign: 'center',
          fontFamily: 'Nunito-Bold',
          fontSize: 20
        }}>
        {globalVal}
      </Text>

      <TouchableOpacity
        style={{
          padding: 10,
          borderWidth: 2,
          borderRadius: 30,
          backgroundColor: themeMode.input,
          width: 150,
          marginVertical: 30,
        }}
        onPress={() => dispatch(AddAction(5))}>
        <Text
          style={{
            color: themeMode.primary,
            textAlign: 'center',
            fontFamily: 'Nunito-Bold',
          }}>
          ADD
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          padding: 10,
          borderWidth: 2,
          borderRadius: 30,
          backgroundColor: themeMode.input,
          width: 150,
          marginVertical: 30,
        }}
        onPress={() => dispatch(SubAction(2))}>
        <Text
          style={{
            color: themeMode.primary,
            textAlign: 'center',
            fontFamily: 'Nunito-Bold',
          }}>
          SUBS
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          padding: 10,
          borderWidth: 2,
          borderRadius: 30,
          backgroundColor: themeMode.input,
          width: 150,
          marginVertical: 30,
        }}
        onPress={() => dispatch(ResetrAction())}>
        <Text
          style={{
            color: themeMode.primary,
            textAlign: 'center',
            fontFamily: 'Nunito-Bold',
          }}>
          RESET
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({});
