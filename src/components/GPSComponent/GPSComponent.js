import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import * as Location from "expo-location";

// Home location (latitude and longitude) - Replace with your actual home coordinates


 
// rnfe

const GPSComponent = ({ route }) => {
  const { data } = route.params;
  const [fetdata, setData] = useState([]);


    
  const initialLocation = {
    coords: {
      accuracy: 24.940620582782653,
      altitude: 46.58914566040039,
      altitudeAccuracy: 4.18025541305542,
      heading: -1,
      latitude: 31.972288252154485,
      longitude: 34.7609471008618,
      speed: -1,
    },
  };
  const [location, setLocation] = useState(null);

  const intervalRef = useRef(null); // create a mutable reference to the interval ID
  const [isFound, setIsFound] = useState(false);
  useEffect(() => {
    if (!isFound) {
      intervalRef.current = setInterval(() => {
        if (getLocation() === 1) {
          clearInterval(intervalRef.current); // clear the interval using the mutable reference
          setIsFound(true);
        }
      }, 5000);
    }

    return () => clearInterval(intervalRef.current); // clear the interval on unmount using the mutable reference
  }, [isFound]);

  const checkDevicesON = (data) => {
    console.log(data);
    let i = 0;
    for (i = 0; i < data.length; i++) {
      if (data[i].status === "on") {
        return true;
      }
    }
  };
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return 0;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    var distance = calculateDistance(
      initialLocation.coords.latitude,
      initialLocation.coords.longitude,
      location.coords.latitude,
      location.coords.longitude
    );

    console.log("distance:", distance);
    if (distance > 0.5) {
      // add && checkDevicesON(data)
      Alert.alert(
        "safe chiled mode",
        "Did you went outside? do you want to turn off all the registerd devices in safe chiled mode?",
        [
          {
            text: "No",
            onPress: () => {
              console.log("Cancel Pressed");
              //stopMonthChange(intervalId);
            },
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => {
              axios
                .get(
                  `http://35.169.65.234:9464/workshop/mainScreen/clickedOnExitAreaButton`
                )
                .then((response) => {
                  setData(response.data);
                });
            },
          },
        ]
      );
      //setIsFound(true);
      setIsFound(true);
      console.log(isFound);

      return 1;
    } else {
      //setIsFound(false);
      console.log(isFound);

      return 0;
    }

    //stopMonthChange(intervalId);
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
     
  return <View></View>;
}
export default GPSComponent;
