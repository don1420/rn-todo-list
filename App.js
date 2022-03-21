import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { MainScreen } from "./src/screens/MainSrceen";
import { AppState } from "./src/context/appState";

export default function App() {
  return (
      <AppState>
        <View style={styles.container}>
          <MainScreen/>
          <StatusBar style="auto"/>
        </View>
      </AppState>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
