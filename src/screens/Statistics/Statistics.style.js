import { StyleSheet } from "react-native";
import { SlideInRight } from "react-native-reanimated";

export default StyleSheet.create({
  container1: {
   
    flex: 1,
 //   backgroundColor: `#d3d3d3`,
  },
  container2: {

    flex: 1,
    padding: 24,
   // alignItems: 'center',
   // backgroundColor: `#d3d3d3`,
  },
  // container: {
  //   flex: 1,
  //   flexDirection: "column",
  //   justifyContent: "flex-start"
  // },
  titleContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15
  },

  hadder: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#4caf50", // Green text color
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2,
  },

  labelsStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    marginRight: 10
  },
  button: {
    marginTop: 10,
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 30, // Rounded corners
    backgroundColor: "#4caf50", //
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    fontSize: 18, // Font size
    fontWeight: "bold", // Font weight
    color: "white", // Text color
  },
  Buttons: {
    flex: 1,
    marginBottom: 16,
  },
  CheckBoxContainer: {
    marginBottom: 15,
   alignContent: "center",
  },
  checkbox: {
    alignSelf: "flex-start",
  },
});
