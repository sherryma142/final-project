import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    //justifyContent: "flex-start",
    //alignItems: "flex-end",
    // borderColor: "black",
    //flexBasis: "10%",
  },
  item_name: {
    fontWeight: "bold",
    fontSize: 18,
    alignItems: "center",
  },

  item_title: {
    fontSize: 18,
    alignItems: "center",
    fontWeight: "bold",
    backgroundColor: "cornflowerblue",
  },
  item_usage: {
    fontSize: 18,
    alignItems: "center",
    fontWeight: "bold",
    paddingTop: 20,
    backgroundColor: "cornflowerblue",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
