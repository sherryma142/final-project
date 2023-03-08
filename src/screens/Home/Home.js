import { View, Text, ScrollView, PermissionsAndroid, Button } from "react-native";
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

      
      <ButtonKitten
          // onPress={() =>
             
          //   }
          style={styles.button}
          size="medium"
        >
          get location
        </ButtonKitten>
      
      <Text style={styles.hadder}>SaveEnergy</Text>
      <Text>LiveShow</Text>

      <LiveShowComponent listOfItems={data} navigation={navigation}></LiveShowComponent>

      <View style={styles.container}>

  
            <DevicesContainer listOfItems={data} navigation={navigation} />
      </View>
      <View style={styles.Buttons}>
        <ButtonKitten
          onPress={() => navigation.navigate("SafeChild",{data:data})}
          style={styles.Button}
          size="medium"
        >
          Safe Child Mode
        </ButtonKitten>
        <ButtonKitten
          onPress={() => navigation.navigate("SleepMode",{data:data})}
          style={styles.Button}
          size="medium"
        >
          Sleep Mode
        </ButtonKitten>
        <ButtonKitten style={styles.Button}
         size="medium"
         onPress={() => navigation.navigate("Statistics",{data:data})}
         >
          Statistics
        </ButtonKitten>
      </View>
    </View>

    </ScrollView>  

  );
};

export default Home;
