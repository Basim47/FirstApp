import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//
import Personal2 from './personal2';
import Story from './story';

const Tab = createMaterialTopTabNavigator();
const Personal = ({ navigation }) => {
    const themeMode = useSelector(state => state.theme.mode);
    return (
        <View
            showsVerticalScrollIndicator={false}
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
            <View
                style={[styles.mainwrapper, { backgroundColor: themeMode.background }]}>
                <Tab.Navigator
                    screenOptions={() => ({
                        tabBarActiveTintColor: Colors.black,
                        tabBarInactiveTintColor: themeMode.text,
                        swipeEnabled: false,
                        tabBarItemStyle: { width: 180 },
                        tabBarStyle: {
                            height: 35,
                            backgroundColor: themeMode.Tab,
                            marginTop: 30,
                            marginBottom: 10,
                            borderRadius: 50,
                            width: '80%',
                            alignSelf: 'center',
                        },
                        tabBarAndroidRipple: { color: "rgba(216, 223, 237, 0)", borderless: true },
                    })}>
                    <Tab.Screen
                        name="Personal Preferences"
                        component={Personal2}
                        options={{
                            tabBarIndicatorStyle: {
                                backgroundColor: Colors.white,
                                height: 25,
                                width: 155,
                                position: 'absolute',
                                top: 5,
                                left: 5,
                                marginBottom: 10,
                                borderRadius: 50,
                                elevation: 7,
                            },
                            tabBarLabelStyle: {
                                fontSize: 10,
                                position: 'relative',
                                bottom: 6,
                                right: 10,
                                fontFamily: Fonts.medium,
                            },
                        }}
                    />
                    <Tab.Screen
                        name="Add Story"
                        component={Story}
                        options={{
                            tabBarIndicatorStyle: {
                                backgroundColor: Colors.white,
                                height: 25,
                                width: 85,
                                position: 'absolute',
                                top: 5,
                                left: 18,
                                marginBottom: 10,
                                borderRadius: 50,
                                elevation: 7,
                            },
                            tabBarLabelStyle: {
                                fontSize: 10,
                                position: 'relative',
                                bottom: 6,
                                right: 28,
                                fontFamily: Fonts.medium,
                            },
                        }}
                    />
                </Tab.Navigator>
            </View>
        </View>
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
