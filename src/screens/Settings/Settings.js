import { View, Text, Alert, Switch } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Settings.style";
import { Button } from "@ui-kitten/components";

import axios from "axios";
import { useIsFocused } from "@react-navigation/native"; // Import useIsFocused

import InvalidConsumptionComponent from "../../components/InvalidConsumptionComponent/InvalidConsumptionComponent";

const Settings = ({ navigation }) => {
  const [indexInvalid, setIndexInvalid] = useState(-1);
  const [showInvalidConsumption, setShowInvalidConsumption] = useState(false);
  const [isInvalidDevices, setIsInvalidDevices] = useState([]);
  const [alertShown, setAlertShown] = useState(false);
  const [data, setData] = useState([]);
  const [deviceName, setDeviceName] = useState("");
  const isFocused = useIsFocused(); // Get the focus status of the screen

  React.useEffect(() => {
    if (isFocused) {
      // Only fetch data when the screen is focused
      axios
        .get(`http://35.169.65.234:9464/workshop/mainScreen/GetTotalConnectedPlugsFromMainScreen`)
        .then((response) => {
          const newData = response.data.filter(
            (object) => object.index !== "10"
          );
          newData.sort((a, b) => parseInt(a.index) - parseInt(b.index));
          setData(newData);
        });
    }
  }, [isFocused]);
  const hideInvalidConsumption = () => {
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
    if (isFocused) {
      fetchInvalidDevices();
    } // Fetch invalid devices when the component mounts
  }, [isFocused]);

  return (
    <View style={styles.container}>
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
              setDeviceName(data[response.data].title);
              Alert.alert(
                "simulate",
                `simulate consumption success. The invalid plug is:${
                  data[response.data].title
                } `,
                [
                  {
                    text: "OK",
                    onPress: () => {
                      setAlertShown(false); // Hide the alert
                    },
                  },
                ]
              );
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
          title={deviceName}
          onHide={hideInvalidConsumption}
          invalidDevices={isInvalidDevices}
          alertShown={alertShown} // Pass alertShown as a prop
        />
      )}

<Button
        onPress={() =>
          axios
            .get(
              `http://35.169.65.234:9464/workshop/mainScreen/safeCloseServer`
            )
            .then((response) => {
              Alert.alert("safe close server success");
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
        safe close server
      </Button>
    </View>
  );
};

export default Settings;
