import {
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    Button,
    Alert,
  } from "react-native";
  import React, { useEffect, useState, useRef } from "react";
  import axios from "axios";
  import * as Location from "expo-location";
  // rnfe
  
  const InvalidConsumptionComponent = () => {
    const [consumptionData, setConsumptionData] = useState(0);
    const intervalRef = useRef(null); // create a mutable reference to the interval ID
    const [isFound, setIsFound] = useState(false);

        useEffect(() => {
        if (!isFound) {
            intervalRef.current = setInterval(() => {
            if (sendData() === 1) {
                clearInterval(intervalRef.current); // clear the interval using the mutable reference
                setIsFound(true);
            }
            }, 5000);
        }

        return () => clearInterval(intervalRef.current); // clear the interval on unmount using the mutable reference
        }, [isFound]);

      const sendData = () => {
        axios
          .get(
            `http://192.168.1.112:9464/workshop/statisticsScreen/GetElectricityConsumptionInLiveForSingleUsage?i_UiIndex=0`
          )
          .then((response) => {
            console.log("res data: " , response.data);
            setConsumptionData(response.data);
            console.log(consumptionData);
            if (response.data === 520) {
              Alert.alert(
                "WARNNING",
                "One of your devices has reached a higher than normal power consumption.\n do you want to turn this device?",
                [
                  {
                    text: "No",
                    onPress: () => {
                      console.log("Cancel Pressed");
                    },
                    style: "cancel",
                  },
                  {
                    text: "Yes",
                    onPress: () => {
                      axios
                        .get(
                            `http://192.168.1.112:9464/workshop/plugMediator/flipPlugModeAccordingToIndex?i_UiIndex=0`
                        )
                        .then((response) => {
                            console.log(response.data)
                          setConsumptionData(response.data);
                        });
                    },
                  },
                ]
              );

              setIsFound(true);
              console.log(isFound);
              return 1;
            }
            else{
                console.log("sherry")
            }
            console.log(isFound);
            return 0;
          });
      };
  
    return <View></View>;
  };
  
  export default InvalidConsumptionComponent;
  