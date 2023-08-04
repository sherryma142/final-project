import {
  View,
  ScrollView,
  TouchableHighlight,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Home.style";

import { Button, Text } from '@ui-kitten/components';

import DevicesContainer from "../../components/devicesContainer/DevicesContainer";
import itemsMock from "../../mocks/itemsMock";
import LiveShowComponent from "../../components/LiveShowComponent/LiveShowComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";

import InvalidConsumptionComponent from "../../components/InvalidConsumptionComponent/InvalidConsumptionComponent";
import { color } from "react-native-reanimated";

// rnfe

const Home = ({ index, navigation }) => {

  const [data, setData] = useState([]);
  const [isNotEmpty,setIsNotEmpty] = useState(true);

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
      
        <Text style={styles.hadder}>SaveEnergy</Text>
        <View style={styles.container}>
          <DevicesContainer listOfItems={data} navigation={navigation} />
        </View>
        <View style={styles.Buttons}>
        
          <Button
            onPress={() => {
              console.log("press");
              console.log(index);

            }}
            style={styles.Button}
            size="medium"
           
          >
            Sample consamption

          </Button>
          {
                isNotEmpty && <InvalidConsumptionComponent indexes={0} />
              } 


        </View>
    
      </View>
    </ScrollView>
  );
};

export default Home;
