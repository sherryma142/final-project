import { View, Text, Switch, ScrollView, Button, Alert } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import styles from "./SafeChild.style";
import SafeChildDevicesContainer from "../../components/safeChildDevicesContainer/SafeChildDevicesContainer";
import * as Location from "expo-location";
import { getDistance, getPreciseDistance } from "geolib";
import axios from "axios";
import { State } from "react-native-gesture-handler";
import GPSComponent from "../../components/GPSComponent/GPSComponent";

const SafeChild = ({ route }) => {
  const [isPress, setIsPress] = useState(false);
 
  const { data } = route.params;
  console.log("safe app" ,data)


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Safe Child</Text>
        <Text style={styles.labelsStyle}>Choose devices: </Text>
        <View style={styles.container}>
          <SafeChildDevicesContainer listOfItems={data} />
        </View>
        <View>
          <Button
            title="Connect devices to safe child mode"
            color="green"
            onPress={() => {
              console.log("press");
              console.log(route);
              setIsPress(true);
            }}
          />
          {isPress && <GPSComponent route={route} />}
        </View>
      </ScrollView>
    </View>
  );
};

export default SafeChild;
