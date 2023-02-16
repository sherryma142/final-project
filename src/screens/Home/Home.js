import { View, Text, ScrollView, TouchableHighlight, Button } from "react-native";
import React,{useEffect, useState} from "react";
import styles from "./Home.style";
import {
  Button as ButtonKitten,
  BottomNavigation,
} from "@ui-kitten/components";
import DevicesContainer from "../../components/devicesContainer/DevicesContainer";
import itemsMock from "../../mocks/itemsMock";
import LiveShowComponent from "../../components/LiveShowComponent/LiveShowComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";

// rnfe

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);

  axios.get(`http://192.168.1.112:9464/workshop/mainScreen/GetTotalConnectedPlugsFromMainScreen`)
  .then((response) => {
    setData(response.data);
  })


  return (
    <ScrollView >  

    <View style={styles.container}>
      <Ionicons
        style={styles.settings}
        ignoredStyles={["styles.container"]}
        name="settings"
        size={32}
        onPress={() => navigation.navigate("Settings")}
      />
      <Text style={styles.hadder}>SaveEnergy</Text>
      <Text>LiveShow</Text>

      <LiveShowComponent navigation={navigation}></LiveShowComponent>

      <View style={styles.container}>

    

        <DevicesContainer listOfItems={data} navigation={navigation} />
      </View>
      <View style={styles.Buttons}>
        <ButtonKitten
          onPress={() => navigation.navigate("SafeChild")}
          style={styles.Button}
          size="medium"
        >
          Safe Child Mode
        </ButtonKitten>
        <ButtonKitten
          onPress={() => navigation.navigate("SleepMode")}
          style={styles.Button}
          size="medium"
        >
          Sleep Mode
        </ButtonKitten>
        <ButtonKitten style={styles.Button}
         size="medium"
         onPress={() => navigation.navigate("Statistics")}
         >
          Statistics
        </ButtonKitten>
      </View>
    </View>

    </ScrollView>  

  );
};

export default Home;
