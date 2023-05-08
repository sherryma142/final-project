import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
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
import InvalidConsumptionComponent from "../../components/InvalidConsumptionComponent/InvalidConsumptionComponent";
// rnfe

const Home = ({ index, navigation }) => {

  const [data, setData] = useState([]);
  const [isNotEmpty,setIsNotEmpty] = useState(true);

  let newData=[];
  axios
    .get(
      `http://192.168.1.112:9464/workshop/mainScreen/SeePlugsAtDB`
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
  
    <ScrollView>
      <View style={styles.container}>
        <Ionicons
          style={styles.settings}
          ignoredStyles={["styles.container"]}
          name="settings"
          size={32}
          onPress={() =>
             navigation.navigate("Settings" , {navigation:navigation })
            
            }
        />
        <Text style={styles.hadder}>SaveEnergy</Text>
        <View style={styles.container}>
          <DevicesContainer listOfItems={data} navigation={navigation} />
        </View>
        <View style={styles.Buttons}>
          <ButtonKitten
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
          </ButtonKitten>
          <ButtonKitten
            onPress={() => navigation.navigate("SleepMode", { data: data })}
            style={styles.Button}
            size="medium"
          >
            Sleep Mode
          </ButtonKitten>
          <ButtonKitten
            style={styles.Button}
            size="medium"
            onPress={() => navigation.navigate("Statistics", { data: data })}
          >
            Statistics
          </ButtonKitten>
 
          <ButtonKitten
            onPress={() => {
              console.log("press");
              
            }}
            style={styles.Button}
            size="medium"
          >
            Sample consamption
          </ButtonKitten>
          {
                isNotEmpty && <InvalidConsumptionComponent index={index} />
              }  
        </View>
    
      </View>
    </ScrollView>
  );
};

export default Home;
