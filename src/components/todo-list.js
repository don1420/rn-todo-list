import React, {useContext} from "react";
import { View, FlatList, Text, Pressable, StyleSheet } from "react-native";
import {
    THEME,
    FILTER_CONDITION_ACTIVE,
    FILTER_CONDITION_ALL,
    FILTER_CONDITION_DONE,
    FILTER_CONDITION_IMPORTANT
} from "../constants";
import {AppContext} from "../context/appContext";

export const TodoList = () => {
    const { state, removeTodo, markAsImportant, markAsDone } = useContext(AppContext);

    const visibleTodos = getVisibleTodos(state.todos, state.filterCondition);

    function getVisibleTodos (todos, filterCondition) {
        if (filterCondition === FILTER_CONDITION_ALL) {
            return todos.filter(item => item.isVisible);
        }

        if (filterCondition === FILTER_CONDITION_DONE) {
            return todos.filter(item => item.isVisible && item.isCompleted);
        }

        if (filterCondition === FILTER_CONDITION_ACTIVE) {
            return todos.filter(item => item.isVisible && !item.isCompleted);
        }

        if (filterCondition === FILTER_CONDITION_IMPORTANT) {
            return todos.filter(item => item.isVisible && item.isImportant);
        }
    };

    return (
        <FlatList
            data={visibleTodos}
            keyExtractor={item => item.id.toString()}
            renderItem = {({item}) => {
                return (
                    <View style={styles.container}>
                        <Pressable
                            onPress={() => markAsDone(item.id)}
                            style={{
                                ...styles.textContainer,
                                backgroundColor: item.isImportant ? THEME.SELECTED_ITEM : THEME.WHITE_COLOR
                            }}>
                            <Text style={{
                                ...styles.text,
                                textDecorationLine: item.isCompleted ? 'line-through' : 'none'
                            }}>
                                {item.label}
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={() => removeTodo(item.id)}
                            style={styles.button}>
                            <Text style={styles.buttonText}>X</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => markAsImportant(item.id)}
                            style={{...styles.button, backgroundColor: THEME.GREEN_COLOR}}
                        >
                            <Text style={styles.buttonText}>!</Text>
                        </Pressable>
                    </View>
                )
            }}>
        </FlatList>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10
    },
    text: {
        textAlign: 'left',
        width: '100%',
        fontSize: 18,
        textDecorationStyle: 'solid',
        textDecorationColor: THEME.BLACK_COLOR
    },
    textContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    button: {
        width: 30,
        height: 30,
        backgroundColor: THEME.DANGER_COLOR,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: THEME.WHITE_COLOR
    }
});