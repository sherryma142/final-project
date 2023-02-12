import { View, Text, TouchableHighlight, Image } from "react-native";
import React from "react";
import styles from "./LiveShowComponent.style";
import itemsMock from "../../mocks/itemsMock";

const LiveShowComponent = ({ navigation }) => {
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate("LiveShow", { itemsMock: itemsMock })}
    >
      <Image
        source={require("../../../assets/download.png")}
        style={styles.liveShowImage}
      />
    </TouchableHighlight>
  );
};

export default LiveShowComponent;
