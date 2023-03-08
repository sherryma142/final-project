import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions,
  useState,
  Button,
} from "react-native";
import React from "react";
import styles from "./Statistics.style";
import {
  Button as ButtonKitten,
  BottomNavigation,
} from "@ui-kitten/components";
import DevicesNamesButtons from "../../components/DevicesNamesButtons/DevicesNamesButtons";
// rnfe

const Statistics = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.hadder}>Statistics</Text>
      <Text style={styles.labelsStyle}>choose device:</Text>
      {/* <View style={styles.container}></View> */}
      <DevicesNamesButtons listOfItems={data} navigation={navigation} />

      <View style={styles.Buttons}>
        <ButtonKitten
          style={styles.Button}
          onPress={() => {
            navigation.navigate("AllDevicesStatistic");
          }}
          size="medium"
        >
          statistics for all devices
        </ButtonKitten>
      </View>
    </View>
  );
};

export default Statistics;
