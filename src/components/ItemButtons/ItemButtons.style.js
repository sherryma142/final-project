import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "black",
    flexBasis: "40%",

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
    width: 200,
    height: 50,
    borderRadius: 50, // Half of width and height makes the button circular
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    
    backgroundColor: "green", // Change to green color
    shadowColor: "green",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8.5,
    elevation: 6, // This is for Android shadow
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
