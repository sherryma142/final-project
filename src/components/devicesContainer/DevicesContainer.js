import { View, Text } from "react-native";
import React from "react";
import { Item } from "../item/Item";
import styles from "./DevicesContainer.style";
const DevicesContainer = ({ listOfItems, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowDevices}>
        {listOfItems.map((item) => (
          <Item name={item.title} type={item.type} navigation={navigation} />
        ))}
      </View>
    </View>
    // <View style={styles.container}>
    //   <View style={styles.rowDevices}>
    //     <Item name={"Tv"} type={"television"} navigation={navigation} />
    //     <Item name={"Lamp"} type={"lamp"} navigation={navigation} />
    //     <Item name={"Fridge"} type={"fridge"} navigation={navigation} />
    //   </View>
    //   <View style={styles.rowDevices}>
    //     <Item name={"Tv"} type={"television"} navigation={navigation} />
    //     <Item name={"Lamp"} type={"lamp"} navigation={navigation} />
    //     <Item name={"Fridge"} type={"fridge"} navigation={navigation} />
    //   </View>
    //   <View style={styles.rowDevices}>
    //     <Item name={"Tv"} type={"television"} navigation={navigation} />
    //     <Item name={"Lamp"} type={"lamp"} navigation={navigation} />
    //     <Item name={"Fridge"} type={"fridge"} navigation={navigation} />
    //   </View>
    // </View>
  );
};

export default DevicesContainer;
