import { View, Text, Image, TouchableHighlight } from "react-native";
import React from "react";
import styles from "./Item.style";
import constants from "../../constants/itemTypes";

export const Item = ({ name, type, navigation,index }) => {
  //console.log({index});
  return (
  
    <View style={styles.container}>
      <Text style={styles.item_name}>{name}</Text>
      <TouchableHighlight
        onPress={() =>
          type === "plus"
            ? navigation.navigate("AddNew",{index:index})
            : navigation.navigate("Details")
        }
      >
        <Image source={constants.IMAGES[type]} style={styles.item_image} />
      </TouchableHighlight>
    </View>
  );
};
