import {
  View,
  Text,
  TouchableHighlight,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import styles from "./LiveShow.style";
import { Item } from "../../components/item/Item";
import constants from "../../constants/itemTypes";
import DevicesContainer from "../../components/devicesContainer/DevicesContainer";
import LiveShowComponent from "../../components/LiveShowComponent/LiveShowComponent";
const LiveShow = ({ route, navigation }) => {
  const { itemsMock } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.liveShow}>
        <DevicesContainer listOfItems={itemsMock} navigation={navigation} />
      </View>
    </View>
  );
};

export default LiveShow;
