import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: `#d3d3d3`,

  },
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
  Input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textLabel: {
    marginTop: -40,
    marginRight: 80,
    marginBottom: 10,
  },
  scrollView: {
    marginHorizontal: 10,
  },
 switch: {
    alignItems: 'center',
    justifyContent: "flex-start",
    marginTop: -50,
    marginRight:220
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
});
