import { View, Text } from "react-native";
import React, { Component } from "react";
import { ItemNameSafeChild } from "../ItemNameSafeChild/ItemNameSafeChild";
import styles from "./SafeChildDevicesContainer.style";

const SafeChildDevicesContainer = ({ listOfItems }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemTypes}>
        {listOfItems.map((item, index) => (
          <ItemNameSafeChild key={index} name={item.title} index={item.index} />
        ))}
      </View>
    </View>
  );
};

export default SafeChildDevicesContainer;
