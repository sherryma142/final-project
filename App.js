import React, { useEffect } from "react";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

import Home from "./src/screens/Home/Home";
import AddNew from "./src/screens/AddNew/AddNew";
import Details from "./src/screens/Details/Details";
import ExistDetails from "./src/screens/ExistDetails/ExistDetails";
import SafeChild from "./src/screens/safeChild/SafeChild";
import SleepMode from "./src/screens/SleepMode/SleepMode";
import Settings from "./src/screens/Settings/Settings";
import Statistics from "./src/screens/Statistics/Statistics";
import DeviceStatistic from "./src/screens/DeviceStatistic/DeviceStatistic";
import AllDevicesStatistic from "./src/screens/AllDevicesStatistic/AllDevicesStatistic";
import RealHome from "./src/screens/RealHome/RealHome";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
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
          } else if (route.name === "SleepMode") {
            iconName = focused ? "ios-bed" : "ios-bed-outline";
          } else if (route.name === "Statistics") {
            iconName = focused ? "ios-pulse" : "ios-pulse-outline";
          } else if (route.name === "RealHome") {
            iconName = focused ? "ios-aperture" : "ios-aperture-outline";
          }
          return <Ionicons name={iconName} size={size} color={iconColor} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: "Home", headerTitleAlign: "center" }} />
      <Tab.Screen name="SafeChild" component={SafeChild} options={{ tabBarLabel: "Safe Child" , headerTitleAlign: "center"}} />
      <Tab.Screen name="SleepMode" component={SleepMode} options={{ tabBarLabel: "Sleep Mode" , headerTitleAlign: "center"}} />
      <Tab.Screen name="Statistics" component={Statistics} options={{ tabBarLabel: "Statistics" , headerTitleAlign: "center"}} />
      <Tab.Screen name="RealHome" component={RealHome} options={{ tabBarLabel: "Real Home", headerTitleAlign: "center" }} />
      <Tab.Screen name="Settings" component={Settings} options={{ tabBarLabel: "Settings" , headerTitleAlign: "center"}} />
    </Tab.Navigator>
  );
}

function App() {
  useEffect(() => {
    axios.get("http://35.169.65.234:9464/workshop/mainScreen/FetchPlugsFromDB");
  }, []);

  const CustomTabBarButton = ({ data, name, iconName, iconColor }) => {
    const navigation = useNavigation();

    const navigateToTabScreen = () => {
      navigation.navigate(name, { data: data });
    };

    return (
      <TouchableOpacity onPress={navigateToTabScreen}>
        <Ionicons name="settings" size={26} color={iconColor} />
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Stack.Navigator>
        <Stack.Screen
            name="Main"
            component={MainTabNavigator}
            options={{ headerShown: false}}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              title: "Details",
              headerTitleAlign: "center", // Set title alignment to center
            }}
          />
          <Stack.Screen
            name="AddNew"
            component={AddNew}
            options={{
              title: "Add New",
              headerTitleAlign: "center", // Set title alignment to center
            }}
            ></Stack.Screen>

          <Stack.Screen
            name="DeviceStatistic"
            component={DeviceStatistic}
            options={{
              title: "DeviceStatistic",
              headerTitleAlign: "center", // Set title alignment to center
            }}
          />
          <Stack.Screen
            name="AllDevicesStatistic"
            component={AllDevicesStatistic}
            options={{
              title: "AllDevicesStatistic",
              headerTitleAlign: "center", // Set title alignment to center
            }}
          />
                      

        </Stack.Navigator>
      </ApplicationProvider>
    </NavigationContainer>
  );
}

export default App;
