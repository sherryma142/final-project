import { Button, View, Text, Image, TouchableHighlight } from "react-native";
import React from "react";
import styles from "./Home.style";
import { Button as ButtonKitten } from "@ui-kitten/components";
import DevicesContainer from "../../components/devicesContainer/DevicesContainer";
import itemsMock from "../../mocks/itemsMock";
import LiveShowComponent from "../../components/LiveShowComponent/LiveShowComponent";
// rnfe

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.hadder}>SaveEnergy</Text>
      <Text>LiveShow</Text>

      <LiveShowComponent navigation={navigation}></LiveShowComponent>

      <View style={styles.container}>
        <DevicesContainer listOfItems={itemsMock} navigation={navigation} />
      </View>
      <View style={styles.Buttons}>
        <ButtonKitten style={styles.Button} size="medium">
          Safe Chiled Mode
        </ButtonKitten>
        <ButtonKitten style={styles.Button} size="medium">
          Sleep Mode
        </ButtonKitten>
        <ButtonKitten style={styles.Button} size="medium">
          Statistics
        </ButtonKitten>
      </View>

      {/* <Button>SaveEnergy</Button> */}
      {/* <View style={styles.rowDevices}>
        <Item name={"Tv"} type={"television"} navigation={navigation} />
        <Item name={"Lamp"} type={"lamp"} navigation={navigation} />
        <Item name={"Fridge"} type={"fridge"} navigation={navigation} />
      </View>
      <View style={styles.rowDevices}>
        <Item name={"Tv"} type={"television"} navigation={navigation} />
        <Item name={"Lamp"} type={"lamp"} navigation={navigation} />
        <Item name={"Fridge"} type={"fridge"} navigation={navigation} />
      </View> */}

      {/* <ListOfItems list={list} /> */}
      {/* <SpecialButton /> */}
      {/* 
      {list.map((item) => (
        <Item title={title} />
      ))}
      {list.length < 9 && <Item title="add new" onPress={addNewItem} />} */}
    </View>
  );
};

export default Home;
