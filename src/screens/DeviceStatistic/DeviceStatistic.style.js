import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    borderColor: "black",
    flexBasis: "40%",

  },
  item_name: {
    fontSize: 15,
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: "red",
  },
  item_image: {
    width: 40,
    height: 40,
    padding: 10,
    //backgroundColor: "green",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
