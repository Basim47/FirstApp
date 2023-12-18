import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import Colors from '../assets/colors/colors';
import Fonts from '../assets/fonts/fonts';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../store/actions/userAction';
import Icon from 'react-native-vector-icons/AntDesign';
import IconAwsm from 'react-native-vector-icons/FontAwesome';
import Btn from '../assets/components/btn';
import Icons from 'react-native-vector-icons/Entypo';
import ImageCropPicker from 'react-native-image-crop-picker';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import * as Progress from 'react-native-progress';

const Profile = ({ navigation }) => {
  const themeMode = useSelector(state => state.theme.mode);
  const [Fullname, setFullname] = useState('');
  const [Currentpass, setCurrentpass] = useState('');
  const [Newpass, setNewpass] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [uploadProgress, setuploadProgress] = useState(0);
  const userData = useSelector(state => state.user.Fullname);

  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

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
      const reference = storage().ref(
        `${user.uid}/Profile_pic/${new Date().getTime()}.jpg`,
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
        const imageUrl = await firestore()
          .collection('users')
          .doc(user.uid)
          .get();
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

  return (
    <View style={[styles.mainwrap, { backgroundColor: themeMode.background }]}>
      <StatusBar translucent backgroundColor={themeMode.background} />
      <View style={styles.headwrap}>
        <View style={styles.backbtn}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name={'arrowleft'} size={22} color={themeMode.text} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.headtxt, { color: themeMode.text }]}>
          Personal Info
        </Text>
      </View>
      <View style={[styles.Pfp, { borderColor: themeMode.accent }]}>
        {isLoading ? (
          <Progress.CircleSnail
            progress={uploadProgress}
            size={40}
            color={themeMode.background}
            thickness={5}
          />
        ) : (
          <Image
            source={
              userData.url
                ? { uri: userData.url }
                : require('../assets/images/user.png')
            }
            style={{
              width: 105,
              height: 105,
              borderRadius: 60,
            }}
            resizeMode="cover"
          />
        )}
      </View>
      <View style={[styles.addpfp, { backgroundColor: themeMode.accent }]}>
        <TouchableOpacity onPress={handleGallery}>
          <IconAwsm name={'pencil'} size={16} color={Colors.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.contxtwrap}>
        <Text style={[styles.holdr, { color: themeMode.icon }]}>Name</Text>
        <TextInput
          style={[
            styles.prompt,
            { color: themeMode.text, backgroundColor: themeMode.input },
          ]}
          onChangeText={txt => setFullname(txt)}
          value={Fullname}
        />
        <Text style={[styles.holdr, { color: themeMode.icon }]}>
          Current password
        </Text>
        <TextInput
          style={[
            styles.prompt,
            { color: themeMode.text, backgroundColor: themeMode.input },
          ]}
          secureTextEntry={!showPassword}
          onChangeText={txt => setCurrentpass(txt)}
          value={Currentpass}
        />
        <View style={styles.eyeIconContainer}>
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Icons
              name={showPassword ? 'eye' : 'eye-with-line'}
              size={20}
              color={Colors.icon}
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.holdr, { color: themeMode.icon }]}>
          New password
        </Text>
        <TextInput
          style={[
            styles.prompt,
            { color: themeMode.text, backgroundColor: themeMode.input },
          ]}
          secureTextEntry={!showPassword1}
          onChangeText={txt => setNewpass(txt)}
          value={Newpass}
        />
        <View style={styles.eyeIconContainer1}>
          <TouchableOpacity onPress={togglePasswordVisibility1}>
            <Icons
              name={showPassword1 ? 'eye' : 'eye-with-line'}
              size={20}
              color={Colors.icon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.passcond}>
          The password must have at least one lowercase, one uppercase, one
          special and one numeric character.
        </Text>
        <View style={styles.btn}>
          <TouchableOpacity>
            <Btn>
              <Text>Update Profile</Text>
            </Btn>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainwrap: {
    flex: 1,
  },
  headwrap: {
    width: '100%',
    height: 50,
    marginTop: 60,
    flexDirection: 'row',
  },
  backbtn: {
    width: 22,
    height: 22,
    marginLeft: 16,
  },
  headtxt: {
    fontSize: 16,
    fontFamily: Fonts.bold,
    marginLeft: 90,
  },
  Pfp: {
    width: 110,
    height: 110,
    marginLeft: 120,
    marginTop: 8,
    borderRadius: 60,
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
  addpfp: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 200,
    right: 120,
  },
  contxtwrap: {
    marginTop: 20,
    flex: 1,
  },
  holdr: {
    marginLeft: 18,
    marginVertical: 7,
  },
  prompt: {
    width: '90%',
    height: 45,
    borderWidth: 2,
    borderColor: Colors.grey,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 8,
    fontFamily: Fonts.regular,
    paddingLeft: 20,
  },
  passcond: {
    color: Colors.skin,
    fontSize: 12,
    fontFamily: Fonts.regular,
    marginHorizontal: 18,
  },
  btn: {
    marginTop: 140,
  },
  eyeIconContainer: {
    position: 'absolute',
    top: 130,
    right: 40,
  },
  eyeIconContainer1: {
    position: 'absolute',
    top: 215,
    right: 40,
  },
});
