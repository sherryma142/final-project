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
    alignItems: "center",
   // backgroundColor: "red",
   fontWeight: "bold",

  },
  item_image: {
    width: 40,
    height: 40,
    padding: 10,
    //backgroundColor: "green",
  },
  switch: {
    alignItems: 'center',
    justifyContent: "flex-start",
  },
});
