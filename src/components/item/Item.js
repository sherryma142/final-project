import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Animated,
  Button,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { useRef } from "react";
import styles from "./Item.style";
import constants from "../../constants/itemTypes";
import axios from "axios";

import Blink from "../item/Blink";
import { useEffect } from "react";

export const Item = ({ name, type, navigation, index, status }) => {
  const [isfridge, setIsFridge] = useState(false);
  // React.useEffect(() => {
  //   if (type === "fridge") {
  //     setIsFridge(true);
  //     axios
  //       .get(
  //         `http://35.169.65.234:9464/workshop/mainScreen/getPlugInfo?i_UiIndex=${index}`
  //       )
  //       .then((response) => {
  //         status = response.data["status:"];
  //       });
  //   }
  // }, [isfridge]);
  const data = status !== "plus";
  let isOn;

  if (data === true) {
    if (status === "on") {
      isOn = true;
    } else {
      isOn = false;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Blink duration={1000}>
          <View style={isOn && data ? styles.inLive : null} />
          <View style={status === "off" ? styles.offLive : null} />
        </Blink>
      </View>

      <Text style={styles.item_name}>{name}</Text>

      <TouchableHighlight
        onPress={() =>
          navigation.navigate("Details", {
            index: index,
            navigation: navigation,
          })
        }
      >
        <Image source={constants.IMAGES[type]} style={styles.item_image} />
      </TouchableHighlight>
    </View>
  );
};
