import { StyleSheet } from "react-native";
import { SlideInRight } from "react-native-reanimated";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    //alignItems: "flex-end",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    alignContent: "center",
  },
  hadder: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
  },

  labelsStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    //marginHorizontal: 100,
    color: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  Buttons: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 80,
  },
  CheckBoxContainer: {
    flexDirection: "row",
    alignContent: "center",
  },
  checkbox: {
    alignSelf: "center",
  },
});
