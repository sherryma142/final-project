import { View, Text, Switch, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./SleepMode.style";
import SleepModeDevicesContainer from "../../components/sleepModeDevicesContainer/SleepModeDevicesContainer";
import axios from "axios";
import { Button } from "@ui-kitten/components";

const SleepMode = ({ route }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [data, setData] = useState([]);

  let newData = [];

  React.useEffect(() => {
    axios
      .get(`http://35.169.65.234:9464/workshop/mainScreen/SeePlugsAtDB`)
      .then((response) => {
        // console.log(response.data)
        response.data.map((object) => {
          if (object.index != "10") {
            //   console.log(object);
            newData.push(object);
          }
        });
        newData.sort((a, b) => parseInt(a.index) - parseInt(b.index));

        setData(newData);
      });
  }, []);
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
