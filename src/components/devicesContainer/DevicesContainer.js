import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Item } from "../item/Item";
import styles from "./DevicesContainer.style";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const DevicesContainer = ({ listOfItems, screen }) => {
  listOfItems.sort((a, b) => a.index > b.index);
  let cols = 3;
  const totalCells = 3 * 3;
  const navigation = useNavigation(); // Use the useNavigation hook

  // Helper function to chunk the data into rows and cells
  const chunkData = () => {
    const chunkedData = [];
    let currentIndex = 0;

    while (currentIndex < totalCells) {
      const rowData = listOfItems.slice(currentIndex, currentIndex + cols);
      while (rowData.length < cols) {
        rowData.push({}); // Add empty cells if needed (using an empty object here)
      }
      chunkedData.push(rowData);
      currentIndex += cols;
    }
    return chunkedData;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {chunkData().map((rowData, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <View key={cellIndex} style={styles.cell}>
                {Object.keys(cellData).length !== 0 ? (
                  <Item
                    name={cellData.title}
                    type={cellData.type}
                    navigation={navigation}
                    index={cellData.index}
                    status={cellData.status}
                    screen={screen}
                  />
                ) : (
                  <View />
                )}
              </View>
            ))}
          </View>
        ))}
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            textStyle={styles.buttonText}
            size="large"
            status="success" // Green background colo
            onPress={() =>
              navigation.navigate("AddNew", {
                data: listOfItems,
                index: listOfItems.length,
                screen: screen,
                navigation: navigation,
              })
            }
          >
            Add New Device
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default DevicesContainer;
