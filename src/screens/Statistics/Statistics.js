import { View, Text, Image, TouchableHighlight,Dimensions,useState ,Button} from "react-native";
import React from "react";
import styles from "./Statistics.style";
import { Button as ButtonKitten,BottomNavigation } from "@ui-kitten/components";
import DevicesNamesButtons from "../../components/DevicesNamesButtons/DevicesNamesButtons";
// rnfe


const Statistics = ({  route, navigation }) => {
  const {data} =route.params;
    return(
    
    <View style={styles.container}>
      <Text style={styles.hadder}>Statistics</Text>
      <Text style={styles.labelsStyle}>choose device:</Text>

    <View style={styles.container}>
       
        <DevicesNamesButtons listOfItems={data} navigation={navigation} />
      </View>

      <Button
              style={styles.button}
              title="statistics for all devices"
              onPress= {() => { 
                navigation.navigate("AllDevicesStatistic");
          }}

            />
    </View>
    );
  };
  
  export default Statistics;