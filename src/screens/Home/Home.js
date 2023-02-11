import { Button, View, Text, Image, TouchableHighlight } from "react-native";
import React from "react";
import styles from "./Home.style";
import { Button as ButtonKitten } from "@ui-kitten/components";
import DevicesContainer from "../../components/devicesContainer/DevicesContainer";
import itemsMock from "../../mocks/itemsMock";
// rnfe

const Home = ({ navigation }) => {
  return(
  <View style={styles.container}>
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
      <ButtonKitten style={styles.Button} size="medium">
        Safe Chiled Mode
      </ButtonKitten>
      <ButtonKitten style={styles.Button} size="medium">
        Sleep Mode
      </ButtonKitten>
      <ButtonKitten style={styles.Button} size="medium">
        Statistics
      </ButtonKitten>
      </View>
  );
};

export default Home;
