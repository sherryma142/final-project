import { View, Text, Switch, ScrollView, Button, Alert } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "./SampleConsumption.style";
import InvalidConsumptionComponent from "../../components/InvalidConsumptionComponent/InvalidConsumptionComponent";
import {
  Button as ButtonKitten,
  BottomNavigation,
} from "@ui-kitten/components";
const SampleConsumption = ({ route }) => {
  const { data } = route.params;
  const { navigation } = route.params;
  const [isPress, setIsPress] = useState(false);
  const [index, setIndex] = useState();
  console.log("length", data.length);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sampling Consumption</Text>
      <Button
        title="start sampling a rendom device consumption..."
        color="green"
        onPress={() => {
         // console.log("press");
          setIsPress(true);
        }}
      />

      <ButtonKitten
        onPress={() =>
          axios
            .get(
              `http://35.169.65.234:9464/workshop/mainScreen/SimulateInvalidElectricityConsumption`
            )
            .then((response) => {
              console.log("sample response index :", response.data);
              setIndex(response.data);
              console.log("index from calling the rendom ", index);
              Alert.alert("simulate", "simulate consumption success", [
                {
                  text: "OK",
                  onPress: () => navigation.navigate("Home", { index: index }),
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
      {data.length > 0 && <InvalidConsumptionComponent indexes={data.length} />}
    </View>
  );
};

export default SampleConsumption;
