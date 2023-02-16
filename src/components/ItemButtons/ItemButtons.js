import { Dimensions, View, Text, Button, TouchableHighlight } from "react-native";
import React from "react";
import styles from "./ItemButtons.style";
import constants from "../../constants/itemTypes";
const Separator = () => <View style={styles.separator} />;

export const ItemButtons = ({ name ,navigation}) => {

  return (
    <View style={styles.container}>
      <Button
            title={name}
            color="blue"
            onPress= {() => { 
              navigation.navigate('DeviceStatistic', {
                name: {name},
              });

            }}
            />
     <Separator />

    </View>

  );
};
