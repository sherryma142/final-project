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
import SampleConsumption from "../SampleConsumption/SampleConsumption";
// rnfe

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isNotEmpty, setIsNotEmpty] = useState(true);

  axios
    .get(
      `http://192.168.1.143:9464/workshop/mainScreen/GetTotalConnectedPlugsFromMainScreen`
    )
    .then((response) => {
      // console.log(response.data)
      setData(response.data);
    });

  // console.log("index from home:",index);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Ionicons
          style={styles.settings}
          ignoredStyles={["styles.container"]}
          name="settings"
          size={32}
          onPress={() =>
            navigation.navigate("Settings", { navigation: navigation })
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
            onPress={() =>
              navigation.navigate("SampleConsumption", {
                data: data,
                navigation: navigation,
              })
            }
            style={styles.Button}
            size="medium"
          >
            Sample consumption
          </ButtonKitten>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
