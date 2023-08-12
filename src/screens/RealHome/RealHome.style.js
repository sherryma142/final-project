import { StyleSheet ,Dimensions} from "react-native";
import { SlideInRight } from "react-native-reanimated";
const windowWidth = Dimensions.get("window").width;
const logoWidth = windowWidth * 0.8; // Adjust the percentage as needed


export default StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "green",
    //justifyContent: "flex-start",
    // flexWrap: "wrap",
   //  alignItems: "flex-end", // Move the logo to the right

    flex: 1,
    backgroundColor: `#d3d3d3`,
    
  },
  container1: {
    // flex: 1,
    // backgroundColor: "green",
   // justifyContent: "flex-start",
    // flexWrap: "wrap",
    // alignContent: "center",
   // alignItems: "flex-end", // Move the logo to the right


    flex: 1,
    //padding: 24,
    //alignItems: 'center',
    backgroundColor: `#d3d3d3`,
  },
  titleContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15
  },

  hadder: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#4caf50", // Green text color
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2,
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
