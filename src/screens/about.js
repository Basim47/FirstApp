import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Colors from '../assets/colors/colors';
import Fonts from '../assets/fonts/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Linking} from 'react-native';

const About = ({navigation}) => {
  const themeMode = useSelector(state => state.theme.mode);
  return (
    <View style={[styles.mainwrapper, {backgroundColor: themeMode.background}]}>
      <StatusBar translucent backgroundColor={Colors.blue} />
      <View style={styles.headwrapper}>
        <TouchableOpacity
          style={styles.mainbody}
          onPress={() => navigation.goBack()}>
          <AntDesign name={'arrowleft'} size={20} color={themeMode.text} />
        </TouchableOpacity>
        <Text style={[styles.headtxt, {color: themeMode.text}]}>About</Text>
      </View>
      <ScrollView style={styles.scrview}>
        <Text style={[styles.bodytxt, {color: themeMode.icon}]}>
          Your daily dose of wisdom, knowledge and inspiration!
        </Text>
        <Text style={[styles.bodytxt, {color: themeMode.icon}]}>
          Get inspired every day by thoughtful wisdom, exciting stories,
          fascinating personalities or the latest scientific findings. Join the
          daily growing community of knowledge seekers and brighten up your life
          every day anew. Free of charge!
        </Text>
        <Text style={[styles.bodytxt, {color: themeMode.icon}]}>
          Social media is dead. Long live your brain! It's time for content that
          changes your life.
        </Text>
        <Text style={[styles.bodytxt, {color: themeMode.icon}]}>
          Daily Dose of Wisdom offers you a unique opportunity to add real value
          to life's little breaks. Whether you want to fill the moment with
          interesting new science, fascinating facts, exciting stories, or
          enlightening wisdom, you'll find a variety of content that our
          community has shared and found to be good. Become an author yourself
          and share great content that might interest others.
        </Text>
        <Text style={[styles.bodytxt, {color: themeMode.icon}]}>
          Breathe in the fresh scent of great content that gets your brain
          moving and won't let you go.
        </Text>
        <Text style={[styles.bodytxt1, {color: themeMode.icon}]}>Also:</Text>
        <Text style={[styles.bodytxt, {color: themeMode.icon}]}>
          - Discover and browse the collection of thousands of content,
        </Text>
        <Text style={[styles.bodytxt, {color: themeMode.icon}]}>
          - Add content yourself and inspire others,
        </Text>
        <Text style={[styles.bodytxt, {color: themeMode.icon}]}>
          - Create your own library of content you like,
        </Text>
        <Text style={[styles.bodytxt, {color: themeMode.icon}]}>
          - Share everything with your family and friends,
        </Text>
        <Text style={[styles.bodytxt, {color: themeMode.icon}]}>
          - Set up your own account in just a few steps and use Daily Dose of
          Wisdom on multiple devices,
        </Text>
        <Text style={[styles.bodytxt, {color: themeMode.icon}]}>
          - Activate push notifications and automatically receive new
          suggestions every day.
        </Text>
        <Text style={[styles.bodytxt, {color: themeMode.icon}]}>
          - and most importantly, treat yourself better!
        </Text>
        <Text style={[styles.bodytxt1, {color: themeMode.icon}]}>
          Learn to rediscover the world in just a few minutes every day.
          Download your daily shot of wisdom with your coffee and enjoy the new
          paths you walk on.
        </Text>
        <Text style={[styles.bodytxt, {color: themeMode.icon}]}>
          An app for those who are tired of scrolling through social networks
          and want to enrich their lives with real content. Help us improve the
          app!
        </Text>
        <Text style={[styles.bodytxt, {color: themeMode.icon}]}>
          Do you have questions, suggestions or ideas to improve Daily Dose of
          Knowledge? We're eager to hear your feedback. Drop us your feedback in
          suggestion box.
        </Text>
        <Text style={[styles.bodytxt2, {color: themeMode.icon}]}>
          We'd love to hear from you if you'd like to help us with our mission.
        </Text>
        <TouchableOpacity
          style={styles.linkbtn}
          onPress={() => Linking.openURL('https://oracions.com/')}>
          <Text style={styles.linktxt}>
            Developed by: https://oracions.com/
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  mainwrapper: {
    flex: 1,
    // paddingBottom: 50,
    backgroundColor: Colors.blue,
  },
  headwrapper: {
    flexDirection: 'row',
    marginTop: 75,
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
  scrview: {
    paddingTop: 30,
    paddingHorizontal: 20,
    // marginBottom: 50,
  },
  bodytxt: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: 12,
    marginHorizontal: 10,
    lineHeight: 25,
  },
  bodytxt1: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: 12,
    lineHeight: 25,
    marginHorizontal: 10,
    marginVertical: 25,
  },
  bodytxt2: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: 12,
    marginHorizontal: 10,
    lineHeight: 25,
  },
  linkview: {
    height: 50,
  },
  linkbtn: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 50,
  },
  linktxt: {
    fontFamily: Fonts.regular,
    fontSize: 10,
    color: Colors.skin,
  },
});
