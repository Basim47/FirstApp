import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Components
import Colors from '../assets/colors/colors';
import Fonts from '../assets/fonts/fonts';
import Btn from '../assets/components/btn';
// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Story = ({ navigation }) => {
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
                    Daily Dose of Wisdom
                </Text>
            </View>
            <View style={styles.storymain}>
                <Text style={[styles.titletxt, { color: themeMode.text }]}>
                    Add title
                </Text>
                <TextInput
                    style={[styles.titleinputstyle, { color: themeMode.text }]}
                    placeholder="Enter here..."
                    placeholderTextColor={themeMode.text}
                />
                <Text style={[styles.titletxt2, { color: themeMode.text }]}>
                    Add Content
                </Text>
                <TextInput
                    style={[styles.titleinputstyle2, { color: themeMode.text }]}
                    placeholder="Enter here..."
                    placeholderTextColor={themeMode.text}
                />
            </View>
            <TouchableOpacity style={[styles.touch]}>
                <Btn>
                    <Text style={[styles.btntxt]}>Post story</Text>
                </Btn>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default Story;

const styles = StyleSheet.create({
    mainwrapper: {
        flex: 1,
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
        marginHorizontal: 45,
    },
    storymain: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 70,
        width: 320,
        height: 460,
        borderColor: Colors.white,
        borderWidth: 2,
        borderRadius: 20,

        borderCurve: 80,
    },
    titletxt: {
        marginLeft: 23,
        fontSize: 14,
        fontFamily: Fonts.regular,
    },
    titletxt2: {
        marginLeft: 23,
        marginTop: 15,
        fontSize: 14,
        fontFamily: Fonts.regular,
    },
    titleinputstyle: {
        alignSelf: 'center',
        height: 45,
        width: 280,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 7,
        paddingLeft: 20,
        borderColor: Colors.grey,
        fontFamily: Fonts.regular,
        verticalAlign: 'middle',
    },
    titleinputstyle2: {
        alignSelf: 'center',
        width: 280,
        height: 280,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 7,
        paddingLeft: 20,
        borderColor: Colors.grey,
        fontFamily: Fonts.regular,
        verticalAlign: 'top',
    },
    touch: {
        marginTop: 40,
        elevation: 7,
    },
    btntxt: {
        fontSize: 14,
        fontFamily: Fonts.medium,
        color: Colors.white,
    },
});
