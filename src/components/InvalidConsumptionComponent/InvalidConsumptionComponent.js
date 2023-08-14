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

const InvalidConsumptionComponent = ({ index, onHide }) => {
  console.log("sherry", index);
  const handleHide = () => {
    onHide(); // Call the onHide function passed as a prop
  };
  const [consumptionData, setConsumptionData] = useState(0);
  const intervalRef = useRef(null); // create a mutable reference to the interval ID
  const [isFound, setIsFound] = useState(false);
  const [alertShown, setAlertShown] = useState(false);

  // console.log(indexes);
  useEffect(() => {
    if (!isFound && !alertShown) {
      intervalRef.current = setInterval(() => {
        sendData(index).then((result) => {
          if (result === 1) {
            clearInterval(intervalRef.current);
            setIsFound(true);
          }
        });
      }, 5000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isFound, alertShown]);

  const sendData = async (index) => {
    console.log("index from invalid : ", index);
    axios
      .get(
        `http://35.169.65.234:9464/workshop/statisticsScreen/GetLastElectricityUsageForPlugByType?i_UiIndex=${index}&i_StatisticsType=single`
      )
      .then((response) => {
        console.log("res data: ", response.data);
        setConsumptionData(response.data);
        console.log("consumption:" + consumptionData);
        Alert.alert(
          "WARNNING",
          "One of your devices has reached a higher than normal power consumption.\n do you want to turn off this device?",
          [
            {
              text: "No",
              onPress: () => {
                console.log("Cancel Pressed");
                handleHide();
              },
              style: "cancel",
            },
            {
              text: "Yes",
              onPress: () => {
                axios
                  .get(
                    `http://35.169.65.234:9464/workshop/plugMediator/flipPlugModeAccordingToIndex?i_UiIndex=${index}`
                  )
                  .then((response) => {
                    console.log(response.data);
                    setConsumptionData(response.data);
                  });
                handleHide();
              },
            },
          ]
        );
        setIsFound(true);
        //console.log(isFound);
        axios
          .get(
            `http://35.169.65.234:9464/workshop/on_off_screen/doNotTurnOffAfterOverTimeOrInvalidConsumption?i_UiIndex=${index}&i_Type=invalidConsumption`
          )
          .then((response) => {
            console.log(response.data);
          });
        return 1;
      });
  };

  return <View></View>;
};

export default InvalidConsumptionComponent;
