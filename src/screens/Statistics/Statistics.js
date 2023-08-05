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

// rnfe

const Statistics = ({ route, navigation }) => {
  const [isYearlySelected, setYearlySelection] = useState(false);
  const [isDailySelected, setDailySelection] = useState(false);
  const [isWeeklySelected, setWeeklySelection] = useState(false);
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);

  let newData=[];

  axios
    .get(
      `http://35.169.65.234:9464/workshop/mainScreen/FetchPlugsFromDB`
    )
    
  axios
    .get(
      `http://35.169.65.234:9464/workshop/mainScreen/SeePlugsAtDB`
    )
    .then((response) => {
     // console.log(response.data)
     response.data.map((object) => {
      if(object.index!="10")
      {
     //   console.log(object);
        newData.push(object);
      }
  }
)
setData(newData);
    });
  return (
    <ScrollView style={styles.container1}>

    <View style={styles.container2}>
    <View style={styles.titleContainer}>
      <Text style={styles.hadder}>Statistics</Text>
      </View>
      <View style={styles.CheckBoxContainer}>
      <Text style={styles.labelsStyle}>Select yearly/weekly statistics:</Text>
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
      <Text style={styles.labelsStyle}>choose device:</Text>
      <DevicesNamesButtons
        listOfItems={data}
        navigation={navigation}
        typeStatistics={selected}
      />
      
      <View style={styles.Buttons}>
      <Button
         style={styles.button}
        textStyle={styles.buttonText}
        status="success" // Green background colo
        size="medium"
          onPress={() => {
            navigation.navigate("AllDevicesStatistic", {
              data: data,
              navigation: navigation,
              typeStatistics: selected,
            });
          }}
        >
          statistics for all devices
        </Button> 


      </View>
    </View>
    </ScrollView>
  );
};

export default Statistics;
