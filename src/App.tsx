/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Alert, Button, Linking, StyleSheet, Text, View } from 'react-native';

const App: () => React.ReactNode = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>hi world</Text>
      <Button title='select' onPress={() => Linking.openURL('https://ygblog.vercel.app')}>
        select
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 40,
  },
  button: {},
});

export default App;
