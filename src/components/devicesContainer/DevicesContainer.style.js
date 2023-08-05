import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: `#d3d3d3`,
  //   alignItems: "center",
  //   justifyContent: "flex-start",
  // },
  // rowDevices: {
  //   alignItems: "flex-start",
  //   justifyContent: "center",
  //   flexDirection: "row",
  //   alignContent: "center",
  //   marginHorizontal: "1%",
  //   flexWrap: "wrap",
  // },
  container: {
    width: "90%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Set the border radius to round the corners
    overflow: "hidden", // Hide any content that goes beyond the rounded corners
    paddingLeft: 40,
  },
  row: {
    flexDirection: "row",
    width: "100%",
  },
  cell: {
    flexGrow: 1,
    width: "33%",
    height: 100,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Set the border radius to round the cell corners
    overflow: "hidden", // Hide any content that goes beyond the rounded corners
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
