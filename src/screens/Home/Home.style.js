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

    width: 200,
    height: 50,
    borderRadius: 50, // Half of width and height makes the button circular
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    
    backgroundColor: "green", // Change to green color
    shadowColor: "green",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8.5,
    elevation: 6, // This is for Android shadow
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    
}
});
