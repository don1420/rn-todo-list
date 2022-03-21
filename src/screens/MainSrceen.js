import React from "react";
import { View, StyleSheet } from "react-native";
import { AppHeader } from "../components/app-header";
import { TodoList } from "../components/todo-list";
import {TodoForm} from "../components/todo-form";
import {FilterCondition} from "../components/filter-condition";
import {SearchPanel} from "../components/search-panel";

export const MainScreen = () => {
    return (
        <View style={styles.container}>
            <AppHeader/>
            <SearchPanel/>
            <FilterCondition/>
            <TodoList/>
            <TodoForm/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
});