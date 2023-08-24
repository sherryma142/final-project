import {
  View,
  ScrollView,
  TouchableHighlight,
  Alert,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Home.style";

import { Button, Text } from "@ui-kitten/components";

import DevicesContainer from "../../components/devicesContainer/DevicesContainer";
import itemsMock from "../../mocks/itemsMock";
import LiveShowComponent from "../../components/LiveShowComponent/LiveShowComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native"; // Import useIsFocused

// rnfe

const Home = () => {
  const [data, setData] = useState([]);
  const isFocused = useIsFocused(); // Get the focus status of the screen

  React.useEffect(() => {
    if (isFocused) {
      // Only fetch data when the screen is focused
      axios
        .get(`http://35.169.65.234:9464/workshop/mainScreen/SeePlugsAtDB`)
        .then((response) => {
          const newData = response.data.filter(
            (object) => object.index !== "10"
          );
          newData.sort((a, b) => parseInt(a.index) - parseInt(b.index));
          setData(newData);
        });
    }
  }, [isFocused]);

  // console.log(newData);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.titleContainer}>
          <Text style={styles.hadder}>SaveEnergy</Text>
        </View>
        <View style={styles.container}>
          <DevicesContainer listOfItems={data} screen={"Home"} />
        </View>
        <View style={styles.Buttons}></View>
      </View>
    </ScrollView>
  );
};

export default Home;
