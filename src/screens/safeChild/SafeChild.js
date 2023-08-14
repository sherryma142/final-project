import { View, Text, Switch, ScrollView, Alert } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import styles from "./SafeChild.style";
import SafeChildDevicesContainer from "../../components/safeChildDevicesContainer/SafeChildDevicesContainer";
import * as Location from "expo-location";
import { getDistance, getPreciseDistance } from "geolib";
import axios from "axios";
import { State } from "react-native-gesture-handler";
import GPSComponent from "../../components/GPSComponent/GPSComponent";
import { Button } from "@ui-kitten/components";

const SafeChild = ({ route }) => {
  const [isPress, setIsPress] = useState(false);
  // console.log("safe app" ,data)

  const [data, setData] = useState([]);

  let newData = [];

  axios.get(`http://35.169.65.234:9464/workshop/mainScreen/FetchPlugsFromDB`);

  axios
    .get(`http://35.169.65.234:9464/workshop/mainScreen/SeePlugsAtDB`)
    .then((response) => {
      // console.log(response.data)
      response.data.map((object) => {
        if (object.index != "10") {
          //   console.log(object);
          newData.push(object);
        }
      });
      setData(newData);
    });
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.titleContainer}>
          <Text style={styles.hadder}>Safe Child</Text>
        </View>
        <Text style={styles.labelsStyle}>Choose devices: </Text>
        <View style={styles.container}>
          <SafeChildDevicesContainer listOfItems={data} />
        </View>
        <View>
          <Button
            style={styles.button}
            textStyle={styles.buttonText}
            status="success" // Green background colo
            size="medium"
            onPress={() => {
              //console.log("press");
              //console.log(route);
              setIsPress(true);
            }}
          >
            Connect devices to safe child mode
          </Button>
          {isPress && <GPSComponent route={route} />}
        </View>
      </ScrollView>
    </View>
  );
};

export default SafeChild;
