import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import MapView, { Marker, Circle, Polyline } from 'react-native-maps';
//Icons
import Icon from 'react-native-vector-icons/EvilIcons';
//Permissions
import { locationPermissionHandler } from '../utils/permissionHandler';
import { useSelector } from 'react-redux';

const Maps = ({ navigation }) => {
  const [coords, setcoords] = useState({});
  const themeMode = useSelector(state => state.theme.mode);
  const mapRef = useRef();
  const origin = { latitude: 28.421129, longitude: 70.278874 }

  const markers = [
    {
      id: 1,
      latlng: {
        latitude: 28.421129,
        longitude: 70.278874,
      },
      img: require('../assets/images/yujidp.png'),
      title: 'Yuji',
      des: 'test description',
    },
    {
      id: 2,
      latlng: {
        latitude: 28.421257,
        longitude: 70.298815,
      },
      img: require('../assets/images/mahidp.png'),
      title: 'Mahito',
      des: 'test description',
    },
    {
      id: 3,
      latlng: {
        latitude: 28.442129,
        longitude: 70.298815,
      },
      img: require('../assets/images/nanadp.png'),
      title: 'Nanami',
      des: 'test description',
    },
    {
      id: 4,
      latlng: {
        latitude: 28.431215,
        longitude: 70.298891,
      },
      img: require('../assets/images/gojodp.png'),
      title: 'Gojo',
      des: 'test description',
    },
    {
      id: 5,
      latlng: {
        latitude: 28.431157,
        longitude: 70.278874,
      },
      img: require('../assets/images/getodp.png'),
      title: 'Geto',
      des: 'test description',
    },
  ];

  const handleDragEnd = latlong => {
    mapRef?.current?.animateCamera({
      center: latlong,
      heading: 10,
      pitch: 2,
      altitude: 300,
      zoom: 15,
    });
  };

  useEffect(() => {
    locationPermissionHandler();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: themeMode.background }}>

      <MapView
        ref={mapRef}
        initialRegion={{
          latitude: 28.421157,
          longitude: 70.298874,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          width: '100%',
          height: '100%',
          borderWidth: 2,
        }}>

        <Polyline
          coordinates={[
            { latitude: 28.421257, longitude: 70.298815 },
            { latitude: 28.421129, longitude: 70.278874 },
            { latitude: 28.431157, longitude: 70.278874 },
            { latitude: 28.431215, longitude: 70.298891 },
            { latitude: 28.442129, longitude: 70.298815 },
          ]}
          strokeColor="rgba(48, 115, 217,0.7)"
          strokeWidth={6}
        />
        <Circle
          center={origin}
          radius={800}
          strokeWidth={2}
          strokeColor="#000"
          fillColor="rgba(48, 115, 217,0.2)"
        />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            draggable
            onDragEnd={e => {
              handleDragEnd(e.nativeEvent.coordinate);
            }}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.des}></Marker>
        ))}
      </MapView>
      <View
        style={{
          width: '100%',
          height: 45,
          backgroundColor: themeMode.background,
          flexDirection: 'row',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderBottomColor: themeMode.text,
          borderBottomWidth: 2,
          borderRightWidth: 1,
          borderLeftWidth: 1,
          paddingHorizontal: 20,
          position: 'absolute',
          flexDirection: 'row'
        }}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'Nunito-Bold',
            color: themeMode.text,
            marginLeft: 10
          }}>
          Location
        </Text>
        <TouchableOpacity style={{
          width: 40,
          height: 40,
          position: 'absolute',
          marginLeft: 300,
          marginTop: 7
        }}
          onPress={() => navigation.openDrawer()}>
          <Icon name={'navicon'} size={30} color={themeMode.text} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: 50,
          height: 180,
          backgroundColor: themeMode.primary,
          borderRadius: 40,
          borderWidth: 1,
          borderColor: themeMode.input,
          padding: 7,
          position: 'absolute',
          marginLeft: 10,
          marginTop: 280,
          justifyContent: 'space-evenly'
        }}>

        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            backgroundColor: themeMode.input,
            elevation: 5,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name={'search'} size={30} color={themeMode.background} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            backgroundColor: themeMode.input,
            elevation: 5,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name={'location'} size={30} color={themeMode.background} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            backgroundColor: themeMode.input,
            elevation: 5,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name={'navicon'} size={30} color={themeMode.background} />
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({});
