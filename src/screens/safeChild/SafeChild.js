import { View, Text, Switch, ScrollView, Button, Alert } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import styles from "./SafeChild.style";
import SafeChildDevicesContainer from "../../components/safeChildDevicesContainer/SafeChildDevicesContainer";
import * as Location from "expo-location";
import { getDistance, getPreciseDistance } from "geolib";
import axios from "axios";
import { State } from "react-native-gesture-handler";
import Geolocation from 'react-native-geolocation-service';

const SafeChild = ({ route,navigation }) => {
  const { data } = route.params;

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location to work properly.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission denied');
      }
    }
  };

  const [location, setLocation] = useState(null);
  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      (position) => {
        setLocation(position.coords);
      },
      (error) => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0.2, // minimum distance between updates (in meters)
      },
    );
    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, [])

 
  const homeLocation = { latitude: 37.7749, longitude: -122.4194 }; // replace with your home location
  const distanceFromHome = location ? distance(location, homeLocation) : null; // assumes you have a function called `distance()` that calculates the distance between two points
  if (distanceFromHome && distanceFromHome > 0.2) {
    console.log('User has moved more than 1 meter away from home');
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Safe Child</Text>
        <Text style={styles.labelsStyle}>Choose devices: </Text>
        <View style={styles.container}>
          <SafeChildDevicesContainer listOfItems={data} />
        </View>
        <Button
          title="Connect devices to safe child mode"
          color="green"
          onPress={() => Alert.alert("connect succesfully")}
        />
      </ScrollView>
    </View>
  );
};

export default SafeChild;