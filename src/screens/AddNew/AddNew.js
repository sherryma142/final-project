import styles from "./AddNew.style";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import constants from "../../constants/itemTypes";
import axios from "axios";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

import {
  TextInput,
  Text,
  View,
  NavigationContainer,
  Image,
  ScrollView,
  SafeAreaView,
  Alert,
  Button,
  TouchableOpacity,
} from "react-native";

import { Button as ButtonKitten } from "@ui-kitten/components";

export const AddNew = ({ route }) => {
  const { index } = route.params;
  const { screen } = route.params;
  const { data } = route.params;
  const [name, setName] = useState("");
  const [realIndex, setRealIndex] = useState(index);
  const [normalConsumption, setNormalConsumptio] = useState(220);
  const [improperConsumption, setImproperConsumption] = useState(240);
  const [selected, setSelected] = useState("");
  const navigation = useNavigation(); // Use the useNavigation hook

  const data1 = [
    { key: 1, value: constants.INDEXTYPES[1] },
    { key: 2, value: constants.INDEXTYPES[2] },
    { key: 3, value: constants.INDEXTYPES[3] },
    { key: 4, value: constants.INDEXTYPES[4] },
    { key: 5, value: constants.INDEXTYPES[5] },
    { key: 6, value: constants.INDEXTYPES[6] },
  ];

  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);

  const toggleAdvancedSettings = () => {
    setShowAdvancedSettings(!showAdvancedSettings);
  };

  //console.log("screen:", screen);

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
            onChangeText={(text) => {
              console.log("data:", data);

              data.forEach((element) => {
                if (element.title === text) {
                  Alert.alert(
                    "Error!",
                    "The name that you tring to add, exist already, please rename the device name",
                    [
                      {
                        text: "OK",
                      },
                    ]
                  );
                } else {
                  setName(text);
                }
              });
            }}
            // onSubmitEditing={() => alert(`Welcome to ${message}`)}
          />
          <Text style={styles.labelsStyle}>Device type:</Text>

          <SelectList data={data1} setSelected={setSelected} />

          {/* <Text style={styles.labelsStyle}>index:</Text> */}

          {/* <TextInput
            style={styles.labelsStyle}
            placeholder="enter index if needed"
            value={realIndex}
            onChangeText={(text) => {
              setRealIndex(text);
            }}
          /> */}

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
                  placeholder="220"
                  value={normalConsumption}
                  onChangeText={(text) => setNormalConsumptio(text)}
                />

                <Text style={styles.labelsStyle}>max power consumption:</Text>
                <TextInput
                  style={[styles.labelsStyle]}
                  placeholder="240"
                  value={improperConsumption}
                  onChangeText={(text) => setImproperConsumption(text)}
                />
              </View>
            )}
          </View>
          <View style={styles.buttonContainer}>
            {screen == "Home" && (
              <ButtonKitten
                style={styles.buttonKitten}
                textStyle={styles.buttonText}
                size="medium"
                status="success" // Green background colo onPress=
                onPress={() => {
                  let type = constants.INDEXTYPES[selected];

                  //console.log(index);
                  axios
                    .get(
                      `http://35.169.65.234:9464/workshop/mainScreen/addNewPlug?i_Title=${name}&i_Type=${type}&i_MinElectricityVolt=${normalConsumption}&i_MaxElectricityVolt=${improperConsumption}&i_UiIndex=${realIndex}`
                    )
                    .then((response) => {
                      if (type === "fridge") {
                        axios.get(
                          `http://35.169.65.234:9464/workshop/plugMediator/flipPlugModeAccordingToIndex?i_UiIndex=${index}`
                        );
                      }
                      console.log(response.data);
                      Alert.alert("Device added", "Device added succesfully", [
                        {
                          text: "OK",
                          onPress: () => navigation.navigate("Home"),
                        },
                      ]);
                    });
                }}
              >
                Add Device
              </ButtonKitten>
            )}
            {screen == "RealHome" && (
              <ButtonKitten
                style={styles.buttonKitten}
                textStyle={styles.buttonText}
                size="medium"
                status="success" // Green background colo onPress=
                onPress={() => {
                  let type = constants.INDEXTYPES[selected];

                  //console.log(index);
                  axios
                    .get(
                      `http://35.169.65.234:9464/workshop/mainScreen/addNewPlug?i_Title=${name}&i_Type=${type}&i_MinElectricityVolt=${normalConsumption}&i_MaxElectricityVolt=${improperConsumption}&i_UiIndex=10`
                    )
                    .then((response) => {
                      console.log(response.data);
                      Alert.alert("Device added", "Device added succesfully", [
                        {
                          text: "OK",
                          onPress: () => navigation.navigate("RealHome"),
                        },
                      ]);
                    });
                }}
              >
                Add REAL Device
              </ButtonKitten>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddNew;
