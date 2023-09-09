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
import { useFocusEffect } from '@react-navigation/native';

// rnfe

const Home = ({ navigation, route }) => {

  const [data, setData] = useState([]);
  const isFocused = useIsFocused(); // Get the focus status of the screen
  const [delayed, setDelayed] = useState(false); // Track whether delay has occurred

  const [refreshing, setRefreshing] = useState(false);

  React.useEffect(() => {
    if (route.params && route.params.refresh) {
      refreshData();
    }
  }, [route.params]);

  const refreshData = () => {
    setRefreshing(true);
    // Fetch the data again and update the state
    axios
      .get("http://35.169.65.234:9464/workshop/mainScreen/GetTotalConnectedPlugsFromMainScreen")
      .then((response) => {
        const newData = response.data.filter((object) => object.index !== "10");
        newData.sort((a, b) => parseInt(a.index) - parseInt(b.index));
        setData(newData);
        setRefreshing(false);
      });
  };


  React.useEffect(() => {
    let timerId;

    if (isFocused) {
      if(!delayed)
      {
        timerId = setTimeout(() => {
          axios
            .get("http://35.169.65.234:9464/workshop/mainScreen/GetTotalConnectedPlugsFromMainScreen")
            .then((response) => {
              const newData = response.data.filter(
                (object) => object.index !== "10"
              );
              newData.sort((a, b) => parseInt(a.index) - parseInt(b.index));
              setData(newData);
              setDelayed(true); // Set delayed to true after the initial delay
            });
        }, 2000); // 2 seconds delay
      }
      else{
        axios
        .get("http://35.169.65.234:9464/workshop/mainScreen/GetTotalConnectedPlugsFromMainScreen")
        .then((response) => {
          const newData = response.data.filter(
            (object) => object.index !== "10"
          );
          newData.sort((a, b) => parseInt(a.index) - parseInt(b.index));
          setData(newData);
        });
      }
      }
    
    return () => {
      clearTimeout(timerId); // Clear the timer if the component unmounts or the effect re-runs
    };
  }, [isFocused]); // Include delayed as a dependency


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
