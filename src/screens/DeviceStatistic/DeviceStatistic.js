import {
  Dimensions,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./DeviceStatistic.style";
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

const DeviceStatistic = ({ route, navigation }) => {
  const { name } = route.params;
  const { index } = route.params;

  const [data, setData] = useState([]);
  const [usage, setUsage] = useState([]);

  React.useEffect(() => {
    axios
      .get(
        `http://192.168.1.251:9464/workshop/statisticsScreen/SimulateAnnualElectricityForPlug?i_UiIndex=${index}`
      )
      .then((response) => {
        setData(response.data);
      });

    axios
      .get(
        `http://192.168.1.251:9464/workshop/statisticsScreen/GetElectricityConsumptionTillNow?i_UiIndex=${index}`
      )
      .then((response) => {
        setUsage(response.data);
      });
  }, []);

  return (
    <View>
      <Text style={styles.item_title}>Device Name:</Text>
      <Text style={styles.item_name}>{name}</Text>
      <BarChart
        data={{
          labels: [
            "Jan",
            "Feb",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              data: data,
            },
          ],
        }}
        fromZero={true}
        segments={4}
        width={Dimensions.get("window").width}
        height={400}
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
            strokeWidth: 2, // optional, default 3
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
          height: 400,
          paddingBottom: 40,
        }}
      />

      {/* <Text style={styles.item_usage}>device usage:</Text>
      <Text style={styles.item_name}>{usage}</Text> */}
    </View>
  );
};

export default DeviceStatistic;
