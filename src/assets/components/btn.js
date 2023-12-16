import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
//Colors
import Colors from '../colors/colors'

const Btn = ({ children }) => {
    return (
        <View style={styles.btn}>
            <TouchableOpacity>
                <View style={styles.inner}>
                    {children}
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Btn

const styles = StyleSheet.create({
    btn: {
        width: '92%',
        height: 45,
        backgroundColor: Colors.skin,
        borderRadius: 8,
        elevation: 5,
        alignSelf: 'center',
    },
    inner: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: "center"
    }
})