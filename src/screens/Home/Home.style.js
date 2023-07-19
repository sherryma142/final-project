import { StyleSheet } from "react-native";
import { SlideInRight } from "react-native-reanimated";

export default StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "green",
    // justifyContent: "flex-start",
    // flexWrap: "wrap",
    // alignContent: "center",

    flex: 1,
    backgroundColor: `#d3d3d3`,
  },
  container1: {
    // flex: 1,
    // backgroundColor: "green",
    // justifyContent: "flex-start",
    // flexWrap: "wrap",
    // alignContent: "center",

    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: `#d3d3d3`,
  },
  hadder: {
    fontSize: 60,
    paddingTop: 30,
    alignItems: "flex-start",
    justifyContent: "center",
    color: 'green',
    fontWeight: 'bold',


  },
  liveShow: {},
  settings: {},
  Buttons: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 80,
  },
  Button:{
    flex: 1,
    marginleft: 10,
    marginTop: 10
  }
});
