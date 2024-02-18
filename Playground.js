import { useState } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import GoalItem from "./GoalItem";
import GoalInput from "./GoalInput";

export const Playground = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [goal, setGoal] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const goalInputHander = (enteredText) => {
    setGoal(enteredText);
  };
  const addGoalHander = () => {
    setCourseGoals((currentCourseGoals) => {
      const data = { text: goal, id: getRandomInt(1, 100) };
      return [...currentCourseGoals, data];
    });
    onCancelModal();
  };
  const onDeleteText = (id) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== id)
    );
  };

  const onCancelModal = () => {
    setModalVisible(false);
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min); // Ensure the minimum is a whole number
    max = Math.floor(max); // Ensure the maximum is a whole number
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={() => setModalVisible(true)}
      />
      {modalVisible && (
        <GoalInput
          goalInputHander={goalInputHander}
          addGoalHander={addGoalHander}
          onCancelModal={onCancelModal}
          visible={modalVisible}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => {
            return <GoalItem goal={item} onDeleteText={onDeleteText} />;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
