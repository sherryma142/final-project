import { View, Text ,Switch} from "react-native";
import React ,{useState} from "react";
import styles from "./ItemNameSafeChild.style";
import { Ionicons } from '@expo/vector-icons';
import axios from "axios";

export const ItemNameSafeChild = ({name,index}) => {

  const [data, setData] = useState();
  const [isEnabled, setIsEnabled] = useState(data);

    axios.get(`http://192.168.1.112:9464/workshop/mainScreen/checkIfPlugRegisteredToSafeMode?i_UiIndex=${index}`)
          .then((response) => {
            setData(response.data);
            setIsEnabled(data);
          });


 console.log(data)

    const toggleRememberPin = () => {
      setIsEnabled(previousState => !previousState);
      console.log(isEnabled)
      !isEnabled?
      axios.get(`http://192.168.1.112:9464/workshop/mainScreen/RegisterPlugToSafeMode?i_UiIndex=${index}`)
        .then((response) => {
          console.log("added")
        })
           :
        axios.delete(`http://192.168.1.112:9464/workshop/mainScreen/RemovePlugFromSleepMode?i_UIndex=${index}`)
        .then((response) => {
          console.log("removed")
        })
  };

  return (

    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Switch
        trackColor={{false: 'red', true: 'green'}}
        thumbColor={'#f4f3f4'}
        onValueChange={toggleRememberPin}
        value={isEnabled}
        style={styles.switch}
      />
        <Text style={styles.checkboxLabel}>{name}</Text>
      </View>
    </View>

  );
};
export default ItemNameSafeChild;
