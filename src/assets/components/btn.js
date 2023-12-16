import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
//Colors
import Colors from '../colors/colors'

const Btn = ({ children }) => {
    return (
        <View style={styles.btn}>
            {children}
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
        justifyContent: 'center',
        alignItems: "center"
    }
})