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

  const [isNotEmpty,setIsNotEmpty] = useState(true);
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
            onPress={() =>
              navigation.navigate("SafeChild", {
                data: data,
                navigation: navigation,
              })
            }
            style={styles.Button}
           
            size="medium"
           
          >
            Safe Child Mode
          </Button>
          <Button
            onPress={() => navigation.navigate("SleepMode", { data: data })}
            style={styles.Button}
            size="medium"
         
          >
            Sleep Mode
          </Button>
          <Button
            style={styles.Button}
            size="medium"
            onPress={() => navigation.navigate("Statistics", { data: data })}
          >
           <Text style={styles.buttonText}>Statistics</Text>
          </Button>
 
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
