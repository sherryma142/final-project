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
  TouchableOpacity,
} from "react-native";

import {
  Button as ButtonKitten,
  BottomNavigation,
} from "@ui-kitten/components";

export const AddNew = ({ route, navigation }) => {
  const { index } = route.params;
  const [name, setName] = useState("");
  const [realIndex, setRealIndex] = useState(index);
  const [normalConsumption, setNormalConsumptio] = useState(240);
  const [improperConsumption, setImproperConsumption] = useState(260);
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

  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);

  const toggleAdvancedSettings = () => {
    setShowAdvancedSettings(!showAdvancedSettings);
  };

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

          <Text style={styles.labelsStyle}>index:</Text>

          <TextInput
            style={styles.labelsStyle}
            placeholder="enter index if needed"
            value={realIndex}
            onChangeText={(text) => {
              setRealIndex(text);
            }}
          />

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

          <View style={styles.button}>
            <Button
              title={
                showAdvancedSettings
                  ? "Hide Advanced Settings"
                  : "Show Advanced Settings"
              }
              onPress={toggleAdvancedSettings}
              color="gray"
            />
            {showAdvancedSettings && (
              <View>
                <Text style={styles.labelsStyle}>min power consumption:</Text>
                <TextInput
                  style={[styles.labelsStyle]}
                  placeholder="240"
                  value={normalConsumption}
                  onChangeText={(text) => setNormalConsumptio(text)}
                />

                <Text style={styles.labelsStyle}>max power consumption:</Text>
                <TextInput
                  style={[styles.labelsStyle]}
                  placeholder="260"
                  value={improperConsumption}
                  onChangeText={(text) => setImproperConsumption(text)}
                />
              </View>
            )}
          </View>

          <Button
            title="ADD DEVICE"
            color="green"
            onPress={() => {
              let type = constants.INDEXTYPES[selected];

              console.log(index);
              axios
                .get(
                  `http://192.168.1.143:9464/workshop/mainScreen/addNewPlug?i_Title=${name}&i_Type=${type}&i_MinElectricityVolt=${normalConsumption}&i_MaxElectricityVolt=${improperConsumption}&i_UiIndex=${realIndex}`
                )
                .then((response) => {
                  console.log(response.data);
                  Alert.alert("Device added", "Device added succesfully", [
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
