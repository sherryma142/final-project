import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: `#d3d3d3`,

  },
  hadder: {
    fontSize: 60,
    paddingTop: 60,
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
