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
// rnfe

const RealHome = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [isNotEmpty, setIsNotEmpty] = useState(true);

  axios
    .get(
      `http://192.168.1.112:9464/workshop/mainScreen/SeePlugsAtDB`
    )
    .then((response) => {

      response.data.map((object) => {

          if(object.index==="10")
          {
            setNewData([object]);

          }
      }
        
    )})

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
          <DevicesContainer listOfItems={newData} navigation={navigation} />
        </View>
        <View style={styles.Buttons}>
          <ButtonKitten
            onPress={() =>
              navigation.navigate("SafeChild", {
                data: newData,
                navigation: navigation,
              })
            }
            style={styles.Button}
            size="medium"
          >
            Safe Child Mode
          </ButtonKitten>
          <ButtonKitten
            style={styles.Button}
            size="medium"
            onPress={() => navigation.navigate("Statistics", { data: newData })}
          >
            Statistics
          </ButtonKitten>

          <ButtonKitten
            onPress={() =>
              navigation.navigate("SampleConsumption", {
                data: newData,
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

export default RealHome;
