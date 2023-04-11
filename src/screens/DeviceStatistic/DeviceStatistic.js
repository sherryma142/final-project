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
import DeviceStatisticYearly from "../../components/DeviceStatisticsYearly/DeviceStatisticsYearly";
const DeviceStatistic = ({ route, navigation }) => {
  const { name } = route.params;
  const { index } = route.params;
  const { typeStatistics } = route.params;

  const [isYearly, setIsYearly] = useState(false);
  const [isDaily, setIsDaily] = useState(false);
  const [isWeekly, setIsWeekly] = useState(false);

  if (typeStatistics === 0) {
    setIsYearly(true);
  }

  return <View>{isYearly && <DeviceStatisticYearly />}</View>;
};

export default DeviceStatistic;
