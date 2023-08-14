import {
  Dimensions,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./AllDeviceStatisticsWeekly.style";
import axios from "axios";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const AllDeviceStatisticsWeekly = () => {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    axios
      .get(
        `http://35.169.65.234:9464/workshop/statisticsScreen/SimulateWeeklyElectricityForAllPlugs`
      )
      .then((response) => {
        setData(response.data);
        console.log(response);
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.chartScrollView}>
      <View style={styles.container}>
        <Text style={styles.labelsStyle}>All devices statistics- weekly</Text>
        <View style={styles.chartContainer}>
          <ScrollView
            horizontal
            contentContainerStyle={styles.chartScrollView}
            showsHorizontalScrollIndicator={false}
          >
            <BarChart
              data={{
                labels: [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                datasets: [
                  {
                    data: data,
                  },
                ],
              }}
              fromZero={true}
              segments={6}
              width={Dimensions.get("window").width * 1.6}
              height={Dimensions.get("window").height - 60}
              verticalLabelRotation={45}
              chartConfig={{
                backgroundColor: "gray",
                backgroundGradientFrom: "gray",
                backgroundGradientTo: "gray",
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
                paddingTop: 40,
                paddingBottom: 40,
              }}
            />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default AllDeviceStatisticsWeekly;
