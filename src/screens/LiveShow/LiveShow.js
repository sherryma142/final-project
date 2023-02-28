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
import OnlyDevicesContainer from "../../components/onlyDevicesContainer/OnlyDevicesContainer";
import LiveShowComponent from "../../components/LiveShowComponent/LiveShowComponent";
const LiveShow = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.liveShow}>
        <OnlyDevicesContainer listOfItems={data} navigation={navigation} />
      </View>
    </View>
  );
};

export default LiveShow;
