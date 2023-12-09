import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
//Auth
import { logout } from '../services/firebaseServices';
//Icon
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

const Out = () => {
    const themeMode = useSelector(state => state.theme.mode);
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: themeMode.background
            }}>
            <TouchableOpacity
                onPress={logout}
                style={{
                    width: 150,
                    height: 50,
                    backgroundColor: themeMode.primary,
                    borderRadius: 30,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    flexDirection: 'row',
                    elevation: 7
                }}>
                <Text
                    style={{
                        fontFamily: 'Nunito-Bold',
                        fontSize: 18,
                        color: themeMode.text,
                    }}>
                    Logout
                </Text>
                <Icon name={'sign-out'} size={22} color={themeMode.text} />
            </TouchableOpacity>
        </View>
    );
};

export default Out;

const styles = StyleSheet.create({});
