import { View, Text, Switch, ScrollView, Button, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./SafeChild.style";
import SafeChildDevicesContainer from "../../components/safeChildDevicesContainer/SafeChildDevicesContainer";
import * as Location from "expo-location";
import { getDistance, getPreciseDistance } from "geolib";
import axios from "axios";

const SafeChild = ({ route }) => {
  const { data } = route.params;
  const [initialLocation, setInitialLocation] = useState({
    coords: {
      accuracy: 24.940620582782653,
      altitude: 46.58914566040039,
      altitudeAccuracy: 4.18025541305542,
      heading: -1,
      latitude: 31.972288252154485,
      longitude: 34.7609471008618,
      speed: -1,
    },
    timestamp: 1678822979401.422,
  });
  const [location, setLocation] = useState(null);

  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      getLocation();
    }, 5000);

    setIntervalId(id);

    return () => clearInterval(id);
  }, []);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    console.log("location", location);
    var distance = calculateDistance(
      initialLocation.coords.latitude,
      initialLocation.coords.longitude,
      location.coords.latitude,
      location.coords.longitude
    );

    console.log("distance:", distance);
    if (distance > 0.01) {
      Alert.alert(
        "safe chiled mode",
        "Did you went outside? do you want to turn off all the registerd devices in safe chiled mode?",
        [
          {
            text: "No",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => {
              axios
                .get(
                  `http://192.168.1.251:9464/workshop/mainScreen/clickedOnExitAreaButton`
                )
                .then((response) => {
                  setData(response.data);
                });
            },
          },
        ]
      );
      clearInterval(intervalId);
    }
  };
  function calculateDistance(lattitude1, longittude1, lattitude2, longittude2) {
    const toRadian = (n) => (n * Math.PI) / 180;

    let lat2 = lattitude2;
    let lon2 = longittude2;
    let lat1 = lattitude1;
    let lon1 = longittude1;

    console.log(lat1, lon1 + "===" + lat2, lon2);
    let R = 6371; // km
    let x1 = lat2 - lat1;
    let dLat = toRadian(x1);
    let x2 = lon2 - lon1;
    let dLon = toRadian(x2);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadian(lat1)) *
        Math.cos(toRadian(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    console.log("distance==?", d);
    return d;
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
