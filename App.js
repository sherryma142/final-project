import React, { useState, useEffect } from "react";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet,TouchableOpacity } from "react-native";
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
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  const [data, setData] = useState([]);
  const [isNotEmpty,setIsNotEmpty] = useState(true);

  let newData=[];

  axios
    .get(
      `http://35.169.65.234:9464/workshop/mainScreen/FetchPlugsFromDB`
    )
    
  axios
    .get(
      `http://35.169.65.234:9464/workshop/mainScreen/SeePlugsAtDB`
    )
    .then((response) => {
     // console.log(response.data)
     response.data.map((object) => {
      if(object.index!="10")
      {
     //   console.log(object);
        newData.push(object);
      }
  }


)

setData(newData);

     
    });

  return (

  
    <Tab.Navigator
      screenOptions={({ route,data }) => ({
      
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "SafeChild") {
            iconName = focused ? "ios-pulse" : "ios-pulse-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-settings" : "ios-settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarButton: (props) => <CustomTabBarButton {...props} data={data} name={route.name}/>,
      })}
    >

      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="SafeChild"
        options={{ tabBarLabel: "Safe Child" }}
        component={SafeChild}
        initialParams={{data:data}}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const CustomTabBarButton = ({ data , name}) => {
  const navigation = useNavigation();
 
  const navigateToTabScreen = () => {
    console.log("nav" , data)
    // Pass additional parameters as the second argument to navigation.navigate
    navigation.navigate(name, { data: data});
  };
  return (
    <TouchableOpacity onPress={navigateToTabScreen}>
            <Ionicons name="ios-settings" size={26} color="ios-settings" />
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={MainTabNavigator}
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
