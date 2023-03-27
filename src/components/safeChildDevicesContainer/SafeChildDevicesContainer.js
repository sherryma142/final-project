import { View, Text } from "react-native";
import React, { Component } from "react";
import { ItemNameSafeChild } from "../ItemNameSafeChild/ItemNameSafeChild";
import styles from "./SafeChildDevicesContainer.style";

const SleepModeDevicesContainer = ({ listOfItems }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemTypes}>
        {listOfItems.map((item) => (
          <ItemNameSafeChild name={item.title} index={item.index} />
        ))}
      </View>
    </View>
  );
};

export default SleepModeDevicesContainer;
