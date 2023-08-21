import { View, Text, Alert, Switch } from "react-native";
import React, { useState,useEffect } from "react";
import styles from "./Settings.style";
import { Button } from "@ui-kitten/components";

import axios from "axios";

import InvalidConsumptionComponent from "../../components/InvalidConsumptionComponent/InvalidConsumptionComponent";

const Settings = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [ind, setIndex] = useState(0);
  const [isNotEmpty, setIsNotEmpty] = useState(false);
  const [indexInvalid, setIndexInvalid] = useState(-1);
  const [showInvalidConsumption, setShowInvalidConsumption] = useState(false);
  const [isInvalidDevices,setIsInvalidDevices]=useState([]);
  const [alertShown, setAlertShown] = useState(false);

  const hideInvalidConsumption = () => {
    console.log("yuval");
    setShowInvalidConsumption(false);
  };
  const fetchInvalidDevices = () => {
    axios
      .get(
        `http://35.169.65.234:9464/workshop/on_off_screen/getAllInvalidPlugs`
      )
      .then((response) => {
        console.log("in settings", response.data);
        if (response.data) {
          setIsInvalidDevices(response.data);
          setShowInvalidConsumption(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching invalid devices:", error);
      });
  };

  useEffect(() => {
    fetchInvalidDevices(); // Fetch invalid devices when the component mounts
  }, []);

  return (
    <View style={styles.container}>
      <Button
        onPress={() =>
          axios
            .get(
              `http://35.169.65.234:9464/workshop/mainScreen/DeleteAllPlugsFromDB`
            )
            .then((response) => {
              Alert.alert("all devices removed");
            })
            .catch((e) => {
              console.log(e);
            })
        }
        style={styles.button}
        textStyle={styles.buttonText}
        status="success" // Green background colo
        size="medium"
      >
        close all devices
      </Button>

      <Button
        onPress={() =>
          axios
            .get(
              `http://35.169.65.234:9464/workshop/mainScreen/clickedOnSleepButton`
            )
            .then((response) => {
              Alert.alert("sleep on");
            })
            .catch((e) => {
              console.log(e);
            })
        }
        style={styles.button}
        textStyle={styles.buttonText}
        status="success" // Green background colo
        size="medium"
      >
        sleep
      </Button>
      <Button
        onPress={() =>
          axios
            .get(
              `http://35.169.65.234:9464/workshop/mainScreen/SimulateInvalidElectricityConsumption`
            )
            .then((response) => {
              console.log("response index :", response.data);
              setIndexInvalid(response.data);
              Alert.alert("simulate", "simulate consumption success", [
                {
                  text: "OK",
                  onPress: () => {
                    setAlertShown(false); // Hide the alert
                  },
                },
              ]);
            })
            .catch((e) => {
              console.log(e);
            })
            
          
        }
        style={styles.button}
        textStyle={styles.buttonText}
        status="success" // Green background colo
        size="medium"
      >
        simulate invalid electricity consumption
      </Button>

      <Button
        onPress={fetchInvalidDevices} // Fetch invalid devices when the button is pressed
        style={styles.button}
        textStyle={styles.buttonText}
        status="success"
        size="medium"
      >
        Sample consumption
      </Button>
  
      {showInvalidConsumption && isInvalidDevices.length > 0 && (
        <InvalidConsumptionComponent
          index={indexInvalid}
          onHide={hideInvalidConsumption}
          invalidDevices={isInvalidDevices}
          alertShown={alertShown} // Pass alertShown as a prop

        />
      )}
    </View>
  );
};

export default Settings;
