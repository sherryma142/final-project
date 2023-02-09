import styles from "./AddNew.style";
import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  NavigationContainer,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";

export const AddNew = () => {
  const [name, setName] = useState("");
  const [normalConsumption, setNormalConsumptio] = useState("");
  const [improperConsumption, setImproperConsumption] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.header}>Add new device</Text>
          <Text style={styles.labelsStyle}>Name:</Text>

          <TextInput
            style={styles.labelsStyle}
            placeholder="enter your name here"
            value={name}
            onChangeText={(text) => setName(text)}
            // onSubmitEditing={() => alert(`Welcome to ${message}`)}
          />
          <TextInput
            style={styles.labelsStyle}
            placeholder="device type:"
            value={name}
            onChangeText={(text) => setName(text)}
            // onSubmitEditing={() => alert(`Welcome to ${message}`)}
          />
          <Text style={styles.labelsStyle}>Image:</Text>

          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Light_bulb_icon_tips.svg/1200px-Light_bulb_icon_tips.svg.png",
            }}
            style={{
              width: 60,
              height: 60,
              resizeMode: "contain",
              marginTop: -30,
              marginLeft: 100,
              marginBottom: 15,
            }}
          />

          <Text style={styles.labelsStyle}>Normal power consumption:</Text>
          <TextInput
            style={[styles.labelsStyle]}
            placeholder="enter normal power consumption here"
            value={normalConsumption}
            onChangeText={(text) => setNormalConsumptio(text)}
          />

          <Text style={styles.labelsStyle}>Improper power consumption:</Text>
          <TextInput
            style={[styles.labelsStyle]}
            placeholder="enter improper power consumption here"
            value={improperConsumption}
            onChangeText={(text) => setImproperConsumption(text)}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddNew;
