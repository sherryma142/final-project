import styles from "./Details.style";
import React, { useState, useRef } from "react";
import constants from "../../constants/itemTypes";
import axios from "axios";

import {
  TextInput,
  Text,
  View,
  NavigationContainer,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

export const Details = ({ route, navigation }) => {
  const { index } = route.params;
  const [data, setData] = useState([]);
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [status, setStatusData] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false); // Initialize with default value

  React.useEffect(() => {
    axios
      .get(
        `http://35.169.65.234:9464/workshop/mainScreen/getPlugInfo?i_UiIndex=${index}`
      )
      .then((response) => {
        setData(response.data);
        setIsEnabled(response.data["status:"] === "on"); // Update isEnabled here
      });
  }, []);



  const toggleRememberPin = () => {
    console.log("degdegbedht");
    if (data["type:"] === "fridge" && isEnabled) {
      Alert.alert(
        "Fridge Alert",
        "Be sure to take all products out of the refrigerator before turning it off.",
        [
          {
            text: "OK",
            onPress: () => {
              // Turn off fridge
              axios
                .get(
                  `http://35.169.65.234:9464/workshop/plugMediator/flipPlugModeAccordingToIndex?i_UiIndex=${index}`
                )
                .then(() => {
                  setIsEnabled(false);
                });
            },
          },
          {
            text: "Cancel",
            onPress: () => {},
          },
        ]
      );
    } else {
      console.log("on off");
      axios
        .get(
          `http://35.169.65.234:9464/workshop/plugMediator/flipPlugModeAccordingToIndex?i_UiIndex=${index}`
        )
        .then(() => {
          console.log("prevState", isEnabled);
          if (isEnabled) {
            setIsEnabled(false);
          } else {
            setIsEnabled(true);
          }
          console.log("isEnabled", isEnabled);
        });
    }

    if (!timerStarted && !isEnabled && data["type:"] != "fridge") {
      console.log("starting timer");
      setTimerStarted(true);
      const id = setTimeout(() => {
        // timer expired, show popup to turn off the device
        setTimerExpired(true);
        Alert.alert(
          "Device turn off",
          "The device has been on for 10 seconds. Do you want to turn it off?",
          [
            {
              text: "Cancel",
              onPress: () => {},
            },
            {
              text: "OK",
              onPress: () => {
                  axios
                    .get(
                      `http://35.169.65.234:9464/workshop/plugMediator/flipPlugModeAccordingToIndex?i_UiIndex=${index}`
                    )
                    .then((response) => {
                      setIsEnabled(false);
                      setTimerExpired(false);

                      navigation.navigate("Home", { refresh: true }); // Pass a refresh param

                    });
              },
              

            },
          ]
        );
      }, 10000);
      setTimerId(id);
    } else if (timerStarted && !isEnabled) {
      // cancel the timer if it has already b
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.header}>Device details</Text>

          <Text style={styles.labelsStyle2}>device on/off:</Text>
          <View style={{ paddingTop: 10, paddingBottom: 10 }}>
            <TouchableOpacity onPress={toggleRememberPin}>
              <View
                style={{
                  width: 60,
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: isEnabled ? "green" : "red",
                  justifyContent: "center",
                  alignItems: isEnabled ? "flex-end" : "flex-start",
                  paddingHorizontal: 5,
                }}
              >
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    backgroundColor: "white",
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.labelsStyle}>device Name:</Text>
          <Text style={styles.labelsStyle}>{data["title:"]}</Text>
          <Text style={styles.labelsStyle}>Device type:</Text>
          <Text style={styles.labelsStyle}>{data["type:"]}</Text>
          <Text style={styles.labelsStyle}>Image:</Text>
          <Image
            source={constants.IMAGES[constants.TYPES[data["type:"]]]}
            style={{
              width: 80,
              height: 80,
              resizeMode: "contain",
              marginTop: -20,
              marginLeft: 200,
              marginBottom: 15,
            }}
          />
          <Text style={styles.labelsStyle}>Normal power consumption:</Text>
          <Text style={[styles.labelsStyle]}>
            {data["min electricity volt:"]}
          </Text>

          <Text style={styles.labelsStyle}>Improper power consumption:</Text>
          <Text style={[styles.labelsStyle]}>
            {data["max electricity volt:"]}
          </Text>

          <Button
            title="REMOVE DEVICE"
            color="red"
            onPress={() => {
              console.log("remove:" + index);
              axios
                .delete(
                  `http://35.169.65.234:9464/workshop/mainScreen/RemoveExistPlug?i_UiIndex=${index}`
                )
                .then((response) => {
                  //console.log("after delete", response);
                  Alert.alert("Device delete", "Device deleted succesfuly", [
                    {
                      text: "OK",
                      onPress: () => navigation.navigate("Home"),
                    },
                  ]);
                })
                .catch((error) => {
                  //console.log("after delete", response)
                  console.log("error delete", error);
                });
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Details;
