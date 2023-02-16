import { View, Text, Image, TouchableHighlight,Dimensions } from "react-native";
import React from "react";
import styles from "./Statistics.style";
import { Button as ButtonKitten,BottomNavigation } from "@ui-kitten/components";
import DevicesNamesButtons from "../../components/DevicesNamesButtons/DevicesNamesButtons";
import itemsMock from "../../mocks/itemsMock";
// rnfe


const Statistics = ({  navigation }) => {

    
    return(
    
    <View style={styles.container}>
      <Text style={styles.hadder}>Statistics</Text>
      <Text style={styles.labelsStyle}>choose device:</Text>

    <View style={styles.container}>
        <DevicesNamesButtons listOfItems={itemsMock} navigation={navigation} />
      </View>

    </View>
    );
  };
  
  export default Statistics;