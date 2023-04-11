import styles from "./ExistDetails.style";
import React, { useState } from "react";
import constants from "../../constants/itemTypes";
import axios from "axios";

import {
  TextInput,
  Text,
  View,
  NavigationContainer,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

export const Details = ({ route }) => {
  const { index } = route.params;

  const [data, setData] = useState([]);

  React.useEffect(() => {
    axios
      .get(
        `http://192.168.1.184:9464/workshop/mainScreen/getPlugInfo?i_UiIndex=${index}`
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);

  let type = data["type:"];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.header}>Device details</Text>
          <Text style={styles.labelsStyle}>device Name:</Text>
          <Text style={styles.labelsStyle}>{data["title:"]}</Text>
          <Text style={styles.labelsStyle}>Device type:</Text>
          <Text style={styles.labelsStyle}>{data["type:"]}</Text>
          <Text style={styles.labelsStyle}>Image:</Text>
          <Image
            source={constants.IMAGES[constants.TYPES[type]]}
            style={{
              width: 80,
              height: 80,
              resizeMode: "contain",
              marginTop: -20,
              marginLeft: 200,
              marginBottom: 15,
            }}
          />
          <Text style={styles.labelsStyle}>Normal power consumption:</Text>
          <Text style={[styles.labelsStyle]}>
            {data["min electricity volt:"]}
          </Text>

          <Text style={styles.labelsStyle}>Improper power consumption:</Text>
          <Text style={[styles.labelsStyle]}>
            {data["max electricity volt:"]}
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Details;
