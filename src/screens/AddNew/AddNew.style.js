import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
    marginBottom: 15,
    justifyContent: "center",
  },
  labelsStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    marginRight: 10,
    paddingBottom: 5,
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
    marginBottom: 15,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  button: {
    paddingBottom: 15,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center", // Center the button vertically
    alignItems: "center", // Center the button horizontally
    marginBottom: 20,
  },
  buttonKitten: {
    marginTop: 10,
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: "#4caf50",
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
