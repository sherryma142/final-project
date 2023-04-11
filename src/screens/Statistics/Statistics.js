import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions,
  Button,
} from "react-native";
import React, { useState } from "react";
import styles from "./Statistics.style";
import {
  Button as ButtonKitten,
  BottomNavigation,
} from "@ui-kitten/components";
import DevicesNamesButtons from "../../components/DevicesNamesButtons/DevicesNamesButtons";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
// rnfe

const Statistics = ({ route, navigation }) => {
  const [isYearlySelected, setYearlySelection] = useState(false);
  const [isDailySelected, setDailySelection] = useState(false);
  const [isWeeklySelected, setWeeklySelection] = useState(false);
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.hadder}>Statistics</Text>
      <Text style={styles.labelsStyle}>choose device:</Text>
      <DevicesNamesButtons listOfItems={data} navigation={navigation} />
      <View style={styles.CheckBoxContainer}>
        <CheckBox
          value={isYearlySelected}
          onValueChange={(value) => setYearlySelection(value)}
          style={styles.checkbox}
        />
        <Text>Yearly</Text>
        <CheckBox
          value={isDailySelected}
          onValueChange={(value) => setDailySelection(value)}
          style={styles.checkbox}
        />
        <Text>Dayly</Text>
        <CheckBox
          value={isWeeklySelected}
          onValueChange={(value) => setWeeklySelection(value)}
          style={styles.checkbox}
        />
        <Text>Weekly</Text>
      </View>
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
