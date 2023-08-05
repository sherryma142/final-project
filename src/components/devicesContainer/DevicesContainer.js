import { View, Text } from "react-native";
import React from "react";
import { Item } from "../item/Item";
import styles from "./DevicesContainer.style";
import { Button } from "@ui-kitten/components";

const DevicesContainer = ({ listOfItems, navigation }) => {
  listOfItems.sort((a, b) => a.index > b.index);
  let cols = 3;
  const totalCells = 3 * 3;

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
                />
              ) : (
                <View />
              )}
            </View>
          ))}
        </View>
      ))}
      <View>
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          size="medium"
          status="success" // Green background colo
          onPress={() =>
            navigation.navigate("AddNew", {
              index: listOfItems.length,
              navigation: navigation,
            })
          }
        >
          Add New Device
        </Button>
      </View>
    </View>
  );
  // return (
  //   <View style={styles.container}>
  //     <View style={styles.rowDevices}>

  //       {listOfItems.map((item) => (
  //         <Item
  //           name={item.title}
  //           type={item.type}
  //           navigation={navigation}
  //           index={item.index}
  //           status={item.status}
  //         />
  //       ))}

  //       {listOfItems.length < 9 && (
  //         <Item
  //           name="add new"
  //           type="plus"
  //           navigation={navigation}
  //           index={listOfItems.length}
  //           status={"plus"}
  //         />
  //       )}
  //     </View>
  //   </View>
  // );
};

export default DevicesContainer;
