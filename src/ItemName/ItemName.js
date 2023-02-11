import { View, Text, CheckBox } from "react-native";
import React from "react";
import styles from "./Item.style";

const [isSelected, setSelection] = useState(false);

export const ItemName = (name) => {
  return (
    <View style={styles.container}>
        <View style={styles.checkboxContainer}>
            <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
            />
            <Text style={styles.item_name}>{name}</Text>
        </View>
    </View>
  );
};

export default ItemName;

