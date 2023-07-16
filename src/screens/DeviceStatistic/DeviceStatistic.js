import {
  Dimensions,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
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
import DeviceStatisticYearly from "../../components/DeviceStatisticsYearly/DeviceStatisticsYearly";
import DeviceStatisticWeekly from "../../components/DeviceStatisticsWeekly/DeviceStatisticsWeekly";

const DeviceStatistic = ({ route, navigation }) => {
  const { typeStatistics } = route.params;
  console.log(typeStatistics);
  const [isYearly, setIsYearly] = useState(false);
  const [isWeekly, setIsWeekly] = useState(false);

  useEffect(() => {
    if (typeStatistics === 2) {
      setIsWeekly(true);
    } else setIsYearly(true);
  }, [typeStatistics]);

  return (
    <View>
      {isYearly && (
        <DeviceStatisticYearly route={route} navigation={navigation} />
      )}
      {isWeekly && (
        <DeviceStatisticWeekly route={route} navigation={navigation} />
      )}
    </View>
  );
};

export default DeviceStatistic;
