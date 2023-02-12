import { View } from "react-native";
import React from "react";
import { ItemName } from "../ItemName/ItemName";
import styles from "./DevicesNameContainer.style";

const DevicesNameContainer = ({listOfItems}) => {
  return (
    
    <View style={styles.container}>
      <View style={styles.itemTypes}>
      {listOfItems.map((item) => (
          <ItemName name={item.title}/>
        ))}
      </View>
    </View>
  );

};

export default DevicesNameContainer;
