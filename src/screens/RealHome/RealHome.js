import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./RealHome.style";
import {
  Button as ButtonKitten,
  BottomNavigation,
} from "@ui-kitten/components";
import DevicesContainer from "../../components/devicesContainer/DevicesContainer";
import LiveShowComponent from "../../components/LiveShowComponent/LiveShowComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import InvalidConsumptionComponent from "../../components/InvalidConsumptionComponent/InvalidConsumptionComponent";
import SampleConsumption from "../SampleConsumption/SampleConsumption";
import { useIsFocused } from "@react-navigation/native"; // Import useIsFocused
// rnfe

const RealHome = ({  navigation, route }) => {
  const [data, setData] = useState([]);
  const isFocused = useIsFocused(); // Get the focus status of the screen

  const [refreshing, setRefreshing] = useState(false);

  React.useEffect(() => {
    if (route.params && route.params.refresh) {
      console.log("refresh")
      refreshData();
    }
  }, [route.params]);

  const refreshData = () => {
    setRefreshing(true);
    // Fetch the data again and update the state
    axios
      .get("http://35.169.65.234:9464/workshop/mainScreen/GetTotalConnectedPlugsFromMainScreen")
      .then((response) => {

        console.log("refresh data:" , response.data)
        const newData = response.data.filter((object) => object.index === "10");
        setData(newData);
        setRefreshing(false);
        console.log("after refresh data:" , data)
      });
  };


  React.useEffect(() => {

    if (isFocused) {
      axios
            .get("http://35.169.65.234:9464/workshop/mainScreen/GetTotalConnectedPlugsFromMainScreen")
            .then((response) => {
              response.data.map((object) => {

                if(object.index==="10")
                {
                  setData([object]);
      
                }
            })
            });
      }
  }, [isFocused]); // Include delayed as a dependency


  // console.log(newData);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.titleContainer}>
          <Text style={styles.hadder}>SaveEnergy</Text>
        </View>
        <View style={styles.container}>
          <DevicesContainer listOfItems={data} screen={"RealHome"} />
        </View>
        <View style={styles.Buttons}></View>
      </View>
    </ScrollView>
  );
};

export default RealHome;