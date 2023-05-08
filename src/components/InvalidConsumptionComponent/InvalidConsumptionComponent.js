import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";
import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import * as Location from "expo-location";
// rnfe

const InvalidConsumptionComponent = ({ indexes }) => {
  const [consumptionData, setConsumptionData] = useState(0);
  const intervalRef = useRef(null); // create a mutable reference to the interval ID
  const [isFound, setIsFound] = useState(false);

  useEffect(() => {
    if (!isFound) {
      intervalRef.current = setInterval(() => {
        for (let i = 0; i < indexes; i++) {
          if (sendData(i) == 1) {
            clearInterval(intervalRef.current); // clear the interval using the mutable reference
            setIsFound(true);
          }
        }
      }, 5000);
    }

    return () => clearInterval(intervalRef.current); // clear the interval on unmount using the mutable reference
  }, [isFound]);

  const sendData = (index) => {
    console.log("index from invalid : ", index);

    axios
      .get(
        `http://192.168.1.112:9464/workshop/statisticsScreen/GetLastElectricityUsageForPlugByType?i_UiIndex=${index}&i_StatisticsType=single`
      )
      .then((response) => {
        console.log("res data: ", response.data);
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
                      `http://192.168.1.112:9464/workshop/plugMediator/flipPlugModeAccordingToIndex?i_UiIndex=${index}`
                    )
                    .then((response) => {
                      console.log(response.data);
                      setConsumptionData(response.data);
                    });
                },
              },
            ]
          );

          setIsFound(true);
          console.log(isFound);
          axios
            .get(
              `http://192.168.1.112:9464/workshop/on_off_screen/doNotTurnOffAfterOverTimeOrInvalidConsumption?i_UiIndex=${index}&i_Type=invalidConsumption`
            )
            .then((response) => {
              console.log(response.data);
            });
          return 1;
        } else {
          console.log(isFound);
          return 0;
        }
      });
  };

  return <View></View>;
};

export default InvalidConsumptionComponent;
