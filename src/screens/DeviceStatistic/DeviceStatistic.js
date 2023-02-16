import { Dimensions, View, Text, ScrollView, TouchableHighlight } from "react-native";
import React from "react";
import styles from "./DeviceStatistic.style";


import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  
  const DeviceStatistic = ({route, navigation }) => {
    const { name } = route.params;
  return (
    <View style={styles.container}>
            <Text style={styles.item_name}>Device Name:</Text>
            <Text style={styles.item_name}>{name.name}</Text>
            <ScrollView horizontal={true}> 
                <BarChart
                    data={{
                      labels: ["January", "February", "March", "April", "May",
                      "June","July","August","September","October","November", "December"],
                      datasets: [
                        {
                          data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                          ]
                        }
                      ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={400}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    verticalLabelRotation={40}
                    chartConfig={{
                      backgroundColor: "#e26a00",
                      backgroundGradientFrom: "#fb8c00",
                      backgroundGradientTo: "#ffa726",
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      style: {
                        borderRadius: 16
                      },
                      propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                      }
                    }}
                    bezier
                    style={{
                      marginVertical: 2,
                      borderRadius: 2,
                      paddingTop : 40
                    }}
                />
            </ScrollView>

      <Text style={styles.item_name}>device usage:</Text>
      
    </View>



  );
};

export default DeviceStatistic;
