import { StyleSheet, Text, Pressable } from "react-native";

const GoalItem = ({goal, onDeleteText}) => {
    return(
      <Pressable
       android_ripple={{color: '#210644'}}
       onPress={() => onDeleteText(goal.id)}
       style={({pressed}) => pressed && {opacity: 0.5}}
       >
        <Text key={goal.id} style={styles.goalItem}>{goal.text}</Text>
      </Pressable>
    );
};

const styles = StyleSheet.create({
    goalItem:{
      margin: 8,
      padding: 8,
      borderRadius: 6,
      backgroundColor: "#5e0acc",
      color: "#fff",
    }
  });
export default GoalItem;
