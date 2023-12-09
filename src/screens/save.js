import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const Save = () => {
  const themeMode = useSelector(state => state.theme.mode);
  return (
    <View style={{ flex: 1, backgroundColor: themeMode.background }}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Save;

const styles = StyleSheet.create({});
