import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Progress from 'react-native-progress';

const CatDtl = ({ route, navigation }) => {
    const { category } = route.params;
    const [products, setProducts] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [uploadProgress, setuploadProgress] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            setisLoading(true);
            try {
                const response = await fetch(
                    `https://fakestoreapi.com/products/category/${category}`,
                );
                const data = await response.json();
                setProducts(data);
                const progress = response;
                setuploadProgress(progress);
                setisLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleProductPress = product => {
        navigation.navigate('Products', { product });
    };

    return (
        <View style={styles.container}>
            {isLoading ? (
                <View style={styles.barview}>
                    <Progress.CircleSnail
                        progress={uploadProgress}
                        size={50}
                        color="#8b8b8c"
                        thickness={5}
                    />
                </View>
            ) : (
                <View style={styles.listview}>
                    <View style={styles.header}>
                        <Text style={styles.headtext}>Products in {category}</Text>
                    </View>
                    <View>
                        <FlatList
                            data={products}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.productItem}>
                                    <TouchableOpacity onPress={() => handleProductPress(item)}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Image
                                                source={{ uri: item.image }}
                                                style={styles.img}
                                                resizeMode='contain'
                                            />
                                            <View style={{ flexDirection: 'column', width: 185, marginLeft: 10, }}>
                                                <Text style={styles.productTitle}>{item.title}</Text>
                                                <Text style={styles.productPrice}>
                                                    Price: {item.price} $
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    </View>
                </View>
            )}
        </View>
    );
};

export default CatDtl;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    barview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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

    listview: {
        width: '100%',
        height: '93%',
    },
    productItem: {
        width: '95%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 7,
    },
    productTitle: {
        fontSize: 14,
        color: '#333',
        fontFamily: 'Nunito-Medium',
    },
    productPrice: {
        fontSize: 12,
        color: '#333',
        fontFamily: 'Nunito-Regular',
        marginVertical: 10,
    },
    img: {
        width: 120,
        height: 100
    }
});
