import styles from "./AddNew.style";
import React, { useState } from "react";
import {SelectList} from 'react-native-dropdown-select-list';
import constants from "../../constants/itemTypes";

import {
  TextInput,
  Text,
  View,
  NavigationContainer,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
  Alert
} from "react-native";

export const AddNew = () => {
  const [name, setName] = useState("");
  const [normalConsumption, setNormalConsumptio] = useState("");
  const [improperConsumption, setImproperConsumption] = useState("");
  const [selected, setSelected] = useState("");

  const data = [
    {key: 1, value: constants.INDEXTYPES[1]},
    {key: 2, value: constants.INDEXTYPES[2]},
    {key: 3, value: constants.INDEXTYPES[3]},
    {key: 4, value: constants.INDEXTYPES[4]},
    {key: 5, value: constants.INDEXTYPES[5]},
    {key: 6, value: constants.INDEXTYPES[6]},
    {key: 7, value: constants.INDEXTYPES[7]},
];


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
         <Text style={styles.labelsStyle}>Device type:</Text>

          <SelectList data={data} setSelected={setSelected}     />

          <Text style={styles.labelsStyle}>Image:</Text>

          <Image
              source={constants.IMAGES[constants.INDEXTYPES[selected]]}
              style={{
              width: 80,
              height: 80,
              resizeMode: "contain",
              marginTop: -20,
              marginLeft: 200,
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

           <Button
            title="ADD DEVICE"
            color="green"
            onPress={() => Alert.alert('device added')}
            />


        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddNew;
