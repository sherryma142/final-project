import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import styles from "./ItemNameSleepMode.style";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

export const ItemNameSleepMode = ({ name, index }) => {
  const [data, setData] = useState();
  const [isEnabled, setIsEnabled] = useState(false);

  axios
    .get(
      `http://192.168.1.143:9464/workshop/mainScreen/checkIfPlugRegisteredToSleepMode?i_UiIndex=${index}`
    )
    .then((response) => {
      setData(response.data);
      setIsEnabled(data);
    });

  console.log(data);

  const toggleRememberPin = () => {
    setIsEnabled((previousState) => !previousState);
    console.log(isEnabled);
    !isEnabled
      ? axios
          .get(
            `http://192.168.1.143:9464/workshop/mainScreen/RegisterPlugToSleepMode?i_UiIndex=${index}`
          )
          .then((response) => {
            console.log("added");
          })
      : axios
          .delete(
            `http://192.168.1.143:9464/workshop/mainScreen/RemovePlugFromSleepMode?i_UiIndex=${index}`
          )
          .then((response) => {
            console.log("removed");
            setIsEnabled(false);
          });
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Switch
          trackColor={{ false: "red", true: "green" }}
          thumbColor={"#f4f3f4"}
          onValueChange={toggleRememberPin}
          value={isEnabled}
          style={styles.switch}
        />
        <Text style={styles.checkboxLabel}>{name}</Text>
      </View>
    </View>
  );
};

export default ItemNameSleepMode;
