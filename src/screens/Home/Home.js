import { View, Text, Image, TouchableHighlight, Button } from "react-native";
import React from "react";
import styles from "./Home.style";
import {
  Button as ButtonKitten,
  BottomNavigation,
} from "@ui-kitten/components";
import DevicesContainer from "../../components/devicesContainer/DevicesContainer";
import itemsMock from "../../mocks/itemsMock";
import LiveShowComponent from "../../components/LiveShowComponent/LiveShowComponent";
import Ionicons from "@expo/vector-icons/Ionicons";

// rnfe

const Home = ({ navigation }) => {
  return (
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
        <DevicesContainer listOfItems={itemsMock} navigation={navigation} />
      </View>
      <ButtonKitten onPress={() => navigation.navigate("SafeChild")} style={styles.Button} size="medium">
        Safe Child Mode
      </ButtonKitten> 
      <ButtonKitten onPress={() => navigation.navigate("SleepMode")} style={styles.Button} size="medium">
        Sleep Mode
      </ButtonKitten>
      <ButtonKitten onPress={() => navigation.navigate("Statistics")} style={styles.Button} size="medium">
        Statistics
      </ButtonKitten>
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
        <ButtonKitten style={styles.Button} size="medium">
          Statistics
        </ButtonKitten>
      </View>
    </View>
  );
};

export default Home;
