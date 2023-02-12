import { View, Text ,Pressable} from "react-native";
import React ,{useState} from "react";
import styles from "./ItemName.style";
import { Ionicons } from '@expo/vector-icons';

export const ItemName = ({name}) => {

  const [checked, setChecked] = useState(false);

  function MyCheckbox() {
    const [checked, setChecked] = useState(false);
    return (
      <Pressable
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={() => setChecked(!checked)}>
        {checked && <Ionicons name="checkmark" size={20} color="white" />}
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>{name}</Text>
        <MyCheckbox />
      </View>
    </View>

  );
};

export default ItemName;

