import { View, Text, TouchableHighlight, Image } from "react-native";
import React from "react";
import styles from "./LiveShowComponent.style";

const LiveShowComponent = ({listOfItems, navigation }) => {
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate("LiveShow", { data: listOfItems })}
    >
      <Image
        source={require("../../../assets/download.png")}
        style={styles.liveShowImage}
      />
    </TouchableHighlight>
  );
};

export default LiveShowComponent;
