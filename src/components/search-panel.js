import React, {useContext, useState} from "react";
import {View, StyleSheet, TextInput} from "react-native";
import {AppContext} from "../context/appContext";
import {
    THEME
} from "../constants";

export const SearchPanel = () => {

    const { searchTerm } = useContext(AppContext);
    const [value, setValue] = useState('');

    const onChangeTextHandler = (newValue) => {
        searchTerm(newValue);
        setValue(newValue);
    }

    return (
        <View>
            <TextInput
                placeholder = "Search"
                onChangeText={newValue => onChangeTextHandler(newValue)}
                autoCorrect = {false}
                value = {value}
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
        input: {
            marginLeft: 15,
            marginRight: 15,
            paddingRight: 15,
            paddingLeft: 15,
            paddingTop: 10,
            paddingBottom: 10,
            fontSize: 16,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: THEME.BLACK_COLOR
        }
    }
);