import { View,Text, } from "react-native";
import React,{ Component} from "react";
import { ItemNameSleepMode } from "../ItemNameSleepMode/ItemNameSleepMode";
import styles from "./SleepModeDevicesContainer.style";


const SleepModeDevicesContainer = ({listOfItems}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.itemTypes}>
      {
      listOfItems.map((item) => (
          <ItemNameSleepMode name={item.title} index={item.index} />
        ))}
      </View>
    </View>
  );

};

export default SleepModeDevicesContainer;
