import { View, Text } from "react-native";
import React from "react";
import { Item } from "../item/Item";
import styles from "./DevicesContainer.style";
const DevicesContainer = ({ listOfItems, navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.rowDevices}>
        
        {listOfItems.map((item,index) => (
          <Item name={item.title} type={item.type} navigation={navigation} index={index}/>
        ))
        }
       
        {listOfItems.length < 9 && (
          <Item name="add new" type="plus" navigation={navigation} index={listOfItems.length} />
        )}
      </View>
    </View>
  );
};

export default DevicesContainer;
