import React, { useContext } from 'react';
import {View, Text, StyleSheet} from "react-native";
import { AppContext } from "../context/appContext";
import { THEME } from "../constants";

export const AppHeader = () => {
    const appContext = useContext(AppContext);

    return (
        <View>
            <Text style={styles.title}>Todo list</Text>
            <View style={styles.container}>
                {
                    appContext.state.todos.length > 0 &&
                    <Text style={styles.textTodo}>LEFT TO DO: { appContext.state.todos.filter(todo => todo.isCompleted === false).length },&nbsp;</Text>
                }
                {
                    appContext.state.todos.length > 0 &&
                    <Text style={styles.textDone}>DONE: { appContext.state.todos.filter(todo => todo.isCompleted === true).length }</Text>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        textTransform: 'uppercase',
        marginBottom: 10,
        fontSize: 24,
        paddingTop: 15,
        paddingBottom: 15,
        color: THEME.WHITE_COLOR,
        backgroundColor: THEME.MAIN_COLOR,
        textAlign: 'center'
    },
    container: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 20
    },
    textTodo: {
        color: THEME.MAIN_COLOR,
        fontWeight: 'bold',
        fontSize: 20
    },
    textDone: {
        color: THEME.GREEN_COLOR,
        fontWeight: 'bold',
        fontSize: 20
    }
});
