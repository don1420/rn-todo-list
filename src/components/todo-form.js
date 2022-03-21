import React, { useContext, useState } from "react";
import { View, TextInput, Button, Alert, Keyboard, StyleSheet } from "react-native";
import {AppContext} from "../context/appContext";

export const TodoForm = () => {
    const [value, setValue] = useState('');
    const { addTodo } = useContext(AppContext);

    const onPressHandler = () => {
        if (value.trim()) {
            addTodo(value);
            setValue('');
            Keyboard.dismiss();
        }
        else {
            //error
            Alert.alert(`TODO name can't be empty.`);
        }
    }

    return (
        <View>
            <TextInput
                placeholder = "Add TODO"
                onChangeText={newValue => setValue(newValue)}
                autoCorrect = {false}
                value = {value}
                style={styles.input}
            />
            <Button
                title="Add TODO"
                onPress={onPressHandler}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 16
    }
});