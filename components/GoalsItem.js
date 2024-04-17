import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalsItem({ text, delelte, id }) {
    return (
        <View style={styles.goalItemContainer}>
            <Pressable onPress={(value) => delelte(id)} android_ripple={{ color: '#dddddd' }} style={({ pressed }) => pressed && styles.pressedItem}>

                <Text style={styles.textColor}>{text}</Text>

            </Pressable>
        </View>
    );
}

export default GoalsItem;

const styles = StyleSheet.create({
    goalItemContainer: {
        width: '100%',
        backgroundColor: '#8338ec',
        marginVertical: 7,
        // padding: 7,
        borderRadius: 5

    },
    pressedItem: {
        opacity: 0.5,
    },
    textColor: {
        color: 'white',
        margin: 7
    }
});