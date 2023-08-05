import {
  Dimensions,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./DeviceStatisticsYearly.style";
import StatisticsMock from "../../mocks/statisticesMock1";
import axios from "axios";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const DeviceStatisticYearly = ({ route, navigation }) => {
  const { name } = route.params;
  const { index } = route.params;

  const [data, setData] = useState([]);
  const [usage, setUsage] = useState([]);

  React.useEffect(() => {
    axios
      .get(
        `http://35.169.65.234:9464/workshop/statisticsScreen/SimulateAnnualElectricityForPlug?i_UiIndex=${index}`
      )
      .then((response) => {
        setData(response.data);
      });

    axios
      .get(
        `http://35.169.65.234:9464/workshop/statisticsScreen/GetElectricityConsumptionTillNow?i_UiIndex=${index}`
      )
      .then((response) => {
        setUsage(response.data);
      });
  }, []);

  return (
    <ScrollView>
      <Text style={styles.item_title}>Device Name:</Text>
      <Text style={styles.item_name}>{name}</Text>
      <View style={styles.chartContainer}>
        <BarChart
          data={{
            labels: ["J", "F", "M", "A", "M", "Jun", "Jul", "A", "S", "O", "N", "D"],
            datasets: [
              {
                data: data,
              },
            ],
          }}
          fromZero={true}
          segments={4}
          width={Dimensions.get("window").width - 40} // Adjusted width to give some margin on both sides
          height={400} // You can increase the height if needed
          verticalLabelRotation={40}
          chartConfig={{
            backgroundColor: "#FF3399",
            backgroundGradientFrom: "#99FFFF",
            backgroundGradientTo: "#FF3399",
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
              flex: 1,
              justifyContent: "center",
              strokeWidth: 2,
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
            marginVertical: 2,
            borderRadius: 2,
            paddingTop: 40,
            paddingBottom: 40,
          }}
        />
      </View>
      {/* <Text style={styles.item_usage}>device usage:</Text>
      <Text style={styles.item_name}>{usage}</Text> */}
    </ScrollView>
  );
};

export default DeviceStatisticYearly;
