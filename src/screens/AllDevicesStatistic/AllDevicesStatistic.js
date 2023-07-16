import {
  Dimensions,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
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
import AllDeviceStatisticsYearly from "../../components/AllDeviceStatisticsYearly/AllDeviceStatisticsYearly";
import AllDeviceStatisticsWeekly from "../../components/AllDeviceStatisticsWeekly/AllDeviceStatisticsWeekly";
const AllDevicesStatistic = ({ route, navigation }) => {
  const { typeStatistics } = route.params;
  console.log("sherry", typeStatistics);
  const [isYearly, setIsYearly] = useState(false);
  const [isWeekly, setIsWeekly] = useState(false);

  useEffect(() => {
    if (typeStatistics === 1) {
      setIsWeekly(true);
    } else setIsYearly(true);
  }, [typeStatistics]);

  return (
    <View>
      {isYearly && <AllDeviceStatisticsYearly />}
      {isWeekly && <AllDeviceStatisticsWeekly />}
    </View>
  );
};

export default AllDevicesStatistic;
