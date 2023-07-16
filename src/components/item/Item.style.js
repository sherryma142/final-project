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
    paddingTop: 40,
    alignItems: "center",
    //backgroundColor: "red",
  },
  item_image: {
    width: 40,
    height: 40,
    padding: 10,
    //backgroundColor: "green",
  },
  inLive: {
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    top: 20,
    backgroundColor: 'green',
  },
  offLive: {
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    top: 20,
    backgroundColor: 'red',
  },

});
