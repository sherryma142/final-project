import React, { useState, useEffect } from "react";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, TouchableOpacity } from "react-native";
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
import SampleConsumption from "./src/screens/SampleConsumption/SampleConsumption";
import RealHome from "./src/screens/RealHome/RealHome";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator({ data }) {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor = focused ? "green" : "gray"; // Set the desired icon color here

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "SafeChild") {
            iconName = focused ? "ios-body" : "ios-body-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-settings" : "ios-settings-outline";
          }
          else if (route.name === "SleepMode") {
            iconName = focused ? "ios-bed" : "ios-bed-outline";
          }
          else if (route.name === "Statistics") {
            iconName = focused ? "ios-pulse" : "ios-pulse-outline";
          }
          return <Ionicons name={iconName} size={size} color={iconColor} />;
        },
        
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="SafeChild"
        options={{ tabBarLabel: "Safe Child"}}
        component={SafeChild}
        initialParams={{ data: data }}
      />
       <Tab.Screen
        name="SleepMode"
        options={{ tabBarLabel: "Sleep Mode"}}
        component={SleepMode}
        initialParams={{ data: data }}
      />
       <Tab.Screen
        name="Statistics"
        options={{ tabBarLabel: "Statistics"}}
        component={Statistics}
        initialParams={{ data: data }}
      />
      <Tab.Screen name="Settings" component={Settings} />

      
    </Tab.Navigator>

    
  );
}

const CustomTabBarButton = ({ data, name, iconName, iconColor }) => {
  const navigation = useNavigation();

  const navigateToTabScreen = () => {
    console.log("nav", data);
    // Pass additional parameters as the second argument to navigation.navigate
    navigation.navigate(name, { data: data });
  };
  return (
    <TouchableOpacity onPress={navigateToTabScreen}>
      <Ionicons name="settings" size={26} color={iconColor} />
    </TouchableOpacity>
  );
};
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseFetch = await axios.get(
          "http://35.169.65.234:9464/workshop/mainScreen/FetchPlugsFromDB"
        );
        const responseGet = await axios.get(
          "http://35.169.65.234:9464/workshop/mainScreen/SeePlugsAtDB"
        );
        const data = responseGet.data.filter((object) => object.index !== "10");
        setData(data);
        console.log("Fetched Data:", data); // Log the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={() => <MainTabNavigator data={data} />}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="LiveShow" component={LiveShow} />
          <Stack.Screen name="AddNew" component={AddNew} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="ExistDetails" component={ExistDetails} />
          <Stack.Screen name="SleepMode" component={SleepMode} />
          <Stack.Screen name="Statistics" component={Statistics} />
          <Stack.Screen name="DeviceStatistic" component={DeviceStatistic} />
          <Stack.Screen name="RealHome" component={RealHome} />
          <Stack.Screen
            name="AllDevicesStatistic"
            component={AllDevicesStatistic}
          />
          <Stack.Screen
            name="SampleConsumption"
            component={SampleConsumption}
          />
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

export default App;
