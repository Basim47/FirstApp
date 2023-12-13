import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const Prod = ({ route }) => {
    const { product } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headtext}>Product Details</Text>
            </View>
            <ScrollView>
                <View style={styles.prodview}>
                    <Image
                        source={{ uri: product.image }}
                        style={styles.img}
                        resizeMode='contain' />
                    <Text style={styles.productTitle}>{product.title}</Text>
                    <Text style={styles.productPrice}>Price: {product.price} $</Text>
                    <Text style={styles.productDetails}>Details: {product.description}</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default Prod;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    prodview: {
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 10,
        elevation: 6
    },
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#333',
        justifyContent: 'center',
    },
    headtext: {
        fontSize: 22,
        color: '#fff',
        fontFamily: 'Nunito-Bold',
        textAlign: 'center',
    },
    productTitle: {
        fontSize: 18,
        color: '#333',
        fontFamily: 'Nunito-Bold',
        marginHorizontal: 20,
        marginVertical: 10
    },
    productPrice: {
        fontSize: 16,
        color: '#333',
        fontFamily: 'Nunito-Medium',
        marginVertical: 5,
        marginHorizontal: 20,
    },

    productDetails: {
        fontSize: 16,
        color: '#333',
        fontFamily: 'Nunito-Regular',
        marginVertical: 10,
        marginHorizontal: 20,
        lineHeight: 28,
    },
    img: {
        width: "90%",
        height: 220,
        alignSelf: 'center'
    }
});

