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
import { useIsFocused } from "@react-navigation/native"; // Import useIsFocused

const SafeChild = ({ route }) => {
  const [isPress, setIsPress] = useState(false);
  const [data, setData] = useState([]);
  const [isRegisterdNotEmpty, setIsRegisteredNotEmpty] = useState(false);

  const isFocused = useIsFocused();
  const [refreshing, setRefreshing] = useState(false);

  React.useEffect(() => {
    if (route.params && route.params.refresh) {

      console.log("refresh")
      refreshData();
    }
  }, [route.params]);

  const refreshData = () => {
    setRefreshing(true);
    // Fetch the data again and update the state
    axios
      .get("http://35.169.65.234:9464/workshop/mainScreen/GetTotalConnectedPlugsFromMainScreen")
      .then((response) => {
        const newData = response.data.filter(
          (object) => object.type !== "fridge"
        );
        newData.sort((a, b) => parseInt(a.index) - parseInt(b.index));
        setData(newData);
        setRefreshing(false);
      });

      axios
        .get(
          "http://35.169.65.234:9464/workshop/mainScreen/checkRegisteredPlugsToSafeMode"
        )
        .then((response) => {
          console.log("registered data: ", response.data)
          setIsRegisteredNotEmpty(Object.keys(response.data).length > 0);

        })
  };

  useEffect(() => {
    if (isFocused) {

      console.log("safe child is press:", isPress)
      axios
        .get(
          "http://35.169.65.234:9464/workshop/mainScreen/GetTotalConnectedPlugsFromMainScreen"
        )
        .then((response) => {
          const newData = response.data.filter(
            (object) => object.type !== "fridge"
          );
          newData.sort((a, b) => parseInt(a.index) - parseInt(b.index));
          setData(newData);
        });
        setIsPress(false);
        axios
        .get(
          "http://35.169.65.234:9464/workshop/mainScreen/checkRegisteredPlugsToSafeMode"
        )
        .then((response) => {
          console.log("registered data: ", response.data)
          setIsRegisteredNotEmpty(Object.keys(response.data).length > 0);

        })
    }
  }, [isFocused]);

  const handleConnectPress = () => {
    setIsPress(true);
  };

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
            onPress={handleConnectPress}
            disabled={!isRegisterdNotEmpty}
          >
            Connect devices to safe child mode
          </Button>
          {isPress && <GPSComponent isPress={isPress}/>}
        </View>
      </ScrollView>
    </View>
  );
};

export default SafeChild;
