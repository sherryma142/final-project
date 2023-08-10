import { StyleSheet } from "react-native";

export default StyleSheet.create({
  
    scrollViewContainer: {
        flexGrow: 1,
        padding: 20,
      },
      container: {
        flex: 1,
      },
      chartContainer: {
        alignItems: "center",
        marginLeft: 10, // Add margin to move the chart 10 units to the left
        marginRight: 10,
      },
      
      labelsStyle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#4caf50", // Green text color
        textAlign: "center",
        textShadowColor: "rgba(0, 0, 0, 0.2)",
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 2,
      },
});
