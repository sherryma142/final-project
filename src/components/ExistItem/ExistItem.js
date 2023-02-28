import { View, Text, Image, TouchableHighlight,Switch } from "react-native";
import React,{useState} from "react";
import styles from "./ExistItem.style";
import constants from "../../constants/itemTypes";
import axios from "axios";

export const ExistItem = ({ name, type, navigation,index }) => {

  const [data, setData] = useState([]);
  const [isEnabled, setIsEnabled] = useState(data);

    axios.get(`http://192.168.1.112:9464/workshop/mainScreen/getPlugInfo?i_UiIndex=${index}`)
          .then((response) => {
            setData(response.data["status:"]==="on");
            setIsEnabled(data);
          });

  const toggleRememberPin = () => {
    setIsEnabled(previousState => !previousState);
      axios.get(`http://192.168.1.112:9464/workshop/plugMediator/flipPlugModeAccordingToIndex?i_UiIndex=${index}`)
        
};

  return (
  
    <View style={styles.container}>
       <Switch
        trackColor={{false: 'red', true: 'green'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleRememberPin}
        value={isEnabled}
        style={styles.switch}
      />
      <Text style={styles.item_name}>{name}</Text>
      <TouchableHighlight
        onPress={() =>
            navigation.navigate("ExistDetails",{index:index})
        }
      >
        <Image source={constants.IMAGES[type]} style={styles.item_image} />
      </TouchableHighlight>
    </View>
  );
};