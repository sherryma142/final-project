import { View, Text } from "react-native";
import React from "react";
import { ItemButtons } from "../ItemButtons/ItemButtons";
import styles from "./DevicesNamesButtons.style";

const DevicesNamesButtons = ({ listOfItems, navigation, typeStatistics }) => {
  return (
    <View>
      <View style={styles.rowDevices}>
        {listOfItems.map((item, index) => (
          <ItemButtons
            key={index} // Add a unique key prop here
            name={item.title}
            type={item.type}
            navigation={navigation}
            index={item.index}
            typeStatistics={typeStatistics}
          />
        ))}
      </View>
    </View>
  );
};

export default DevicesNamesButtons;
