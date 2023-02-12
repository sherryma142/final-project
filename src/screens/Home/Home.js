import { View, Text, Image, TouchableHighlight } from "react-native";
import React from "react";
import styles from "./Home.style";
import { Button as ButtonKitten,BottomNavigation } from "@ui-kitten/components";
import DevicesContainer from "../../components/devicesContainer/DevicesContainer";
import itemsMock from "../../mocks/itemsMock";
import Ionicons from '@expo/vector-icons/Ionicons';

// rnfe

const Home = ({ navigation }) => {

  return(
  
  <View style={styles.container}>
      <Ionicons name='settings' size={32} onPress={() => navigation.navigate("Settings")} />
      <Text style={styles.hadder}>SaveEnergy</Text>
      <Text style={styles.liveShow}>Live Show</Text>
      <View>
        <TouchableHighlight onPress={() => navigation.navigate("LiveShow")}>
          <Image
            source={require("../../../assets/download.png")}
            style={styles.liveShowImage}
          />
        </TouchableHighlight>
      </View>
      <View style={styles.container}>
        <DevicesContainer listOfItems={itemsMock} navigation={navigation} />
      </View>
      <ButtonKitten onPress={() => navigation.navigate("SafeChild")} style={styles.Button} size="medium">
        Safe Child Mode
      </ButtonKitten> 
      <ButtonKitten onPress={() => navigation.navigate("SleepMode")} style={styles.Button} size="medium">
        Sleep Mode
      </ButtonKitten>
      <ButtonKitten style={styles.Button} size="medium">
        Statistics
      </ButtonKitten>
      </View>
  );
};

export default Home;
