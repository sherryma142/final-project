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

const RealHome = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [isNotEmpty, setIsNotEmpty] = useState(true);
  const isFocused = useIsFocused(); // Get the focus status of the screen
  
  React.useEffect(() =>{
    axios
    .get(
      `http://35.169.65.234:9464/workshop/mainScreen/GetTotalConnectedPlugsFromMainScreen`
    )
    .then((response) => {

      response.data.map((object) => {

          if(object.index==="10")
          {
            setNewData([object]);

          }
      }
        
    )})
  },[isFocused]);

  return (
    <ScrollView style={styles.container}>
    <View style={styles.container1}>
    <View style={styles.titleContainer}>
    <Text style={styles.hadder}>SaveEnergy</Text>
    </View>
      <View style={styles.container}>
        <DevicesContainer listOfItems={newData} screen={"RealHome"} navigation={navigation} />
      </View>
      <View style={styles.Buttons}>
      
       


      </View>
  
    </View>
  </ScrollView>
  );
};

export default RealHome;
