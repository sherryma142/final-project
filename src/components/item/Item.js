import { View, Text, Image, TouchableHighlight } from "react-native";
import React from "react";
import styles from "./Item.style";
import constants from "../../constants/itemTypes";

export const Item = ({ name, type, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.item_name}>{name}</Text>
      <TouchableHighlight onPress={() => navigation.navigate("AddNew")}>
        <Image source={constants.IMAGES[type]} style={styles.item_image} />
      </TouchableHighlight>
    </View>
  );
};
