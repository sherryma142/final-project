import { View, Text } from "react-native";
import React from "react";
import { ItemButtons } from "../ItemButtons/ItemButtons";
import styles from "./DevicesNamesButtons.style";

const DevicesNamesButtons = ({ listOfItems , navigation}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.rowDevices}>
        
        {listOfItems.map((item,index) => (
          <ItemButtons name={item.title} type={item.type} navigation={navigation} index={index}/>
        ))
        }
      </View>
    </View>
  );

};

export default DevicesNamesButtons;