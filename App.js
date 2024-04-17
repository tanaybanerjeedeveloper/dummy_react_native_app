import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GoalsInput from './components/GoalsInput';
import GoalsItem from './components/GoalsItem';

export default function App() {

  const [goalsList, setGoalsList] = useState([]);

  function addToGoalsList(enteredText) {
    setGoalsList((oldGoalsList) => [...oldGoalsList, { id: Math.random().toString(), text: enteredText }]);

  }

  function deleteItemInGoalsList(id) {
    setGoalsList((currentList) => currentList.filter((item) => item.id !== id));
  }

  return (
    <View style={styles.appContainer}>

      <GoalsInput add={addToGoalsList} />

      <View style={styles.goalsListContainer}>
        <FlatList data={goalsList} renderItem={(itemData) => {
          return <GoalsItem text={itemData.item.text} delelte={deleteItemInGoalsList} id={itemData.item.id} />
        }} keyExtractor={(item, index) => item.id} alwaysBounceVertical={false} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 55,
    paddingHorizontal: 20,
  },

  goalsListContainer: {
    flex: 5,
  }

});
