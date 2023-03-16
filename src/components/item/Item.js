import { View, Text, Image, TouchableHighlight ,Animated,Button,SafeAreaView} from "react-native";
import React ,{useState} from "react";
import {useRef} from 'react';
import styles from "./Item.style";
import constants from "../../constants/itemTypes";
import axios from "axios";

import Blink from '../item/Blink';

export const Item = ({ name, type, navigation, index })  => {
  //console.log({index});
  const [data, setData] = useState([]);
  const [isEnabled, setIsEnabled] = useState(data);


  axios
    .get(
      `http://192.168.1.112:9464/workshop/mainScreen/getPlugInfo?i_UiIndex=${index}`
    )
    .then((response) => {
      setData(response.data["status:"] === "on");
      setIsEnabled(data);
    });

  const toggleRememberPin = () => {
    setIsEnabled((previousState) => !previousState);
    axios.get(
      `http://192.168.1.112:9464/workshop/plugMediator/flipPlugModeAccordingToIndex?i_UiIndex=${index}`
    );
  };
  return (

   <View style={styles.container}>
       {/* <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
      </View>
    </SafeAreaView>
     */}
      {/* <Switch
        trackColor={{ false: "red", true: "green" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleRememberPin}
        value={isEnabled}
        style={styles.switch}
      /> */}

<       View style={styles.body}>
              <Blink duration={1000}>
                <View style={isEnabled? styles.inLive : styles.offLive } />
              </Blink>
          </View>


      <Text style={styles.item_name}>{name}</Text>
        
   
   

      <TouchableHighlight
        onPress={() =>
          type === "plus"
            ? navigation.navigate("AddNew", {
                index: index,
                navigation: navigation,
              })
            : navigation.navigate("Details", {
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
