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

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isFound, setIsFound] = useState(false);
  const [isNotEmpty,setIsNotEmpty] = useState(false);

  axios
    .get(
      `http://192.168.1.112:9464/workshop/mainScreen/GetTotalConnectedPlugsFromMainScreen`
    )
    .then((response) => {
      setData(response.data);
      if(data.length>0)
      {
        setIsNotEmpty(true);
      }
    });



  // useEffect(() => {
  //   if (!isFound) {
  //     const id = setInterval(() => {
  //       sendData();
  //     }, 5000);
  //     if (sendData() === 1) {
  //       clearInterval(id);
  //       setIsFound(true);
  //     }
  //     setIntervalId(id);
  //   }

  //   return () => clearInterval(id);
  // }, [isFound]);

 

  return (
  
   
    <ScrollView>
      <View style={styles.container}>
        <Ionicons
          style={styles.settings}
          ignoredStyles={["styles.container"]}
          name="settings"
          size={32}
          onPress={() => navigation.navigate("Settings")}
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
        </View>
    {
      isNotEmpty && <InvalidConsumptionComponent />
    }
      </View>
    </ScrollView>
  );
};

export default Home;
