import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
// Redux
import { useSelector } from 'react-redux';
// Components
import Colors from '../assets/colors/colors';
import Fonts from '../assets/fonts/fonts';
// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import * as Progress from 'react-native-progress';
import Snackbar from 'react-native-snackbar';

const Preference = ({ navigation }) => {
    const themeMode = useSelector(state => state.theme.mode);
    const [categories, setCategories] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [uploadProgress, setuploadProgress] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            setisLoading(true);
            try {
                const snapshot = await firestore().collection('subCat').get();
                const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                const progress = data;
                setuploadProgress(progress);
                setCategories(data);
                setisLoading(false);
            } catch (error) {

                Snackbar.show({
                    text: 'Error fetching sub-categories!',
                    fontFamily: Fonts.medium,
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: Colors.skin,
                    marginBottom: 680
                })
            }
        };

        fetchData();
    }, []);


    return (
        <View
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
                    Preferences
                </Text>
            </View>
            {isLoading ? (
                <View style={styles.barview}>
                    <Progress.CircleSnail
                        progress={uploadProgress}
                        size={50}
                        color={Colors.skin}
                        thickness={3}
                    />
                </View>
            ) : (
                <View style={styles.listview}>

                    <View>
                        <FlatList
                            data={categories}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.catrow}>
                                        <View style={[styles.categoryItem, { backgroundColor: themeMode.input }]}>
                                            <TouchableOpacity onPress={() => navigation.navigate("Personal")}>
                                                <View style={styles.catiner}>
                                                    <Text style={[styles.title, { color: themeMode.text }]}>{item.item[0]}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={[styles.categoryItem, { backgroundColor: themeMode.input }]}>
                                            <TouchableOpacity onPress={() => navigation.navigate("Personal")}>
                                                <View style={styles.catiner}>
                                                    <Text style={[styles.title, { color: themeMode.text }]}>{item.item[1]}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.catrow}>
                                        <View style={[styles.categoryItem, { backgroundColor: themeMode.input }]}>
                                            <TouchableOpacity onPress={() => navigation.navigate("Personal")}>
                                                <View style={styles.catiner}>
                                                    <Text style={[styles.title, { color: themeMode.text }]}>{item.item[2]}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={[styles.categoryItem, { backgroundColor: themeMode.input }]}>
                                            <TouchableOpacity onPress={() => navigation.navigate("Personal")}>
                                                <View style={styles.catiner}>
                                                    <Text style={[styles.title, { color: themeMode.text }]}>{item.item[3]}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.catrow}>
                                        <View style={[styles.categoryItem, { backgroundColor: themeMode.input }]}>
                                            <TouchableOpacity onPress={() => navigation.navigate("Personal")}>
                                                <View style={styles.catiner}>
                                                    <Text style={[styles.title, { color: themeMode.text }]}>{item.item[4]}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={[styles.categoryItem, { backgroundColor: themeMode.input }]}>
                                            <TouchableOpacity onPress={() => navigation.navigate("Personal")}>
                                                <View style={styles.catiner}>
                                                    <Text style={[styles.title, { color: themeMode.text }]}>{item.item[5]}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.catrow}>
                                        <View style={[styles.categoryItem, { backgroundColor: themeMode.input }]}>
                                            <TouchableOpacity onPress={() => navigation.navigate("Personal")}>
                                                <View style={styles.catiner}>
                                                    <Text style={[styles.title, { color: themeMode.text }]}>{item.item[6]}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={[styles.categoryItem, { backgroundColor: themeMode.input }]}>
                                            <TouchableOpacity onPress={() => navigation.navigate("Personal")}>
                                                <View style={styles.catiner}>
                                                    <Text style={[styles.title, { color: themeMode.text }]}>{item.item[7]}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.catrow}>
                                        <View style={[styles.categoryItem, { backgroundColor: themeMode.input }]}>
                                            <TouchableOpacity onPress={() => navigation.navigate("Personal")}>
                                                <View style={styles.catiner}>
                                                    <Text style={[styles.title, { color: themeMode.text }]}>{item.item[8]}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={[styles.categoryItem, { backgroundColor: themeMode.input }]}>
                                            <TouchableOpacity onPress={() => navigation.navigate("Personal")}>
                                                <View style={styles.catiner}>
                                                    <Text style={[styles.title, { color: themeMode.text }]}>{item.item[9]}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                            )}
                        />
                    </View>
                </View>
            )}
        </View>
    );
};

export default Preference;

const styles = StyleSheet.create({
    mainwrapper: {
        flex: 1,
        backgroundColor: Colors.blue,
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
        marginHorizontal: 66,
    },
    barview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listview: {
        width: '100%',
        height: 600,
        marginTop: 20,
        paddingHorizontal: 10
    },
    categoryItem: {
        width: 145,
        height: 135,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 13,
        borderRadius: 10,
        elevation: 7
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.bold,
        textAlign: 'center',
        marginTop: 40
    },
    catiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    catrow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});
