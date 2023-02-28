import { View, Text,Switch,ScrollView,Button,Alert } from "react-native";
import React,{useState} from "react";
import styles from "./SafeChild.style";
import SafeChildDevicesContainer from "../../components/safeChildDevicesContainer/SafeChildDevicesContainer";


const SafeChild = ({  route }) => {
  const {data} =route.params;

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return(
    
  <View style={styles.container}>
     <ScrollView style={styles.scrollView}>
     <Text style={styles.header}>Safe Child</Text>
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
        <SafeChildDevicesContainer listOfItems={data} />
      </View>
      <Button
            title="Connect devices to safe child mode"
            color="green"
            onPress={() => Alert.alert("connect succesfully")}
          />
     </ScrollView>
    </View>
  );
};

export default SafeChild;
