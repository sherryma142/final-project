import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "black",
    flexBasis: "30%",
  },
  item_name: {
    fontSize: 15,
    paddingTop: 10,
    alignItems: "center",
    //backgroundColor: "red",
  },
  item_image: {
    width: 60,
    height: 60,
    padding: 20,
    //backgroundColor: "green",
    borderRadius: 30,
  },
  inLive: {
    width: 10,
    height: 10,
    borderRadius: 10,
    position: "relative",
    top: 5,
    backgroundColor: "green",
  },
  offLive: {
    width: 10,
    height: 10,
    borderRadius: 10,
    position: "relative",
    top: 5,
    backgroundColor: "red",
    alignItems: "center",
  },
});
