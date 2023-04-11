import { View, Text, Alert, Switch } from "react-native";
import React, { useState } from "react";
import styles from "./Settings.style";
import {
  Button as ButtonKitten,
  BottomNavigation,
} from "@ui-kitten/components";
import axios from "axios";

const Settings = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [ind, setIndex] = useState(0);

  const toggleRememberPin = () => {
    setIsEnabled((previousState) => !previousState);
    console.log(isEnabled);
  };

  return (
    <View style={styles.container}>
      <ButtonKitten
        onPress={() =>
          axios
            .get(`http://192.168.1.184:9464/workshop/mainScreen/close_app`)
            .then((response) => {
              Alert.alert("all devices removed");
            })
            .catch((e) => {
              console.log(e);
            })
        }
        style={styles.button}
        size="medium"
      >
        close all devices
      </ButtonKitten>

      <ButtonKitten
        onPress={() =>
          axios
            .get(
              `http://192.168.1.184:9464/workshop/mainScreen/clickedOnSleepButton`
            )
            .then((response) => {
              Alert.alert("sleep on");
            })
            .catch((e) => {
              console.log(e);
            })
        }
        style={styles.button}
        size="medium"
      >
        sleep
      </ButtonKitten>

      <ButtonKitten
        onPress={() =>
          axios
            .get(`http://192.168.1.184:9464/workshop/mainScreen/close_app`)
            .then((response) => {
              Alert.alert(response.data);
            })
            .catch((e) => {
              console.log(e);
            })
        }
        style={styles.button}
        size="medium"
      >
        closeApp
      </ButtonKitten>
      <ButtonKitten
        onPress={() =>
          axios
            .get(`http://192.168.1.184:9464/workshop/mainScreen/close_app`)
            .then((response) => {
              Alert.alert(response.data);
            })
            .catch((e) => {
              console.log(e);
            })
        }
        style={styles.button}
        size="medium"
      ></ButtonKitten>
      <Switch
        trackColor={{ false: "red", true: "green" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        onValueChange={toggleRememberPin}
        value={isEnabled}
        style={styles.switch}
      />
      <Text style={styles.item_name}>simulate mode</Text>
    </View>
  );
};

export default Settings;
