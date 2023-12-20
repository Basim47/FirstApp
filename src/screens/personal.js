import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
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
// toptab
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
// 
import Personal2 from './personal2';
import Story from './story';


const Tab = createMaterialTopTabNavigator();
const Personal = ({ navigation }) => {
    const themeMode = useSelector(state => state.theme.mode);
    return (
        <ScrollView showsVerticalScrollIndicator={false}
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
            <View style={{}}>
                <Tab.Navigator

                    screenOptions={() => ({
                        tabBarActiveTintColor: 'white',
                        tabBarIndicatorStyle: {
                            backgroundColor: themeMode.Tab,
                            height: 1,
                            width: 1,

                        },
                        tabBarScrollEnabled: false,
                        tabBarLabelStyle: { fontSize: 12, },
                        tabBarItemStyle: { width: 150, },
                        tabBarStyle: {
                            height: 40,
                            backgroundColor: themeMode.Tab,
                            marginTop: 40,
                            borderRadius: 50,
                            width: '80%',
                            alignSelf: 'center',
                        },
                    })}
                >
                    <Tab.Screen name="Personal Preferences" component={Personal2}
                    />
                    <Tab.Screen name="Add Story" component={Story} />
                </Tab.Navigator>
            </View >
        </ScrollView >
    );
};

export default Personal;

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
});
