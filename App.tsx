import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppController from './src/AppController';

const App = () => {
  return (
    <View>
      <StatusBar animated={true} backgroundColor="black" />
      <AppController />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
