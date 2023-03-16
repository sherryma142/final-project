import { View, Text, Switch, ScrollView, Button, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./SafeChild.style";
import SafeChildDevicesContainer from "../../components/safeChildDevicesContainer/SafeChildDevicesContainer";
import * as geolib from "geolib";
import * as Location from 'expo-location';

const SafeChild = ({ route }) => {
  const { data } = route.params;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [initialLocation, setInitialLocation] = useState(null);


  const [location, setLocation] = useState(null);

  useEffect(() => {
    // request permission to access location
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      // start listening for location updates
      let interval = setInterval(async () => {
        let { coords } = await Location.getCurrentPositionAsync({});
        setLocation(coords);
        console.log(location.latitude)
      }, 5000);

      // stop listening for location updates when component unmounts
      return () => clearInterval(interval);
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       Alert.alert("Permission to access location was denied");
  //       return;
  //     }

  //     let initialLocation = await Location.getCurrentPositionAsync({});
  //     setInitialLocation(initialLocation);
  //     console.log(initialLocation);
  //     setLocation(initialLocation);

  //     let watchId = Location.watchPositionAsync(
  //       {
  //         accuracy: Location.Accuracy.Low,
  //         timeInterval: 2000,
  //         distanceInterval: 0.5, // distance interval in meters
  //       },
  //       (newLocation) => {
  //         let distance = geolib.getDistance(
  //           newLocation.coords,
  //           initialLocation
  //         );

  //         if (distance > 0.5) {
  //           setLocation(newLocation);
  //           console.log(`You are ${distance} meters away from initialLocation`);

  //           console.log(location);
  //           console.log(
  //             `${location.coords.latitude}, ${location.coords.longitude}`
  //           );
  //           // Do something with the new location
  //         } else {
  //           console.log(distance);
  //         }
  //       }
  //     );

  //     return () => {
  //       Location.clearWatch(watchId);
  // //     };
  // //   })();
  // // }, []);
  // // const EARTH_RADIUS = 6371; // Earth's radius in km

  // function calculateDistance(lat1, lon1, lat2, lon2) {
  //   const dLat = (lat2 - lat1) * (Math.PI / 180);
  //   const dLon = (lon2 - lon1) * (Math.PI / 180);

  //   const a =
  //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //     Math.cos(lat1 * (Math.PI / 180)) *
  //       Math.cos(lat2 * (Math.PI / 180)) *
  //       Math.sin(dLon / 2) *
  //       Math.sin(dLon / 2);

  //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  //   const distance = EARTH_RADIUS * c; // Distance in km
  //   const distanceMeters = distance * 1000; // Distance in meters
  //   return distanceMeters;
  // }
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
