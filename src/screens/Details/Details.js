import styles from "./Details.style";
import React, { useState } from "react";
import constants from "../../constants/itemTypes";

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

export const Details = ({
  name,
  normalConsumption,
  improperConsumption,
  type,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.header}>Device details</Text>
          <Text style={styles.labelsStyle}>device Name:</Text>
          <Text style={styles.labelsStyle}>{name}</Text>
          <Text style={styles.labelsStyle}>Device type:</Text>
          <Text style={styles.labelsStyle}>{type}</Text>
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
          <Text style={[styles.labelsStyle]}>{normalConsumption}</Text>

          <Text style={styles.labelsStyle}>Improper power consumption:</Text>
          <Text style={[styles.labelsStyle]}>{improperConsumption}</Text>

          <Button
            title="REMOVE DEVICE"
            color="red"
            onPress={() => Alert.alert("device deleted")}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Details;
