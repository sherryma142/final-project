import {
  View,
  ScrollView,
  TouchableHighlight,
  Alert,Image
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Home.style";

import { Button, Text } from '@ui-kitten/components';

import DevicesContainer from "../../components/devicesContainer/DevicesContainer";
import itemsMock from "../../mocks/itemsMock";
import LiveShowComponent from "../../components/LiveShowComponent/LiveShowComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";

import { color } from "react-native-reanimated";

// rnfe

const Home = ({ index, navigation }) => {

  const [data, setData] = useState([]);

  let newData=[];

  axios
    .get(
      `http://35.169.65.234:9464/workshop/mainScreen/FetchPlugsFromDB`
    )
    
  axios
    .get(
      `http://35.169.65.234:9464/workshop/mainScreen/SeePlugsAtDB`
    )
    .then((response) => {
     // console.log(response.data)
     response.data.map((object) => {
      if(object.index!="10")
      {
     //   console.log(object);
        newData.push(object);
      }
  }
)
setData(newData);
    });
 
   // console.log(newData);
  return (
  
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
      <View style={styles.titleContainer}>
      <Text style={styles.hadder}>SaveEnergy</Text>
      </View>
        <View style={styles.container}>
          <DevicesContainer listOfItems={data} screen={"Home"} navigation={navigation} />
        </View>
        <View style={styles.Buttons}>
        
         


        </View>
    
      </View>
    </ScrollView>
  );
};

export default Home;
