import styles from "./AddNew.style";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import constants from "../../constants/itemTypes";
import axios from "axios";

import {
  TextInput,
  Text,
  View,
  NavigationContainer,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

export const AddNew = ({ route, navigation }) => {
  //const [data, setData] = useState();

  const { index } = route.params;
  const [name, setName] = useState("");
  const [normalConsumption, setNormalConsumptio] = useState("");
  const [improperConsumption, setImproperConsumption] = useState("");
  const [selected, setSelected] = useState("");

  const data1 = [
    { key: 1, value: constants.INDEXTYPES[1] },
    { key: 2, value: constants.INDEXTYPES[2] },
    { key: 3, value: constants.INDEXTYPES[3] },
    { key: 4, value: constants.INDEXTYPES[4] },
    { key: 5, value: constants.INDEXTYPES[5] },
    { key: 6, value: constants.INDEXTYPES[6] },
    { key: 7, value: constants.INDEXTYPES[7] },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.header}>Add new device</Text>
          <Text style={styles.labelsStyle}>Name:</Text>

          <TextInput
            style={styles.labelsStyle}
            placeholder="enter device name here"
            value={name}
            onChangeText={(text) => setName(text)}
            // onSubmitEditing={() => alert(`Welcome to ${message}`)}
          />
          <Text style={styles.labelsStyle}>Device type:</Text>

          <SelectList data={data1} setSelected={setSelected} />

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
            placeholder="enter min power consumption here"
            value={normalConsumption}
            onChangeText={(text) => setNormalConsumptio(text)}
          />

          <Text style={styles.labelsStyle}>Improper power consumption:</Text>
          <TextInput
            style={[styles.labelsStyle]}
            placeholder="enter max power consumption here"
            value={improperConsumption}
            onChangeText={(text) => setImproperConsumption(text)}
          />

          <Button
            title="ADD DEVICE"
            color="green"
            onPress={() => {
              let type = constants.INDEXTYPES[selected];

              console.log(index);
              axios
                .get(
                  `http://192.168.1.251:9464/workshop/mainScreen/addNewPlug?i_Title=${name}&i_Type=${type}&i_MinElectricityVolt=${normalConsumption}&i_MaxElectricityVolt=${improperConsumption}&i_UiIndex=${index}`
                )
                .then((response) => {
                  console.log(response.data);
                  Alert.alert("Device add", "Device added succesfuly", [
                    {
                      text: "OK",
                      onPress: () => navigation.navigate("Home"),
                    },
                  ]);
                });
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddNew;
