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
    flex: 1,
    padding: 20,
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
    justifyContent: "space-between",
    marginBottom: 20,
  },
  scrollViewContainer: {
    flexGrow: 1, // Allow the ScrollView to take up available space
  },
  cell: {
    flexGrow: 1,
    width: "33%",
    height: 120,
    padding: 20,
    //borderWidth: 1,
    //  borderColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Set the border radius to round the cell corners
    overflow: "hidden", // Hide any content that goes beyond the rounded corners
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center", // Center the button vertically
    alignItems: "center", // Center the button horizontally
    marginBottom: 20,
    paddingLeft: 25,
  },
  button: {
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
