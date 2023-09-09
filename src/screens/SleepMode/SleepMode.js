import { View, Text, Switch, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./SleepMode.style";
import SleepModeDevicesContainer from "../../components/sleepModeDevicesContainer/SleepModeDevicesContainer";
import axios from "axios";
import { Button } from "@ui-kitten/components";
import { useIsFocused } from "@react-navigation/native"; // Import useIsFocused

const SleepMode = ({ route }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isRegisterdNotEmpty, setIsRegisteredNotEmpty] = useState(false);

  const isFocused = useIsFocused(); // Get the focus status of the screen
  React.useEffect(() => {
    if (route.params && route.params.refresh) {

      console.log("refresh")
      refreshData();
    }
  }, [route.params]);
F
  const refreshData = () => {
    setRefreshing(true);
    // Fetch the data again and update the state
    axios
      .get("http://35.169.65.234:9464/workshop/mainScreen/GetTotalConnectedPlugsFromMainScreen")
      .then((response) => {
        const newData = response.data.filter(
          (object) => object.type !== "fridge"
        );
        newData.sort((a, b) => parseInt(a.index) - parseInt(b.index));
        setData(newData);
        setRefreshing(false);
      });

      axios
        .get(
          "http://35.169.65.234:9464/workshop/mainScreen/checkRegisteredPlugsToSleepMode"
        )
        .then((response) => {
          console.log("registered data: ", response.data)
          setIsRegisteredNotEmpty(Object.keys(response.data).length > 0);

        })
  };
  React.useEffect(() => {
    if (isFocused) {
      // Only fetch data when the screen is focused
      axios
        .get(`http://35.169.65.234:9464/workshop/mainScreen/GetTotalConnectedPlugsFromMainScreen`)
        .then((response) => {
          const newData = response.data.filter(
            (object) =>  object.type!=="fridge"
          );
          newData.sort((a, b) => parseInt(a.index) - parseInt(b.index));
          setData(newData);
        });

        axios
        .get(
          "http://35.169.65.234:9464/workshop/mainScreen/checkRegisteredPlugsToSleepMode"
        )
        .then((response) => {
          console.log("registered data: ", response.data)
          setIsRegisteredNotEmpty(Object.keys(response.data).length > 0);

        })
    }

  }, [isFocused]);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.titleContainer}>
          <Text style={styles.hadder}>Sleep Mode</Text>
        </View>
        <Text style={styles.labelsStyle}>Choose devices: </Text>
        {/* <Text style={styles.labelsStyle}>On/Off this option: </Text>
       <Switch
        trackColor={{false: 'red', true: 'green'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      /> */}
        <View style={styles.container}>
          <SleepModeDevicesContainer listOfItems={data} />
        </View>
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          status="success" // Green background colo
          size="medium"
          disabled={!isRegisterdNotEmpty}
          onPress={() => {
            Alert.alert("connect succesfully");
          }}
        >
          Connect devices to sleep mode
        </Button>
      </ScrollView>
    </View>
  );
};

export default SleepMode;
