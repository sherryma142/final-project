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
import { SelectList } from "react-native-dropdown-select-list";

// rnfe

const Statistics = ({ route, navigation }) => {
  const [isYearlySelected, setYearlySelection] = useState(false);
  const [isDailySelected, setDailySelection] = useState(false);
  const [isWeeklySelected, setWeeklySelection] = useState(false);
  const [selected, setSelected] = useState("");
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.hadder}>Statistics</Text>
      <Text style={styles.labelsStyle}>choose device:</Text>
      <DevicesNamesButtons
        listOfItems={data}
        navigation={navigation}
        typeStatistics={selected}
      />
      <View style={styles.CheckBoxContainer}>
        <SelectList
          data={[
            { key: 1, value: "Weekly" },
            { key: 2, value: "Yearly" },
          ]}
          setSelected={(val) => {
            setSelected(val);
            console.log(val);
          }}
        />
      </View>
      <View style={styles.Buttons}>
        <ButtonKitten
          style={styles.Button}
          onPress={() => {
            navigation.navigate("AllDevicesStatistic", {
              data: data,
              navigation: navigation,
              typeStatistics: selected,
            });
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
