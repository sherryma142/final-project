import styles from "./Details.style";
import React, { useState } from "react";
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
  Switch,
} from "react-native";

export const Details = ({ route, navigation }) => {
  const { index } = route.params;
  const [data, setData] = useState([]);

  const [status, setStatusData] = useState([]);
  const [isEnabled, setIsEnabled] = useState(data);
  React.useEffect(() => {
    axios
      .get(
        `http://192.168.1.143:9464/workshop/mainScreen/getPlugInfo?i_UiIndex=${index}`
      )
      .then((response) => {
        setData(response.data);
        console.log(data);
      });
  }, []);

  let type = data["type:"];

  axios
    .get(
      `http://192.168.1.143:9464/workshop/mainScreen/getPlugInfo?i_UiIndex=${index}`
    )
    .then((response) => {
      setStatusData(response.data["status:"] === "on");
      setIsEnabled(status);
    });

  const toggleRememberPin = () => {
    setIsEnabled((previousState) => !previousState);
    axios.get(
      `http://192.168.1.143:9464/workshop/plugMediator/flipPlugModeAccordingToIndex?i_UiIndex=${index}`
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.header}>Device details</Text>

          <Text style={styles.labelsStyle2}>device on/off:</Text>

          <Switch
            trackColor={{ false: "red", true: "green" }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
            onValueChange={toggleRememberPin}
            value={isEnabled}
            style={styles.switch}
          />

          <Text style={styles.labelsStyle}>device Name:</Text>
          <Text style={styles.labelsStyle}>{data["title:"]}</Text>
          <Text style={styles.labelsStyle}>Device type:</Text>
          <Text style={styles.labelsStyle}>{data["type:"]}</Text>
          <Text style={styles.labelsStyle}>Image:</Text>
          <Image
            source={constants.IMAGES[constants.TYPES[type]]}
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
              console.log(index);
              axios
                .delete(
                  `http://192.168.1.143:9464/workshop/mainScreen/RemoveExistPlug?i_UiIndex=${index}`
                )
                .then((response) => {
                  Alert.alert("Device delete", "Device deleted succesfuly", [
                    {
                      text: "OK",
                      onPress: () => navigation.navigate("Home"),
                    },
                  ]);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Details;
