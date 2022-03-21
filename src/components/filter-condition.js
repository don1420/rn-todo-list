import React, { useContext, useState } from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {AppContext} from "../context/appContext";
import {
    FILTER_CONDITION_ACTIVE,
    FILTER_CONDITION_ALL,
    FILTER_CONDITION_DONE,
    FILTER_CONDITION_IMPORTANT,
    THEME
} from "../constants";

export const FilterCondition = () => {
    const [activeFilter, setActiveFilter] = useState(FILTER_CONDITION_ALL);
    const { setFilterCondition } = useContext(AppContext);

    const filterConditionHandler = filterCondition => {
        setFilterCondition(filterCondition);
        setActiveFilter(filterCondition);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => filterConditionHandler(FILTER_CONDITION_ALL)}>
                <Text style={{
                    ...styles.buttonText,
                    color: activeFilter === FILTER_CONDITION_ALL ? THEME.DANGER_COLOR : THEME.BLACK_COLOR
                }}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => filterConditionHandler(FILTER_CONDITION_ACTIVE)}>
                <Text style={{
                    ...styles.buttonText,
                    color: activeFilter === FILTER_CONDITION_ACTIVE ? THEME.DANGER_COLOR : THEME.BLACK_COLOR
                }}>Active</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => filterConditionHandler(FILTER_CONDITION_DONE)}>
                <Text style={{
                    ...styles.buttonText,
                    color: activeFilter === FILTER_CONDITION_DONE ? THEME.DANGER_COLOR : THEME.BLACK_COLOR
                }}>Done</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => filterConditionHandler(FILTER_CONDITION_IMPORTANT)}>
                <Text style={{
                    ...styles.buttonText,
                    color: activeFilter === FILTER_CONDITION_IMPORTANT ? THEME.DANGER_COLOR : THEME.BLACK_COLOR
                }}>Important</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'center'
        },
        button: {
            marginTop: 15,
            marginBottom: 25
        },
        buttonText: {
            fontSize: 18,
            padding: 10,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: THEME.BLACK_COLOR
        }
    }
);