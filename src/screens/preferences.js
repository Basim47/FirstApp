import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Components
import Colors from '../assets/colors/colors';
import Fonts from '../assets/fonts/fonts';
// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Preference = ({ navigation }) => {
    const themeMode = useSelector(state => state.theme.mode);
    return (
        <ScrollView
            style={[styles.mainwrapper, { backgroundColor: themeMode.background }]}>
            <StatusBar translucent backgroundColor={themeMode.background} />
            <View style={styles.headwrapper}>
                <TouchableOpacity
                    style={styles.mainbody}
                    onPress={() => navigation.goBack()}>
                    <AntDesign name={'arrowleft'} size={20} color={themeMode.text} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.mainbody2}
                    onPress={() => navigation.navigate('Settings')}>
                    <Ionicons name="settings-sharp" size={30} color={themeMode.text} />
                </TouchableOpacity>
                <Text style={[styles.headtxt, { color: themeMode.text }]}>
                    Preferences
                </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Personal')}>
                <Text
                    style={{ color: themeMode.text, marginTop: 80, alignSelf: 'center' }}>
                    Personal Preference
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Story')}>
                <Text
                    style={{ color: themeMode.text, marginTop: 100, alignSelf: 'center' }}>
                    Add story
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default Preference;

const styles = StyleSheet.create({
    mainwrapper: {
        flex: 1,
        backgroundColor: Colors.blue,
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
    mainbody2: {
        marginLeft: 10,
    },
    headtxt: {
        fontFamily: Fonts.bold,
        fontSize: 15,
        color: Colors.white,
        marginHorizontal: 66,
    },
});
