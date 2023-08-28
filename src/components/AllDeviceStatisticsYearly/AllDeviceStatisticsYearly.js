import {
  Dimensions,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./AllDeviceStatisticsYearly.style";
import axios from "axios";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const AllDeviceStatisticsYearly = () => {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    axios
      .get(
        `http://35.169.65.234:9464/workshop/statisticsScreen/SimulateAnnualElectricityForAllPlugs`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        console.log("sherry", e);
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.chartScrollView}>
      <View style={styles.container}>
        <Text style={styles.labelsStyle}>All devices statistics - yearly</Text>
        <View style={styles.chartContainer}>
          <ScrollView
            horizontal
            contentContainerStyle={styles.chartScrollView}
            showsHorizontalScrollIndicator={false}
          >
            <BarChart
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                datasets: [
                  {
                    data: data,
                  },
                ],
              }}
              fromZero={true}
              segments={6}
              width={Dimensions.get("window").width * 2.6}
              height={Dimensions.get("window").height - 60}
              verticalLabelRotation={45}
              chartConfig={{
                backgroundColor: "white",
                backgroundGradientFrom: "gray",
                backgroundGradientTo: "green",
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 46,
                  flex: 1,
                  justifyContent: "center",
                  // strokeWidth: 2, // optional, default 3
                  barPercentage: 0.5,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726",
                },
              }}
              bezier
              style={{
                // marginVertical: 2,
                //  borderRadius: 2,
                paddingTop: 40,
                //  height: 400,
                paddingBottom: 40,
              }}
            />
          </ScrollView>
        </View>
        {/* <Text style={styles.item_usage}>device usage:</Text>
      <Text style={styles.item_name}>{usage}</Text> */}
      </View>
    </ScrollView>
  );
};

export default AllDeviceStatisticsYearly;
