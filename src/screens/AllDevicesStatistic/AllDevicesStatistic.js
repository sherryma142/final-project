import {
  Dimensions,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./AllDevicesStatistic.style";
import axios from "axios";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const DeviceStatistic = () => {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    axios
      .get(
        `http://192.168.1.112:9464/workshop/statisticsScreen/SimulateAnnualElectricityForAllPlugs`
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.item_title}>All devices statistics</Text>

      <ScrollView horizontal={true}>
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
          width={Dimensions.get("window").width} // from react-native
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
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            //marginVertical: 2,
            // borderRadius: 2,
            paddingTop: 40,
            height: 400,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default DeviceStatistic;
