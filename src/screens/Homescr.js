import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Homescr = ({ navigation }) => {
    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = await AsyncStorage.getItem('userId');
                if (userId) {
                    const userDocument = await firestore()
                        .collection('user')
                        .doc(userId)
                        .get();
                    if (userDocument.exists) {
                        setUserData({ ...userDocument.data(), documentId: userDocument.id });
                    } else {
                        Alert.alert('Error', 'User data not found in Firestore');
                    }
                } else {
                    Alert.alert('Error', 'No user identifier found');
                }
            } catch (error) {
                Alert.alert('Error', 'Error fetching user data:');
            }
        };
        fetchUserData();
    }, []);

    const handleUpdateName = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId');
            await firestore().collection('user').doc(userId).update({
                fullname,
            });
        } catch (err) {
            Alert.alert('Error', 'Data not Updated');
        }
    };

    const handleUpdateEmail = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId');
            await firestore().collection('user').doc(userId).update({
                email,
            });
        } catch (err) {
            Alert.alert('Error', 'Data not Updated');
        }
    };

    const handleUpdatePass = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId');
            await firestore().collection('user').doc(userId).update({
                password,
            });
        } catch (err) {
            Alert.alert('Error', 'Data not Updated');
        }
    };

    const handleDeleteAccount = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId');
            await firestore().collection('user').doc(userId).delete();

            navigation.navigate('Signup');
        } catch (err) {
            Alert.alert('Error', 'Data not Deleted');
        }
    };

    return (
        <View style={styles.mainwrapper}>
            {userData ? (
                <>
                    <View
                        style={{
                            width: '100%',
                            height: 120,
                        }}>
                        <Text style={styles.headtxt}>Personal Info!</Text>
                    </View>
                    <View>
                        <Text style={styles.placeholder}>Full Name :</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                            }}>
                            <TextInput
                                style={styles.inputs}
                                placeholder={userData.fullname}
                                placeholderTextColor={'#343148FF'}
                                onChangeText={text => setfullname(text)}
                                value={fullname}
                            />
                            <TouchableOpacity
                                onPress={handleUpdateName}
                                style={styles.touchable}>
                                <Text style={styles.btntxt}>Update</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.placeholder}>Email :</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                            }}>
                            <TextInput
                                style={styles.inputs}
                                placeholder={userData.email}
                                placeholderTextColor={'#343148FF'}
                                keyboardType='email-address'
                                onChangeText={text => setemail(text)}
                                value={email}
                            />
                            <TouchableOpacity
                                onPress={handleUpdateEmail}
                                style={styles.touchable}>
                                <Text style={styles.btntxt}>Update</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.placeholder}>Password :</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                            }}>
                            <TextInput
                                style={styles.inputs}
                                placeholder={userData.password}
                                placeholderTextColor={'#343148FF'}
                                keyboardType='visible-password'
                                onChangeText={text => setpassword(text)}
                                value={password}
                            />
                            <TouchableOpacity
                                onPress={handleUpdatePass}
                                style={styles.touchable}>
                                <Text style={styles.btntxt}>Update</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                        style={styles.navtouchable}>
                        <Text style={styles.btntxt}>Done</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleDeleteAccount}
                        style={styles.deltouchable}>
                        <Text style={styles.deltxt}>Delete</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <Text style={styles.loadingtxt}>Loading User Data...</Text>
            )}
        </View>
    );
};

export default Homescr;

const styles = StyleSheet.create({
    mainwrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#343148FF',
    },
    headtxt: {
        textAlign: 'center',
        fontSize: 34,
        fontFamily: 'Grandista',
        color: '#D7C49EFF'
    },
    placeholder: {
        color: '#D7C49EFF',
        fontSize: 14,
        fontFamily: 'Nunito-Regular',
        marginLeft: 10,
        marginTop: 5
    },
    inputs: {
        width: 220,
        height: 40,
        margin: 10,
        backgroundColor: '#FAF9F6',
        paddingLeft: 14,
        borderRadius: 10,
        color: '#343148FF',
        elevation: 7,
    },
    touchable: {
        width: 90,
        height: 40,
        backgroundColor: '#D7C49EFF',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 4,
        elevation: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btntxt: {
        fontSize: 16,
        fontFamily: 'Nunito-Bold',
        color: '#343148FF',
    },
    navtouchable: {
        width: 160,
        height: 40,
        backgroundColor: '#D7C49EFF',
        borderRadius: 20,
        marginVertical: 10,
        elevation: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deltouchable: {
        width: 160,
        height: 40,
        backgroundColor: '#8c180f',
        borderRadius: 20,
        marginVertical: 10,
        elevation: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deltxt: {
        fontSize: 16,
        fontFamily: 'Nunito-Bold',
        color: '#fff',
    },
    loadingtxt: {
        textAlign: 'center',
        fontSize: 26,
        fontFamily: 'Grandista',
        color: '#D7C49EFF',
        letterSpacing: 1,
    }
});
