import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./ItemNameSleepMode.style";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

export const ItemNameSleepMode = ({ name, index }) => {
  const [data, setData] = useState();
  const [isEnabled, setIsEnabled] = useState(false);
  const navigation = useNavigation();

  React.useEffect(() => {
    axios
      .get(
        `http://35.169.65.234:9464/workshop/mainScreen/checkIfPlugRegisteredToSleepMode?i_UiIndex=${index}`
      )
      .then((response) => {
        setData(response.data);
        setIsEnabled(data);
      });
  }, []);

  const toggleRememberPin = () => {
    setIsEnabled((previousState) => !previousState);
    console.log(isEnabled);
    !isEnabled
      ? axios
          .get(
            `http://35.169.65.234:9464/workshop/mainScreen/RegisterPlugToSleepMode?i_UiIndex=${index}`
          )
          .then((response) => {
            console.log("added");
            navigation.navigate("SleepMode", { refresh: true });

          })
      : axios
          .delete(
            `http://35.169.65.234:9464/workshop/mainScreen/RemovePlugFromSleepMode?i_UiIndex=${index}`
          )
          .then((response) => {
            console.log("removed");
            setIsEnabled(false);
            navigation.navigate("SleepMode", { refresh: true });
          });
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <View style={{ paddingTop: 10, paddingBottom: 10 }}>
          <TouchableOpacity onPress={toggleRememberPin}>
            <View
              style={{
                width: 60,
                height: 30,
                borderRadius: 20,
                backgroundColor: isEnabled ? "green" : "gray",
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
        <Text style={styles.checkboxLabel}>{name}</Text>
      </View>
    </View>
  );
};

export default ItemNameSleepMode;
