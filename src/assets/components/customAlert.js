import { StyleSheet, Text, View, } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../colors/colors';
import Fonts from '../fonts/fonts';

const CustomAlert = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, 3000); // 3-second timeout

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <View style={isVisible ? styles.alertContainer : styles.hiddenContainer}>
            {isVisible && (
                <View style={styles.alertContent}>
                    <Text style={styles.alertText}>{message}</Text>
                </View>
            )}
            {/* Optional close button */}
        </View>
    )
}

export default CustomAlert

const styles = StyleSheet.create({
    alertContainer: {
        width: '100%',
        height: 70,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.skin,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    hiddenContainer: {
        position: 'absolute',
        top: -100, // Hide off-screen
    },
    alertContent: {
        padding: 15,
        borderRadius: 5,
    },
    alertText: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: Fonts.regular
    },
})