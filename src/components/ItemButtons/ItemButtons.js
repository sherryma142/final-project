import { Image, View, Text, Button, TouchableHighlight } from "react-native";
import React from "react";
import styles from "./ItemButtons.style";
import constants from "../../constants/itemTypes";
const Separator = () => <View style={styles.separator} />;

export const ItemButtons = ({  name, type, navigation,index }) => {

  return (
    <View style={styles.container}>
              <Text style={styles.item_name}>{name}</Text>

              <TouchableHighlight 
                onPress= {() => { 
                  navigation.navigate('DeviceStatistic', 
                    { name: name , index:index}
                  );
              
            }}
            >
              <Image source={constants.IMAGES[type]} style={styles.item_image} />
              </TouchableHighlight>

     <Separator />

    </View>


  );
};
