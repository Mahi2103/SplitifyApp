import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const First = () => {
  return (
    <View style={styles.main}>
      <View style={styles.con}></View>

      <View style={styles.con2}>
        <Text>jhgsjkdfajk</Text>
      </View>
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  main: {},

  con: {
    backgroundColor: 'lightblue',
    height: 650,
  },

  con2: {},
});
