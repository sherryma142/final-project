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

// rnfe

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [consumptionData, setConsumptionData] = useState();
  const [isFound, setIsFound] = useState(false);

  axios
    .get(
      `http://192.168.1.162:9464/workshop/mainScreen/GetTotalConnectedPlugsFromMainScreen`
    )
    .then((response) => {
      setData(response.data);
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

  useEffect(() => {
    const interval = setInterval(() => {
      sendData();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const sendData = () => {
    axios
      .get(
        `http://192.168.1.162:9464/workshop/statisticsScreen/GetElectricityConsumptionInLiveForSingleUsage?i_UiIndex=0`
      )
      .then((response) => {
        //console.log(response.data);
        setConsumptionData(response.data);
        //console.log(consumptionData);
        if (consumptionData === 520) {
          Alert.alert(
            "WARNNING",
            "One of your devices has reached a higher than normal power consumption.\n do you want to turn this device?",
            [
              {
                text: "No",
                onPress: () => {
                  console.log("Cancel Pressed");
                },
                style: "cancel",
              },
              {
                text: "Yes",
                onPress: () => {
                  axios
                    .get(
                      `http://192.168.1.162:9464/workshop/mainScreen/clickedOnExitAreaButton`
                    )
                    .then((response) => {
                      setConsumptionData(response.data);
                    });
                },
              },
            ]
          );
          return 1;
        }
        return 0;
      });
  };

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
      </View>
    </ScrollView>
  );
};

export default Home;
