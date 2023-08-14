import { View, Text, Alert, Switch } from "react-native";
import React, { useState } from "react";
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
  const hideInvalidConsumption = () => {
    console.log("yuval");
    setShowInvalidConsumption(false);
  };

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
        onPress={() => {
          setShowInvalidConsumption(true); // Show the InvalidConsumptionComponent
        }}
        style={styles.button}
        textStyle={styles.buttonText}
        status="success"
        size="medium"
      >
        Sample consumption
      </Button>

      {showInvalidConsumption && (
        <InvalidConsumptionComponent
          index={indexInvalid}
          onHide={hideInvalidConsumption}
        />
      )}
    </View>
  );
};

export default Settings;
