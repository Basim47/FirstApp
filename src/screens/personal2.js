import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { PagerView } from 'react-native-pager-view'
import firestore from '@react-native-firebase/firestore';
import Colors from '../assets/colors/colors';
import Fonts from '../assets/fonts/fonts';
import * as Progress from 'react-native-progress';

const Personal2 = () => {
    const [screens, setScreens] = useState([]);
    const themeMode = useSelector(state => state.theme.mode);
    const [isLoading, setisLoading] = useState(false);
    const [uploadProgress, setuploadProgress] = useState(0);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            setisLoading(true);
            try {
                const data = await firestore().collection('stories').get();
                setScreens(data.docs.map((doc) => ({ key: doc.id, ...doc.data() })));
                const progress = screens;
                setuploadProgress(progress);
                setisLoading(false);
            } catch (error) {
                console.error('Error')
            }
        };

        fetchData();
    }, []);

    const handleNext = () => {
        setIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrev = () => {
        setIndex((prevIndex) => prevIndex - 1);
    };

    return (
        <View style={styles.container}>
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
                <>
                    <PagerView
                        style={styles.pagerView}
                        initialPage={0}
                        onPageSelected={(event) => setIndex(event.nativeEvent.position)}
                    >
                        {screens.map((screen) => (
                            <View key={screen.key} style={styles.page}>
                                <Text>{screen.title}</Text>
                                <Text>{screen.story}</Text>
                            </View>
                        ))}
                    </PagerView>
                    <View style={styles.buttonContainer}>
                        <Button title="Previous" onPress={handlePrev} />
                        <Button title="Next" onPress={handleNext} />
                    </View>
                </>
            )}
        </View>
    );
};

export default Personal2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pagerView: {
        flex: 1,
    },
    barview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
});
