import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem({ text, onDeleteItem, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "black" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({pressed}) =>pressed && styles.pressItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "gray",
},
pressItem:{
    opacity:0.5
},
goalText: {
    color: "white",
    padding: 8,
  },
});
