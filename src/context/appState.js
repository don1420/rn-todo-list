import React, { useReducer } from 'react';
import { Alert } from "react-native";
import {appReducer} from "./appReducer";
import {AppContext} from "./appContext";
import * as constants from "../constants";

export const AppState = ({children}) => {
    const initialState = {
        todos: [],
        filterCondition: constants.FILTER_CONDITION_ALL
    }

    const [state, dispatch] = useReducer(appReducer, initialState);

    const addTodo = label => {
        dispatch({
            type: constants.ADD_TODO_ITEM,
            label,
            id: new Date().getTime().toString()
        });
    }

    const removeTodo = id => {
        const todo = state.todos.find(t => t.id === id);
        Alert.alert(
            'Removing an item',
            `Are you sure you want to remove "${todo.label}"?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Remove',
                    style: 'destructive',
                    onPress: () => {
                        dispatch({ type: constants.REMOVE_TODO_ITEM, id });
                    }
                }
            ],
            {cancelable: false}
        )
    }

    const markAsImportant = id => {
        dispatch({ type: constants.MARK_AS_IMPORTANT, id });
    }

    const markAsDone = id => {
        dispatch({ type: constants.MARK_AS_DONE, id });
    }

    const setFilterCondition = filterCondition => {
        dispatch({ type: constants.FILTER_CONDITION, filterCondition });
    }

    const searchTerm = term => {
        dispatch({ type: constants.SEARCH_TERM, term });
    }

    return (
        <AppContext.Provider value={{
            state,
            addTodo,
            removeTodo,
            markAsImportant,
            markAsDone,
            setFilterCondition,
            searchTerm
        }}>
            {children}
        </AppContext.Provider>
    );
}