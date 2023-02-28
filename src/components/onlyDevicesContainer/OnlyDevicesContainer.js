import { View, Text } from "react-native";
import React from "react";
import { ExistItem } from "../ExistItem/ExistItem";
import styles from "./OnlyDevicesContainer.style";

const OnlyDevicesContainer = ({ listOfItems, navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.rowDevices}>
        
        {listOfItems.map((item,index) => (
          <ExistItem name={item.title} type={item.type} navigation={navigation} index={index}/>
        ))
        }
  
      </View>
    </View>
  );
};

export default OnlyDevicesContainer;
