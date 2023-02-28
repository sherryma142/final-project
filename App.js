import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet, Image } from "react-native";
import Home from "./src/screens/Home/Home";
import LiveShow from "./src/screens/LiveShow/LiveShow";
import AddNew from "./src/screens/AddNew/AddNew";
import Details from "./src/screens/Details/Details";
import ExistDetails from "./src/screens/ExistDetails/ExistDetails";
import SafeChild from "./src/screens/safeChild/SafeChild";
import SleepMode from "./src/screens/SleepMode/SleepMode";
import Settings from "./src/screens/Settings/Settings";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button } from "react-native-elements";
import Statistics from "./src/screens/Statistics/Statistics";
import DeviceStatistic from "./src/screens/DeviceStatistic/DeviceStatistic";
import AllDevicesStatistic from "./src/screens/AllDevicesStatistic/AllDevicesStatistic";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="LiveShow" component={LiveShow} />
          <Stack.Screen name="AddNew" component={AddNew} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="ExistDetails" component={ExistDetails} />
          <Stack.Screen name="SafeChild" component={SafeChild} />
          <Stack.Screen name="SleepMode" component={SleepMode} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Statistics" component={Statistics} />
          <Stack.Screen name="DeviceStatistic" component={DeviceStatistic} />
          <Stack.Screen name="AllDevicesStatistic" component={AllDevicesStatistic} />

        </Stack.Navigator>
      </ApplicationProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
