import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from 'react';

function GoalsInput({ add }) {
    const [goalText, setGoalText] = useState('');

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="What is your goal?" style={styles.textInput} value={goalText} onChangeText={(value) => setGoalText(value)} />
            <Button title="Add" onPress={(value) => {
                add(goalText)
                setGoalText('')
            }} />
        </View>
    );
}

export default GoalsInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center'


    },
    textInput: {
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        width: '80%'
    },

});
