import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
//Auth
import { logout } from '../services/firebaseServices';
//Icon
import Icon from 'react-native-vector-icons/FontAwesome';

const Out = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <TouchableOpacity
                onPress={logout}
                style={{
                    width: 150,
                    height: 50,
                    backgroundColor: '#452a80',
                    borderRadius: 30,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                <Text
                    style={{
                        fontFamily: 'Nunito-Bold',
                        fontSize: 18,
                        color: '#fff',
                    }}>
                    Logout
                </Text>
                <Icon name={'sign-out'} size={22} color={'#fff'} />
            </TouchableOpacity>
        </View>
    );
};

export default Out;

const styles = StyleSheet.create({});
