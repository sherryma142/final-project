import { View, Text, Alert, Switch } from "react-native";
import React, { useState } from "react";
import styles from "./Settings.style";
import {
  Button as ButtonKitten,
  BottomNavigation,
} from "@ui-kitten/components";
import axios from "axios";

import InvalidConsumptionComponent from "../../components/InvalidConsumptionComponent/InvalidConsumptionComponent";

const Settings = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [ind, setIndex] = useState(0);
  const [isNotEmpty,setIsNotEmpty] = useState(true);

  const toggleRememberPin = () => {
    setIsEnabled((previousState) => !previousState);
    console.log(isEnabled);
  };

  return (
    <View style={styles.container}>
      <ButtonKitten
        onPress={() =>
          axios
            .get(`http://35.169.65.234:9464/workshop/mainScreen/close_app`)
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
        size="medium"
      >
        sleep
      </ButtonKitten>

      <ButtonKitten
        onPress={() =>
          axios
            .get(`http://35.169.65.234:9464/workshop/mainScreen/close_app`)
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
         style={styles.Button}
         size="medium"
         onPress={() => navigation.navigate("RealHome")}
      >
        Real Simulation
      </ButtonKitten>
      {/* <Switch
        trackColor={{ false: "red", true: "green" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        onValueChange={toggleRememberPin}
        value={isEnabled}
        style={styles.switch}
      /> */}
      {/* <Text style={styles.item_name}>simulate mode</Text> */}

      <ButtonKitten
        onPress={() =>
          axios
            .get(
              `http://35.169.65.234:9464/workshop/mainScreen/SimulateInvalidElectricityConsumption`
            )
            .then((response) => {
              console.log("response index :",response.data);
              // setIndex(response.data);
              // console.log("index from settings " , ind );
              Alert.alert("simulate", "simulate consumption success", [
                {
                  text: "OK",
                  onPress: () => navigation.navigate("Home",{index: response.data}),
                },
              ]);
            })
            .catch((e) => {
              console.log(e);
            })
        }
        style={styles.button}
        size="medium"
      >
        simulate invalid electricity consumption
      </ButtonKitten>

      <ButtonKitten
            onPress={() => {
          

            }}
            style={styles.Button}
            size="medium"
           
          >
            Sample consamption

          </ButtonKitten>
          {
                isNotEmpty && <InvalidConsumptionComponent indexes={0} />
              } 
    </View>
  );
};

export default Settings;
