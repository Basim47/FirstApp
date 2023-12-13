import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Progress from 'react-native-progress';

const Catg = ({ navigation }) => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [uploadProgress, setuploadProgress] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            setisLoading(true);
            try {
                const response = await fetch(
                    'https://fakestoreapi.com/products/categories',
                );
                const data = await response.json();
                const progress = response;
                setuploadProgress(progress);
                setCategories(data);
                setisLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCategoryPress = category => {
        navigation.navigate('Details', { category });
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
                        <Text style={styles.headtext}>- Categories -</Text>
                    </View>
                    <View>
                        <FlatList
                            data={categories}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.categoryItem}>
                                    <TouchableOpacity onPress={() => handleCategoryPress(item)}>
                                        <Text style={styles.title}>{item}</Text>
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

export default Catg;

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
        fontSize: 28,
        color: '#fff',
        fontFamily: 'Nunito-Bold',
        textAlign: 'center',
    },
    listview: {
        flex: 1,
    },
    categoryItem: {
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 5,
        borderRadius: 10,
        elevation: 7
    },
    title: {
        fontSize: 20,
        color: '#333',
        fontFamily: 'Nunito-Regular',
    },
});
