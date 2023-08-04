import { View, Text,Switch,ScrollView,Button,Alert } from "react-native";
import React,{useState} from "react";
import styles from "./SleepMode.style";
import SleepModeDevicesContainer from "../../components/sleepModeDevicesContainer/SleepModeDevicesContainer";
import axios from "axios";


const SleepMode = ({  route }) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [data, setData] = useState([]);

  let newData=[];

  axios
    .get(
      `http://35.169.65.234:9464/workshop/mainScreen/FetchPlugsFromDB`
    )
    
  axios
    .get(
      `http://35.169.65.234:9464/workshop/mainScreen/SeePlugsAtDB`
    )
    .then((response) => {
     // console.log(response.data)
     response.data.map((object) => {
      if(object.index!="10")
      {
     //   console.log(object);
        newData.push(object);
      }
  }
)
setData(newData);
    });
  return(
    
  <View style={styles.container}>
     <ScrollView style={styles.scrollView}>
     <Text style={styles.header}>Sleep Mode</Text>
     <Text style={styles.labelsStyle}>Choose devices: </Text>
     {/* <Text style={styles.labelsStyle}>On/Off this option: </Text>
       <Switch
        trackColor={{false: 'red', true: 'green'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      /> */}
      <View style={styles.container}>
        <SleepModeDevicesContainer listOfItems={data} />
      </View>
      <Button
            title="Connect devices to sleep mode"
            color="green"
            onPress={() => Alert.alert("connect succesfully")}
          />
     </ScrollView>
    </View>
  );
};

export default SleepMode;
