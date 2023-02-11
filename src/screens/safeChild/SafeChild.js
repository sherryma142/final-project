import { Button, View, Text,Switch, Image, TouchableHighlight } from "react-native";
import React from "react";
import styles from "./Home.style";
import { Button as ButtonKitten } from "@ui-kitten/components";
import DevicesContainer from "../../components/devicesContainer/DevicesContainer";
import itemsMock from "../../mocks/itemsMock";

const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);

const Home = ({ navigation }) => {
  return(
  <View style={styles.container}>
      <Text style={styles.hadder}>Safe Child</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
      <View style={styles.container}>
        <DevicesNameContainer listOfItems={itemsMock} />
      </View>
    </View>
  );
};

export default Home;
