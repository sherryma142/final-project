import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { Button } from "@ui-kitten/components";

import React, { useState } from "react";
import styles from "./Statistics.style";

import {
  Button as ButtonKitten,
  BottomNavigation,
} from "@ui-kitten/components";
import DevicesNamesButtons from "../../components/DevicesNamesButtons/DevicesNamesButtons";
import { SelectList } from "react-native-dropdown-select-list";
import axios from "axios";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

// rnfe

const Statistics = () => {
  const [isYearlySelected, setYearlySelection] = useState(false);
  const [isDailySelected, setDailySelection] = useState(false);
  const [isWeeklySelected, setWeeklySelection] = useState(false);
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);
  const navigation = useNavigation(); // Use the useNavigation hook

  let newData = [];

  React.useEffect(() => {
    axios
      .get(`http://35.169.65.234:9464/workshop/mainScreen/SeePlugsAtDB`)
      .then((response) => {
        // console.log(response.data)
        response.data.map((object) => {
          if (object.index != "10") {
            //   console.log(object);
            newData.push(object);
          }
        });
        newData.sort((a, b) => parseInt(a.index) - parseInt(b.index));

        setData(newData);
      });
  }, []);
  return (
    <ScrollView style={styles.container1}>
      <View style={styles.container2}>
        <View style={styles.titleContainer}>
          <Text style={styles.hadder}>Statistics</Text>
        </View>
        <View style={styles.CheckBoxContainer}>
          <Text style={styles.labelsStyle}>
            Select yearly/weekly statistics:
          </Text>
          <SelectList
            data={[
              { key: 1, value: "Weekly" },
              { key: 2, value: "Yearly" },
            ]}
            setSelected={(val) => {
              setSelected(val);
              // console.log(val);
            }}
          />
        </View>
        <Text style={styles.labelsStyle}>choose device:</Text>
        <DevicesNamesButtons
          listOfItems={data}
          navigation={navigation}
          typeStatistics={selected}
        />

        <View style={styles.Buttons}>
          <Button
            disabled={selected === ""}
            style={styles.button}
            status="success" // Green background color
            size="medium"
            onPress={() => {
              navigation.navigate("AllDevicesStatistic", {
                data: data,
                navigation: navigation,
                typeStatistics: selected,
              });
            }}
          >
            {({ disabled }) => (
              <Text
                style={[
                  styles.buttonText,
                  disabled && { color: "#000" }, // Change the color when disabled
                ]}
              >
                statistics for all devices
              </Text>
            )}
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Statistics;
